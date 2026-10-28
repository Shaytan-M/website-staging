"use client";

import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import { trackEvent } from "@/lib/analytics";

export function TearsheetButton({
  variant = "primary",
  className,
  children = "Download tearsheet",
}: {
  variant?: "primary" | "secondary" | "ghost" | "onDark";
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Button
      href={site.tearsheet}
      variant={variant}
      className={className}
      onClick={() => trackEvent("tearsheet_download", { location: "site" })}
    >
      {children}
    </Button>
  );
}
