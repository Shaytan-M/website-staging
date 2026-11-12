"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";
import {
  CONTACT_FIELD_LIMITS,
  type ContactField,
  validateContactPayload,
} from "@/lib/contact";

type Status = "idle" | "loading" | "success" | "error";
type FieldErrors = Partial<Record<ContactField, string>>;

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
        },
      ) => string;
      reset: (id?: string) => void;
    };
  }
}


export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [token, setToken] = useState("");
  const widget = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  const [resetKey, setResetKey] = useState(0);

  const [messageLength, setMessageLength] = useState(0);

  const messageLimit = CONTACT_FIELD_LIMITS.message;
  const messageLimitReached = messageLength >= messageLimit;

  useEffect(() => {
    if (!siteKey || !widget.current) return;

    const render = () => {
      if (!widget.current || !window.turnstile || widgetId.current) return;
      widgetId.current = window.turnstile.render(widget.current, {
        sitekey: siteKey,
        callback: (value) => {
          setToken(value);
          setFieldErrors((current) => {
            const next = { ...current };
            delete next.turnstileToken;
            return next;
          });
        },
        "expired-callback": () => {
          setToken("");
          setFieldErrors((current) => ({
            ...current,
            turnstileToken: "Verification expired. Please try again.",
          }));
        },
        "error-callback": () => {
          setToken("");
          setFieldErrors((current) => ({
            ...current,
            turnstileToken:
              "Verification is unavailable. Please refresh and try again.",
          }));
        },
      });
    };

    if (window.turnstile) {
      render();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      "script[data-agellus-turnstile]",
    );
    if (existing) {
      existing.addEventListener("load", render);
      return () => existing.removeEventListener("load", render);
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.dataset.agellusTurnstile = "true";
    script.addEventListener("load", render);
    document.head.appendChild(script);
    return () => script.removeEventListener("load", render);
  }, []);

  

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    setFormError(null);
    setFieldErrors({});

    const form = e.currentTarget;
    const payload = {
      ...Object.fromEntries(new FormData(form).entries()),
      turnstileToken: token,
    };

    const focusField = (field: ContactField) => {
      requestAnimationFrame(() => {
        if (field === "turnstileToken") {
          widget.current?.querySelector<HTMLElement>("iframe")?.focus();
          return;
        }
        const control = form.elements.namedItem(field);
        if (control instanceof HTMLElement) control.focus();
      });
    };

    const validation = validateContactPayload(payload);
    if (!validation.ok) {
      setStatus("error");
      if (validation.field) {
        setFieldErrors({ [validation.field]: validation.error });
        focusField(validation.field);
      } else {
        setFormError(validation.error);
      }
      return;
    }

    if (siteKey && !token) {
      setStatus("error");
      setFieldErrors({
        turnstileToken: "Please complete the verification challenge.",
      });
      focusField("turnstileToken");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as {
        error?: string;
        field?: ContactField;
      };

      if (!res.ok) {
        setStatus("error");
        const error = json.error || "Something went wrong. Please try again.";
        if (json.field && (json.field !== "turnstileToken" || siteKey)) {
          setFieldErrors({ [json.field]: error });
          focusField(json.field);
        } else {
          setFormError(error);
        }
        window.turnstile?.reset(widgetId.current ?? undefined);
        setToken("");
        return;
      }

      setStatus("success");
      setMessage("Thank you. We will be in touch shortly.");
      trackEvent("contact_form_submit", { method: "website_form" });
      form.reset();
      setMessageLength(0);
      setResetKey((current) => current + 1);
      window.turnstile?.reset(widgetId.current ?? undefined);
      setToken("");
    } catch {
      setStatus("error");
      setFormError(
        "Unable to send your message. Please try again or call us.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="First name"
          key={`firstName-${resetKey}`}
          name="firstName"
          required
          error={fieldErrors.firstName}
        />
        <Field
          label="Last name"
          key={`lastName-${resetKey}`}
          name="lastName"
          required
          error={fieldErrors.lastName}
        />
      </div>
      <Field
        label="Email"
        key={`email-${resetKey}`}
        name="email"
        type="email"
        required
        error={fieldErrors.email}
      />
      <Field label="Company" name="company" error={fieldErrors.company} />
      <Field
        label="Phone"
        key={`phone-${resetKey}`}
        name="phone"
        type="tel"
        error={fieldErrors.phone}
      />
      
  <div>
    <label
      htmlFor="message"
      className="mb-1.5 block text-sm font-semibold text-ink"
    >
      Message <span className="text-indigo">*</span>
    </label>

    <textarea
      id="message"
      name="message"
      required
      rows={5}
      maxLength={messageLimit}
      onChange={(e) => setMessageLength(e.currentTarget.value.length)}
      aria-invalid={Boolean(fieldErrors.message)}
      aria-describedby={[
        fieldErrors.message ? "message-error" : null,
        "message-counter",
      ]
        .filter(Boolean)
        .join(" ")}
      className={`w-full rounded-md border bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-indigo ${
        fieldErrors.message || messageLimitReached
          ? "border-red-600"
          : "border-slate-500"
      }`}
    />

    <div className="mt-1.5 flex items-start justify-between gap-3">
      <div>
        {fieldErrors.message ? (
          <p id="message-error" className="text-sm text-red-700">
            {fieldErrors.message}
          </p>
        ) : messageLimitReached ? (
          <p role="status" className="text-sm text-red-700">
            Maximum of {messageLimit} characters reached.
          </p>
        ) : null}
      </div>

      <span
        id="message-counter"
        className={`shrink-0 text-xs ${
          messageLimitReached ? "text-red-700" : "text-muted"
        }`}
      >
        {messageLength} / {messageLimit}
      </span>
    </div>
  </div>


      <input
        type="text"
        name="website"
        maxLength={CONTACT_FIELD_LIMITS.website}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      {siteKey ? (
        <div>
          <div
            id="turnstile-widget"
            ref={widget}
            className="min-h-[65px]"
            aria-describedby={
              fieldErrors.turnstileToken ? "turnstile-error" : undefined
            }
          />
          {fieldErrors.turnstileToken ? (
            <p id="turnstile-error" className="mt-1.5 text-sm text-red-700">
              {fieldErrors.turnstileToken}
            </p>
          ) : null}
        </div>
      ) : null}

      <p className="text-xs leading-relaxed text-muted">
        Submitting this form does not create an advisory, investment, or
        attorney-client relationship and is not a solicitation to sell
        securities. See our{" "}
        <Link href="/privacy" className="font-semibold text-indigo underline-offset-4 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Submit"}
      </Button>

      {formError ? (
        <p role="alert" className="text-sm text-red-700">
          {formError}
        </p>
      ) : null}

      {message ? (
        <p role="status" className="text-sm text-indigo">
          {message}
        </p>
      ) : null}
    </form>
  );
}


function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: ContactField;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  const [length, setLength] = useState(0);
  const [phoneValue, setPhoneValue] = useState("");

  const maxLength = CONTACT_FIELD_LIMITS[name];
  const limitReached = length >= maxLength;
  const errorId = `${name}-error`;
  const limitId = `${name}-limit`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value;

    if (name === "phone") {
      const sanitized = input.replace(/[^0-9+()\s-]/g, "");

      setPhoneValue(sanitized);
      setLength(sanitized.length);
      return;
    }

    setLength(input.length);
  };
  

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-semibold text-ink"
      >
        {label}
        {required ? <span className="text-indigo"> *</span> : null}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        value={name === "phone" ? phoneValue : undefined}
        onChange={handleChange}
        inputMode={name === "phone" ? "tel" : undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={[
          error ? errorId : null,
          limitReached ? limitId : null,
        ]
          .filter(Boolean)
          .join(" ") || undefined}
        className={`w-full rounded-md border bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-indigo ${
          error || limitReached ? "border-red-600" : "border-slate-500"
        }`}
      />

      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      ) : limitReached ? (
        <p
          id={limitId}
          role="status"
          className="mt-1.5 text-sm text-red-700"
        >
          Maximum of {maxLength} characters reached.
        </p>
      ) : null}
    </div>
  );
}

