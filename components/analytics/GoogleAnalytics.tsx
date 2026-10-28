"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useSyncExternalStore } from "react";
import {
  CONSENT_KEY,
  GA_MEASUREMENT_ID,
  getConsent,
  trackPageView,
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
  return null;
}

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastUrl = useRef<string | null>(null);
  const query = searchParams.toString();

  useEffect(() => {
    const url = query ? `${pathname}?${query}` : pathname;
    if (lastUrl.current === url) return;
    lastUrl.current = url;
    trackPageView(url);
  }, [pathname, query]);

  return null;
}

export function GoogleAnalytics() {
  const consent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (!GA_MEASUREMENT_ID || consent !== "accepted") return null;

  return (
    <>
      <Script
        id="ga4-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}
