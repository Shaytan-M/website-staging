"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import {
  CONSENT_KEY,
  getConsent,
  setConsent,
  type ConsentValue,
} from "@/lib/analytics";

function subscribe(onStoreChange: () => void) {
  const onConsent = () => onStoreChange();
  const onStorage = (event: StorageEvent) => {
    if (event.key === CONSENT_KEY) onStoreChange();
  };
  window.addEventListener("agellus:consent", onConsent);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener("agellus:consent", onConsent);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): ConsentValue | null {
  return getConsent();
}

function getServerSnapshot(): ConsentValue | null {
  return "declined";
}

export function CookieConsent() {
  // Server snapshot hides the banner to avoid hydration mismatch; client
  // snapshot shows it when no choice has been stored yet.
  const consent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (consent !== null) return null;

  function choose(value: ConsentValue) {
    setConsent(value);
  }

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-white/95 p-4 shadow-[0_-8px_30px_rgba(7,2,60,0.12)] backdrop-blur md:p-5"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <p
            id="cookie-consent-title"
            className="font-display text-base font-semibold text-ink"
          >
            Cookie preferences
          </p>
          <p id="cookie-consent-desc" className="mt-1 text-sm leading-relaxed text-muted">
            We use optional analytics cookies (Google Analytics) to understand
            how visitors use the site. Essential site functionality and
            privacy-friendly performance metrics do not require this consent.{" "}
            <Link
              href={site.legal.cookies}
              className="font-semibold text-indigo underline-offset-4 hover:underline"
            >
              Cookie Notice
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Button type="button" variant="secondary" onClick={() => choose("declined")}>
            Decline
          </Button>
          <Button type="button" onClick={() => choose("accepted")}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
