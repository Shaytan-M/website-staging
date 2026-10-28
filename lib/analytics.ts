export const CONSENT_KEY = "agellus-cookie-consent";
export type ConsentValue = "accepted" | "declined";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ENABLED === "true" &&
  measurementId &&
  /^G-[A-Z0-9]+$/i.test(measurementId)
    ? measurementId
    : null;

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  if (value === "accepted" || value === "declined") return value;
  return null;
}

export function setConsent(value: ConsentValue) {
  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent("agellus:consent", { detail: value }));
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __agellusGaConfigured?: string;
  }
}

function getGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  return window.gtag;
}

export function initializeAnalytics() {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return false;
  if (getConsent() !== "accepted") return false;

  const gtag = getGtag();
  if (window.__agellusGaConfigured !== GA_MEASUREMENT_ID) {
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      send_page_view: false,
    });
    window.__agellusGaConfigured = GA_MEASUREMENT_ID;
  }
  return true;
}

export function trackPageView(url: string) {
  if (!initializeAnalytics()) return;
  getGtag()("event", "page_view", {
    page_location: new URL(url, window.location.origin).href,
    page_path: url,
    page_title: document.title,
    send_to: GA_MEASUREMENT_ID,
  });
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;
  if (!initializeAnalytics()) return;
  getGtag()("event", name, {
    ...params,
    send_to: GA_MEASUREMENT_ID,
    transport_type: "beacon",
  });
}
