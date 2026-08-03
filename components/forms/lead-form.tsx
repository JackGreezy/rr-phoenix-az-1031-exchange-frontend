"use client";

import { useState, useEffect, useRef, FormEvent } from "react";

declare global {
  interface Window {
    _turnstileLoaded?: boolean;
    turnstile?: {
      render: (element: HTMLElement, options: Record<string, unknown>) => string;
      execute: (widgetId: string, options?: Record<string, unknown>) => Promise<string>;
      reset: (widgetId: string) => void;
    };
  }
}

function loadTurnstile(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window._turnstileLoaded) return Promise.resolve();

  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src^="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
    );
    if (existing) {
      window._turnstileLoaded = true;
      return resolve();
    }
    const s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    s.async = true;
    s.defer = true;
    s.onload = () => {
      window._turnstileLoaded = true;
      resolve();
    };
    s.onerror = () => {
      console.error("Failed to load Turnstile script");
      reject(new Error("Turnstile script failed to load"));
    };
    document.head.appendChild(s);
  });
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  hasCompleted1031: boolean;
  notes: string;
};

export function LeadForm() {
  const captchaRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    hasCompleted1031: false,
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [turnstileId, setTurnstileId] = useState<string | null>(null);
  const [turnstileReady, setTurnstileReady] = useState(false);

  const siteKey = "";

  useEffect(() => {
    let cancelled = false;
    const initTimeout = setTimeout(async () => {
      if (cancelled) return;
      if (!siteKey) return;

      try {
        await loadTurnstile();
        if (cancelled) return;

        if (!window.turnstile) {
          console.error("Turnstile API not available");
          return;
        }

        if (!captchaRef.current) {
          console.error("Turnstile ref not mounted");
          return;
        }

        const id: string = window.turnstile.render(captchaRef.current, {
          sitekey: siteKey,
          size: "normal",
          callback: () => {
            setTurnstileReady(true);
          },
          "error-callback": () => {
            console.warn("Turnstile error");
            setTurnstileReady(false);
          },
          "timeout-callback": () => {
            console.warn("Turnstile timeout");
            setTurnstileReady(false);
          },
        });
        setTurnstileId(id);
        setTurnstileReady(true);
      } catch (error) {
        console.error("Failed to initialize Turnstile:", error);
        setTurnstileReady(false);
      }
    }, 500);

    return () => {
      cancelled = true;
      clearTimeout(initTimeout);
    };
  }, [siteKey]);

  const handleChange = (field: "name" | "email" | "phone" | "notes") => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleHasCompleted1031Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, hasCompleted1031: e.target.checked }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Invalid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setFeedback("Please complete all required fields.");
      return;
    }

    setStatus("submitting");
    setErrors({});
    setFeedback("");

    try {
      if (siteKey && (!turnstileReady || !window.turnstile || !turnstileId)) {
        setFeedback("Please complete the security verification.");
        setStatus("error");
        return;
      }

      let turnstileToken = "";
      if (siteKey && window.turnstile && turnstileId) {
        try {
          window.turnstile.reset(turnstileId);
          turnstileToken = await new Promise<string>((resolve, reject) => {
            if (!window.turnstile) {
              reject(new Error("Turnstile not available"));
              return;
            }
            window.turnstile.execute(turnstileId, {
              async: true,
              action: "form_submit",
              callback: (t: string) => resolve(t),
              "error-callback": () => reject(new Error("turnstile-error")),
              "timeout-callback": () => reject(new Error("turnstile-timeout")),
            });
          });
        } catch (err) {
          console.error("Turnstile execution error:", err);
          setFeedback("Security verification failed. Please try again.");
          setStatus("error");
          if (window.turnstile && turnstileId) {
            window.turnstile.reset(turnstileId);
          }
          return;
        }
      }

      const phoneDigits = formData.phone.replace(/\D/g, "");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: phoneDigits,
          hasCompleted1031: formData.hasCompleted1031 ? "Yes" : "No",
          notes: formData.notes,
          "cf-turnstile-response": turnstileToken,
        }),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          hasCompleted1031: false,
          notes: "",
        });
        if (window.turnstile && turnstileId) {
          window.turnstile.reset(turnstileId);
        }
        setStatus("success");
        setFeedback("Thank you. A Phoenix exchange specialist will follow up within one business day.");
      } else {
        const errorData = await response.json().catch(() => ({ error: "Failed to submit form" }));
        setFeedback(errorData.error || "Failed to submit form. Please try again.");
        setStatus("error");
        if (window.turnstile && turnstileId) {
          window.turnstile.reset(turnstileId);
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFeedback("An error occurred. Please try again or contact us directly.");
      setStatus("error");
      if (window.turnstile && turnstileId) {
        window.turnstile.reset(turnstileId);
      }
    }
  };

  return (
    <form
      id="lead-form"
      onSubmit={handleSubmit}
      className="border border-gray-200 bg-white p-8 shadow-editorial md:p-10">
      <h2 className="mb-2 font-serif text-3xl text-mansion-charcoal">
        Get Free Phoenix 1031 Exchange Guidance
      </h2>
      <p className="mb-8 text-sm text-mansion-charcoal/60">Share the basics of the planned sale. A Phoenix 1031 specialist will follow up to discuss timing, replacement priorities, and available property options.</p>
      <fieldset disabled={status === "submitting"} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mansion-charcoal/70">
              Name <span className="text-mansion-gold">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange("name")}
              autoComplete="name"
              aria-describedby={errors.name ? "name-error" : "name-helper"}
              aria-invalid={!!errors.name}
              className="w-full border border-gray-200 bg-white px-4 py-3 text-mansion-charcoal focus:border-mansion-gold focus:outline-none focus:ring-1 focus:ring-mansion-gold" name="name"/>
            {errors.name ? (
              <p id="name-error" className="mt-1 text-sm text-mansion-gold">
                {errors.name}
              </p>
            ) : (
              <p id="name-helper" className="mt-1 text-xs text-mansion-charcoal/50">
                Primary investor or advisor name
              </p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mansion-charcoal/70">
              Phone Number <span className="text-mansion-gold">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange("phone")}
              autoComplete="tel"
              aria-describedby={errors.phone ? "phone-error" : "phone-helper"}
              aria-invalid={!!errors.phone}
              className="w-full border border-gray-200 bg-white px-4 py-3 text-mansion-charcoal focus:border-mansion-gold focus:outline-none focus:ring-1 focus:ring-mansion-gold" name="phone"/>
            {errors.phone ? (
              <p id="phone-error" className="mt-1 text-sm text-mansion-gold">
                {errors.phone}
              </p>
            ) : (
              <p id="phone-helper" className="mt-1 text-xs text-mansion-charcoal/50">
                We confirm timelines by phone within one business day
              </p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mansion-charcoal/70">
            Email <span className="text-mansion-gold">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange("email")}
            autoComplete="email"
            aria-describedby={errors.email ? "email-error" : "email-helper"}
            aria-invalid={!!errors.email}
            className="w-full border border-gray-200 bg-white px-4 py-3 text-mansion-charcoal focus:border-mansion-gold focus:outline-none focus:ring-1 focus:ring-mansion-gold" name="email"/>
          {errors.email ? (
            <p id="email-error" className="mt-1 text-sm text-mansion-gold">
              {errors.email}
            </p>
          ) : (
            <p id="email-helper" className="mt-1 text-xs text-mansion-charcoal/50">
              We send a confirmation and documentation checklist
            </p>
          )}
        </div>
        <label className="flex cursor-pointer items-center gap-3 border border-gray-200 px-4 py-4 text-sm text-mansion-charcoal/80 transition-colors hover:border-mansion-gold">
          <input type="hidden" name="hasCompleted1031" value="No" />
          <input
            id="hasCompleted1031"
            type="checkbox"
            name="hasCompleted1031"
            value="Yes"
            checked={formData.hasCompleted1031}
            onChange={handleHasCompleted1031Change}
            className="h-4 w-4 shrink-0 accent-mansion-gold"
          />
          Have you completed a 1031 exchange before?
        </label>
        <div>
          <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mansion-charcoal/70">
            Notes
          </label>
          <textarea id="message"
            value={formData.notes}
            onChange={handleChange("notes")}
            className="w-full border border-gray-200 bg-white px-4 py-3 text-mansion-charcoal focus:border-mansion-gold focus:outline-none focus:ring-1 focus:ring-mansion-gold" name="notes" rows={5} placeholder="Share any exchange questions or context"></textarea>
          <p id="message-helper" className="mt-1 text-xs text-mansion-charcoal/50">
            Outline goals, replacement preferences, or questions about the planned sale
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-mansion-gold px-8 py-4 text-base font-semibold text-white transition hover:bg-mansion-gold-dark focus:outline-none focus:ring-2 focus:ring-mansion-gold focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "submitting" ? "Submitting..." : "Start My Exchange"}
        </button>
        <p className="text-center text-xs text-mansion-charcoal/50">Educational content only. Not tax or legal advice.</p>
        {feedback && (
          <p
            role="status"
            aria-live="polite"
            className={`text-center text-sm font-medium ${status === "success" ? "text-green-600" : "text-mansion-gold"}`}
          >
            {feedback}
          </p>
        )}
      </fieldset>
    </form>
  );
}
