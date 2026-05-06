"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: { sitekey: string; theme?: string; callback: (token: string) => void }
      ) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string>("");

  useEffect(() => {
    // Load Turnstile script
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.onload = () => {
      if (window.turnstile && turnstileRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAADJczhQkgf09SZzh",
          theme: "light",
          callback: (token: string) => setTurnstileToken(token),
        });
      }
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      turnstileToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      // Reset Turnstile
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
        setTurnstileToken("");
      }
    }
  }

  if (status === "success") {
    return (
      <div className="card-corporate p-10 text-center">
        <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Thank You for Getting in Touch
        </h3>
        <p className="text-sm text-text-secondary mb-4">
          We appreciate you reaching out to us. Your message has been received
          and a member of our team will respond shortly.
        </p>
        <p className="text-sm text-text-secondary">
          If you have not heard from us within 3 hours, please contact us
          directly on{" "}
          <a href="tel:+447465991845" className="text-corp-blue hover:underline font-medium">
            +44 7465 991845
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-corporate p-8 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm text-text-secondary">
            Name
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
            Email
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
        <Label htmlFor="subject" className="text-sm text-text-secondary">
          Subject
        </Label>
        <Input
          id="subject"
          name="subject"
          required
          placeholder="How can we help?"
          className="bg-bg-secondary border-border text-text-primary placeholder:text-text-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm text-text-secondary">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your requirements..."
          className="bg-bg-secondary border-border text-text-primary placeholder:text-text-muted/50 resize-none"
        />
      </div>

      {/* Turnstile widget */}
      <div ref={turnstileRef} />

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded-lg bg-corp-navy text-white hover:bg-corp-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
