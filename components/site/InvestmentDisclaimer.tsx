"use client";

import { investmentDisclaimer } from "@/content/legal";

export function InvestmentDisclaimer({ className }: { className?: string }) {
  return (
    <p className={className ?? "text-xs leading-relaxed text-white/55"}>
      {investmentDisclaimer}
    </p>
  );
}
