"use client";

import { useState, useEffect, useRef } from "react";
import { PHONE_NUMBER } from "@/lib/config";
import { ArrowRightIcon } from "@/components/icons";
import Script from "next/script";

type FormFieldProps = {
  label: string;
  name: string;
  description: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  pattern?: string;
  textarea?: boolean;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

function FormField({
  label,
  name,
  description,
  type = "text",
  autoComplete,
  required = false,
  pattern,
  textarea = false,
  rows = 3,
  value,
  onChange,
}: FormFieldProps) {
  const fieldId = `field-${name}`;
  const descriptionId = `${fieldId}-description`;

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={fieldId}
        className="text-sm font-semibold text-[#2A2A2A]"
      >
        {label}
        {required ? (
          <span className="ml-1 text-[#006E7F]">(Required)</span>
        ) : null}
      </label>
      {textarea ? (
        <textarea
          id={fieldId}
          name={name}
          rows={rows}
          aria-describedby={descriptionId}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full rounded-2xl border border-[#2A2A2A]/20 bg-white/90 px-4 py-3 text-sm text-[#2A2A2A] transition focus-visible:border-[#006E7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
        />
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          aria-describedby={descriptionId}
          autoComplete={autoComplete}
          required={required}
          pattern={pattern}
          value={value}
          onChange={onChange}
          className="w-full rounded-2xl border border-[#2A2A2A]/20 bg-white/90 px-4 py-3 text-sm text-[#2A2A2A] transition focus-visible:border-[#006E7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
        />
      )}
      <p id={descriptionId} className="text-xs text-[#2A2A2A]/70">
        {description}
      </p>
    </div>
  );
}

type ContactFormProps = {
  initialProjectType?: string;
};

export function ContactForm({ initialProjectType: _initialProjectType }: ContactFormProps) {
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (turnstileLoaded && turnstileRef.current && typeof window !== "undefined" && (window as any).turnstile) {
      (window as any).turnstile.render(turnstileRef.current, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "",
        theme: "light",
        size: "normal",
      });
    }
  }, [turnstileLoaded]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form || !form.checkValidity()) {
      form?.reportValidity();
      return;
    }

    const successMessage = document.getElementById("contact-form-success");
    const errorMessage = document.getElementById("contact-form-error");
    const submitButton = form.querySelector("button[type='submit']");

    if (successMessage) successMessage.classList.add("hidden");
    if (errorMessage) errorMessage.classList.add("hidden");

    if (submitButton) {
      submitButton.setAttribute("data-loading", "true");
      submitButton.classList.add("pointer-events-none", "opacity-70");
    }

    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        if (successMessage) successMessage.classList.remove("hidden");
        form.reset();
      } else {
        if (errorMessage) errorMessage.classList.remove("hidden");
      }
    } catch (error) {
      if (errorMessage) errorMessage.classList.remove("hidden");
    } finally {
      if (submitButton) {
        submitButton.removeAttribute("data-loading");
        submitButton.classList.remove("pointer-events-none", "opacity-70");
      }
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="font-playfair text-3xl font-bold text-[#2A2A2A]">
        Request Exchange Guidance
      </h2>
      <form
        ref={formRef}
        id="contact-form"
        action="/api/contact"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <FormField
          label="Name"
          name="name"
          type="text"
          autoComplete="name"
          required
          description="Your full name."
        />
        <FormField
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          pattern="[0-9\s\-\(\)]+"
          description="Your phone number for urgent timeline coordination."
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}"
          description="A valid email address for follow-up communication."
        />
        <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#2A2A2A]/20 bg-white/90 px-4 py-3 text-sm font-semibold text-[#2A2A2A]">
          <input type="hidden" name="hasCompleted1031" value="No" />
          <input
            type="checkbox"
            name="hasCompleted1031"
            value="Yes"
            className="h-4 w-4 shrink-0 accent-[#006E7F]"
          />
          Have you completed a 1031 exchange before?
        </label>
        <FormField
          label="Notes"
          name="notes"
          textarea
          rows={5}
          description="Share any exchange questions or context."
        />
        {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
          <div className="flex justify-center">
            <div ref={turnstileRef} id="cf-turnstile" />
          </div>
        )}
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          onLoad={() => setTurnstileLoaded(true)}
          strategy="lazyOnload"
        />
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E6A445] px-6 py-3 text-base font-semibold text-[#2A2A2A] transition hover:bg-[#C88735] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
        >
          Submit Request
          <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="space-y-2" aria-live="polite" role="status">
          <p
            id="contact-form-success"
            className="hidden rounded-full border border-[#006E7F]/30 bg-[#006E7F]/10 px-4 py-3 text-sm text-[#006E7F]"
          >
            Thank you. Your request has been received. A coordinator will
            respond shortly.
          </p>
          <p
            id="contact-form-error"
            className="hidden rounded-full border border-[#E6A445]/30 bg-[#E6A445]/15 px-4 py-3 text-sm text-[#2A2A2A]"
          >
            We could not submit the form. Please call {PHONE_NUMBER} for
            immediate assistance.
          </p>
        </div>
      </form>
      <p className="text-xs text-[#2A2A2A]/70">
        Educational content only. Not tax or legal advice.
      </p>
    </div>
  );
}

