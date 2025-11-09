"use client";

import { useState, useEffect, useRef } from "react";
import { getAllServices } from "@/lib/services";
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

export function ContactForm({ initialProjectType }: ContactFormProps) {
  const [projectType, setProjectType] = useState(initialProjectType || "");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);

  const services = getAllServices();
  const serviceNames = services.map((s) => s.name);

  useEffect(() => {
    if (initialProjectType) {
      setProjectType(initialProjectType);
    }
  }, [initialProjectType]);

  useEffect(() => {
    if (turnstileLoaded && turnstileRef.current && typeof window !== "undefined" && (window as any).turnstile) {
      (window as any).turnstile.render(turnstileRef.current, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "",
        theme: "light",
        size: "normal",
      });
    }
  }, [turnstileLoaded]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProjectTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setProjectType(value);

    if (value.length > 0) {
      const filtered = serviceNames.filter((name) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setProjectType(suggestion);
    setSuggestions([]);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

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
      const response = await fetch("/api/lead", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        if (successMessage) successMessage.classList.remove("hidden");
        form.reset();
        setProjectType("");
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
        action="/api/lead"
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
          label="Company"
          name="company"
          type="text"
          autoComplete="organization"
          description="Your company or organization name, if applicable."
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
        <FormField
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          pattern="[0-9\s\-\(\)]+"
          description="Your phone number for urgent timeline coordination."
        />
        <div className="flex flex-col gap-2">
          <label
            htmlFor="project-type"
            className="text-sm font-semibold text-[#2A2A2A]"
          >
            Project Type
            <span className="ml-1 text-[#006E7F]">(Required)</span>
          </label>
          <div className="relative">
            <input
              ref={inputRef}
              id="project-type"
              name="projectType"
              type="text"
              autoComplete="off"
              required
              value={projectType}
              onChange={handleProjectTypeChange}
              onFocus={() => {
                if (suggestions.length > 0) {
                  setShowSuggestions(true);
                }
              }}
              aria-describedby="project-type-description"
              className="w-full rounded-2xl border border-[#2A2A2A]/20 bg-white/90 px-4 py-3 text-sm text-[#2A2A2A] transition focus-visible:border-[#006E7F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
            />
            {showSuggestions && suggestions.length > 0 && (
              <div
                ref={suggestionsRef}
                className="absolute z-10 mt-1 w-full rounded-2xl border border-white/70 bg-white shadow-[0_12px_40px_rgba(24,24,24,0.15)]"
                role="listbox"
              >
                {suggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full px-4 py-3 text-left text-sm text-[#2A2A2A] transition hover:bg-[#F5F3EF] focus-visible:bg-[#F5F3EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[#006E7F]"
                    role="option"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
          <p id="project-type-description" className="text-xs text-[#2A2A2A]/70">
            Describe the type of exchange or service you need. Start typing to
            see suggestions.
          </p>
        </div>
        <FormField
          label="Timeline"
          name="timeline"
          type="text"
          description="Estimated timeline for your exchange, including key dates if known."
        />
        <FormField
          label="Details"
          name="details"
          textarea
          rows={4}
          description="Share timeline specifics, replacement objectives, or advisory team contacts."
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

