"use client";

import { useState, FormEvent, useRef, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  CheckCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  User,
} from "lucide-react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          theme?: string;
          callback: (token: string) => void;
        }
      ) => string;
      reset: (widgetId: string) => void;
    };
  }
}

const SERVICE_TYPES = [
  {
    id: "intro",
    label: "Introductory Call",
    description: "A brief call to discuss your needs and how we can help.",
  },
  {
    id: "demo",
    label: "Solution Demo",
    description: "A walkthrough of our solutions tailored to your requirements.",
  },
  {
    id: "advisory",
    label: "Advisory Consultation",
    description:
      "In-depth discussion on regulatory solution strategy and delivery approach.",
  },
];

const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const days: (Date | null)[] = [];

  // getDay() returns 0=Sun, we want Mon=0
  let startOffset = (firstDay.getDay() + 6) % 7;
  for (let i = 0; i < startOffset; i++) {
    days.push(null);
  }

  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push(new Date(year, month, d));
  }

  return days;
}

function isWeekday(date: Date) {
  const day = date.getDay();
  return day !== 0 && day !== 6;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isPastDate(date: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState("intro");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const widgetIdRef = useRef<string>("");

  // Load Turnstile script on mount
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Callback ref — fires when the Turnstile container DOM element actually mounts
  const turnstileCallbackRef = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;

    function tryRender() {
      if (window.turnstile && node) {
        widgetIdRef.current = window.turnstile.render(node, {
          sitekey:
            process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
            "0x4AAAAAADJczhQkgf09SZzh",
          theme: "light",
          callback: (token: string) => setTurnstileToken(token),
        });
      }
    }

    if (window.turnstile) {
      tryRender();
    } else {
      // Script still loading — poll until ready
      const interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval);
          tryRender();
        }
      }, 100);
    }
  }, []);

  const monthDays = useMemo(
    () => getMonthDays(currentMonth.year, currentMonth.month),
    [currentMonth.year, currentMonth.month]
  );

  const monthLabel = new Date(
    currentMonth.year,
    currentMonth.month
  ).toLocaleDateString("en-GB", { month: "long", year: "numeric" });

  function prevMonth() {
    setCurrentMonth((prev) => {
      if (prev.month === 0) {
        return { year: prev.year - 1, month: 11 };
      }
      return { year: prev.year, month: prev.month - 1 };
    });
  }

  function nextMonth() {
    setCurrentMonth((prev) => {
      if (prev.month === 11) {
        return { year: prev.year + 1, month: 0 };
      }
      return { year: prev.year, month: prev.month + 1 };
    });
  }

  const canGoPrev = (() => {
    const now = new Date();
    return (
      currentMonth.year > now.getFullYear() ||
      (currentMonth.year === now.getFullYear() &&
        currentMonth.month > now.getMonth())
    );
  })();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const body = {
      serviceType:
        SERVICE_TYPES.find((s) => s.id === serviceType)?.label || serviceType,
      date: selectedDate.toISOString().split("T")[0],
      dateFormatted: formatDate(selectedDate),
      time: selectedTime,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: (formData.get("company") as string) || undefined,
      notes: (formData.get("notes") as string) || undefined,
      turnstileToken,
    };

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit booking request");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong"
      );
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
        setTurnstileToken("");
      }
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-corporate p-10 text-center"
      >
        <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-text-primary mb-2">
          Booking Request Received
        </h3>
        <p className="text-sm text-text-secondary mb-4">
          Thank you for requesting a{" "}
          <span className="text-corp-blue font-medium">
            {SERVICE_TYPES.find((s) => s.id === serviceType)?.label}
          </span>
          .
        </p>
        {selectedDate && selectedTime && (
          <div className="bg-bg-secondary rounded-lg p-4 inline-block mb-4 border border-border">
            <p className="text-sm text-text-primary font-medium">
              {formatDate(selectedDate)} at {selectedTime}
            </p>
          </div>
        )}
        <p className="text-sm text-text-secondary">
          We will review your request and confirm the appointment shortly. If
          you need to reach us sooner, call{" "}
          <a
            href="tel:+447465991845"
            className="text-corp-blue hover:underline font-medium"
          >
            +44 7465 991845
          </a>
          .
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Step indicators */}
      <div className="flex items-center gap-2">
        {[
          { num: 1, icon: Calendar, label: "Service" },
          { num: 2, icon: Clock, label: "Date & Time" },
          { num: 3, icon: User, label: "Details" },
        ].map(({ num, icon: Icon, label }, idx) => (
          <div key={num} className="flex items-center gap-2">
            {idx > 0 && (
              <div className={`hidden sm:block w-8 h-px ${step > idx ? "bg-corp-blue" : "bg-border"}`} />
            )}
            <button
              type="button"
              onClick={() => {
                if (num < step) setStep(num);
                if (num === 2 && serviceType) setStep(2);
                if (num === 3 && selectedDate && selectedTime) setStep(3);
              }}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                step === num
                  ? "bg-corp-navy text-white shadow-md"
                  : step > num
                    ? "bg-corp-blue-pale text-corp-navy border border-corp-blue/20"
                    : "bg-bg-secondary text-text-muted border border-border"
              }`}
            >
              <div className={`flex items-center justify-center h-6 w-6 rounded-full text-xs font-bold ${
                step === num
                  ? "bg-white text-corp-navy"
                  : step > num
                    ? "bg-corp-blue text-white"
                    : "bg-border text-text-muted"
              }`}>
                {num}
              </div>
              <span className="hidden sm:inline">{label}</span>
            </button>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Service Type */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-text-primary">
              Select a Service
            </h3>
            <div className="grid gap-4">
              {SERVICE_TYPES.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => {
                    setServiceType(service.id);
                    setStep(2);
                  }}
                  className={`rounded-xl p-6 text-left transition-all border-2 ${
                    serviceType === service.id
                      ? "border-corp-blue bg-corp-blue-pale/40 shadow-md"
                      : "bg-white border-border hover:border-corp-blue/40 card-shadow hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`h-3 w-3 rounded-full border-2 ${
                      serviceType === service.id
                        ? "border-corp-blue bg-corp-blue"
                        : "border-border bg-white"
                    }`} />
                    <p className="text-sm font-bold text-text-primary">
                      {service.label}
                    </p>
                  </div>
                  <p className="text-sm text-text-secondary pl-6">
                    {service.description}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Date & Time */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-text-primary">
              Pick a Date
            </h3>

            {/* Calendar */}
            <div className="card-corporate p-5">
              <div className="flex items-center justify-between mb-4">
                <button
                  type="button"
                  onClick={prevMonth}
                  disabled={!canGoPrev}
                  className="p-1.5 rounded-lg hover:bg-bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-text-secondary"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="text-sm font-semibold text-text-primary">
                  {monthLabel}
                </span>
                <button
                  type="button"
                  onClick={nextMonth}
                  className="p-1.5 rounded-lg hover:bg-bg-secondary transition-colors text-text-secondary"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {DAYS.map((d) => (
                  <div
                    key={d}
                    className="text-center text-xs font-medium text-text-muted py-1"
                  >
                    {d}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {monthDays.map((day, i) => {
                  if (!day) {
                    return <div key={`empty-${i}`} />;
                  }
                  const disabled = !isWeekday(day) || isPastDate(day);
                  const selected = selectedDate && isSameDay(day, selectedDate);

                  return (
                    <button
                      key={day.toISOString()}
                      type="button"
                      disabled={disabled}
                      onClick={() => setSelectedDate(day)}
                      className={`aspect-square flex items-center justify-center rounded-lg text-sm transition-all ${
                        selected
                          ? "bg-corp-navy text-white font-semibold"
                          : disabled
                            ? "text-text-muted/30 cursor-not-allowed"
                            : "text-text-primary hover:bg-bg-secondary"
                      }`}
                    >
                      {day.getDate()}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time slots */}
            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                <h3 className="text-lg font-semibold text-text-primary">
                  Select a Time
                </h3>
                <p className="text-xs text-text-muted">
                  {formatDate(selectedDate)} — UK time (GMT/BST)
                </p>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {TIME_SLOTS.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all border ${
                        selectedTime === time
                          ? "bg-corp-navy text-white border-corp-navy"
                          : "bg-white border-border hover:bg-bg-secondary text-text-secondary"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {selectedDate && selectedTime && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-end"
              >
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-lg bg-corp-navy text-white hover:bg-corp-navy/90 transition-colors"
                >
                  Continue
                  <ChevronRight className="h-4 w-4" />
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Step 3: Details */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Your Details
              </h3>
              {selectedDate && selectedTime && (
                <div className="bg-corp-blue-pale rounded-lg px-4 py-3 inline-flex items-center gap-3 text-sm border border-corp-blue/20">
                  <span className="text-corp-blue font-medium">
                    {SERVICE_TYPES.find((s) => s.id === serviceType)?.label}
                  </span>
                  <span className="text-text-secondary">
                    {formatDate(selectedDate)} at {selectedTime}
                  </span>
                </div>
              )}
            </div>

            <div className="card-corporate p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm text-text-secondary">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="bg-bg-secondary border-border text-text-primary placeholder:text-text-muted/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm text-text-secondary">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="bg-bg-secondary border-border text-text-primary placeholder:text-text-muted/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm text-text-secondary">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your company (optional)"
                  className="bg-bg-secondary border-border text-text-primary placeholder:text-text-muted/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-sm text-text-secondary">
                  Notes
                </Label>
                <Textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Anything you'd like us to know before the call... (optional)"
                  className="bg-bg-secondary border-border text-text-primary placeholder:text-text-muted/50 resize-none"
                />
              </div>

              {/* Turnstile widget */}
              <div ref={turnstileCallbackRef} />

              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-red-600">
                  <AlertCircle className="h-4 w-4" />
                  {errorMsg}
                </div>
              )}

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 text-sm font-medium rounded-lg border border-border text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 px-7 py-2.5 text-sm font-semibold rounded-lg bg-corp-navy text-white hover:bg-corp-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading"
                    ? "Submitting..."
                    : "Confirm Booking Request"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
