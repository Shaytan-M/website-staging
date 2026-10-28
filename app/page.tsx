import type { Metadata } from "next";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { PlatformsPreview } from "@/components/home/PlatformsPreview";
import { Stats } from "@/components/home/Stats";
import { Thesis } from "@/components/home/Thesis";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} — Private Equity for Essential Services`,
  },
  description:
    "Agellus Capital is a St. Louis–based private equity firm building platforms in essential, non-discretionary services across the United States and Canada through organic growth and buy-and-build acquisitions.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — Private Equity for Essential Services`,
    description:
      "Lower middle-market private equity focused on essential services platforms across the U.S. and Canada.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Thesis />
      <PlatformsPreview />
      <FinalCta />
    </>
  );
}
