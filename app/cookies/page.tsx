import type { Metadata } from "next";
import { LegalDocument, legalMetadata } from "@/components/legal/LegalDocument";

export const metadata: Metadata = legalMetadata("cookies");

export default function CookiesPage() {
  return <LegalDocument pageKey="cookies" />;
}
