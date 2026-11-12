"use client";

import { Button } from "@/components/ui/Button";
import { CONSENT_KEY } from "@/lib/analytics";

export function ResetCookieConsentButton() {
  return (
    <Button
      type="button"
      variant="secondary"
      className="mt-4"
      onClick={() => {
        window.localStorage.removeItem(CONSENT_KEY);
        window.location.reload();
      }}
    >
      Reset cookie preferences
    </Button>
  );
}