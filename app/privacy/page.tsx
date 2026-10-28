import type { Metadata } from "next";
import { LegalDocument, legalMetadata } from "@/components/legal/LegalDocument";

export const metadata: Metadata = legalMetadata("privacy");

export default function PrivacyPage() {
  return <LegalDocument pageKey="privacy" />;
}
