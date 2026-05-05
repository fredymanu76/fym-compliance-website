"use client";

import { useState, FormEvent, useRef, useEffect, useMemo } from "react";
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
    label: "Platform Demo",
    description: "A walkthrough of our platforms tailored to your requirements.",
  },
  {
    id: "advisory",
    label: "Technical Advisory",
    description:
      "In-depth discussion on regulatory technology strategy and architecture.",
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
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string>("");
  const scriptLoadedRef = useRef(false);

  // Load Turnstile script on mount
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.onload = () => {
      scriptLoadedRef.current = true;
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Render Turnstile widget when step 3 becomes active and ref is in DOM
  useEffect(() => {
    if (step !== 3) return;
    if (widgetIdRef.current) return; // already rendered

    function tryRender() {
      if (window.turnstile && turnstileRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey:
            process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
            "0x4AAAAAADJczhQkgf09SZzh",
          theme: "dark",
          callback: (token: string) => setTurnstileToken(token),
        });
      }
    }

    if (scriptLoadedRef.current) {
      tryRender();
    } else {
      // Script still loading — poll briefly
      const interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval);
          tryRender();
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [step]);

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
        className="glass rounded-xl p-10 text-center"
      >
        <CheckCircle className="h-12 w-12 text-facet-green mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Booking Request Received
        </h3>
        <p className="text-sm text-text-muted mb-4">
          Thank you for requesting a{" "}
          <span className="text-facet-amber font-medium">
            {SERVICE_TYPES.find((s) => s.id === serviceType)?.label}
          </span>
          .
        </p>
        {selectedDate && selectedTime && (
          <div className="glass rounded-lg p-4 inline-block mb-4">
            <p className="text-sm text-text-primary font-medium">
              {formatDate(selectedDate)} at {selectedTime}
            </p>
          </div>
        )}
        <p className="text-sm text-text-muted">
          We will review your request and confirm the appointment shortly. If
          you need to reach us sooner, call{" "}
          <a
            href="tel:+447465991845"
            className="text-facet-amber hover:underline font-medium"
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
      <div className="flex items-center gap-3">
        {[
          { num: 1, icon: Calendar, label: "Service" },
          { num: 2, icon: Clock, label: "Date & Time" },
          { num: 3, icon: User, label: "Details" },
        ].map(({ num, icon: Icon, label }) => (
          <button
            key={num}
            type="button"
            onClick={() => {
              if (num < step) setStep(num);
              if (num === 2 && serviceType) setStep(2);
              if (num === 3 && selectedDate && selectedTime) setStep(3);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              step === num
                ? "bg-facet-amber/15 text-facet-amber border border-facet-amber/30"
                : step > num
                  ? "bg-bg-subtle text-text-primary border border-border"
                  : "bg-bg-subtle/50 text-text-muted border border-transparent"
            }`}
          >
            <Icon className="h-4 w-4" />
            <span className="hidden sm:inline">{label}</span>
          </button>
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
            <h3 className="text-lg font-semibold text-text-primary">
              Select a Service
            </h3>
            <div className="grid gap-3">
              {SERVICE_TYPES.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => {
                    setServiceType(service.id);
                    setStep(2);
                  }}
                  className={`glass rounded-xl p-5 text-left transition-all ${
                    serviceType === service.id
                      ? "ring-2 ring-facet-amber bg-facet-amber/5"
                      : "hover:bg-bg-subtle/50"
                  }`}
                >
                  <p className="text-sm font-semibold text-text-primary mb-1">
                    {service.label}
                  </p>
                  <p className="text-xs text-text-muted">
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
            <div className="glass rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <button
                  type="button"
                  onClick={prevMonth}
                  disabled={!canGoPrev}
                  className="p-1.5 rounded-lg hover:bg-bg-subtle transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-text-muted"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="text-sm font-semibold text-text-primary">
                  {monthLabel}
                </span>
                <button
                  type="button"
                  onClick={nextMonth}
                  className="p-1.5 rounded-lg hover:bg-bg-subtle transition-colors text-text-muted"
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
                          ? "bg-facet-amber text-bg-primary font-semibold"
                          : disabled
                            ? "text-text-muted/30 cursor-not-allowed"
                            : "text-text-primary hover:bg-bg-subtle"
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
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedTime === time
                          ? "bg-facet-amber text-bg-primary"
                          : "glass hover:bg-bg-subtle/50 text-text-muted"
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
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-lg bg-facet-amber text-bg-primary hover:bg-facet-amber/90 transition-colors"
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
                <div className="glass rounded-lg px-4 py-3 inline-flex items-center gap-3 text-sm">
                  <span className="text-facet-amber font-medium">
                    {SERVICE_TYPES.find((s) => s.id === serviceType)?.label}
                  </span>
                  <span className="text-text-muted">
                    {formatDate(selectedDate)} at {selectedTime}
                  </span>
                </div>
              )}
            </div>

            <div className="glass rounded-xl p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm text-text-muted">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="bg-bg-subtle border-border text-text-primary placeholder:text-text-muted/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm text-text-muted">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="bg-bg-subtle border-border text-text-primary placeholder:text-text-muted/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm text-text-muted">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your company (optional)"
                  className="bg-bg-subtle border-border text-text-primary placeholder:text-text-muted/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-sm text-text-muted">
                  Notes
                </Label>
                <Textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Anything you'd like us to know before the call... (optional)"
                  className="bg-bg-subtle border-border text-text-primary placeholder:text-text-muted/50 resize-none"
                />
              </div>

              {/* Turnstile widget */}
              <div ref={turnstileRef} />

              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-facet-red">
                  <AlertCircle className="h-4 w-4" />
                  {errorMsg}
                </div>
              )}

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 text-sm font-medium rounded-lg border border-border text-text-muted hover:text-text-primary hover:bg-bg-subtle transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 px-7 py-2.5 text-sm font-semibold rounded-lg bg-facet-amber text-bg-primary hover:bg-facet-amber/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
