"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-indigo-deep text-white">
      <Image
        src="/i/Homepage-tablet.png"
        alt="Technician performing essential home services work"
        fill
        preload
        className="object-cover"
        sizes="100vw"
      />
      {!reduce ? (
        <video
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        >
          <source
            src="/v/hero-new.mp4"
            type="video/mp4"
            media="(min-width: 768px) and (prefers-reduced-motion: no-preference)"
          />
        </video>
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-deep via-indigo-deep/75 to-indigo-deep/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep/80 via-transparent to-indigo-deep/30" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1280px] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 md:pb-24">
        <div className="max-w-3xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-steel md:text-base">
            {site.name}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            We partner with management teams to build market-leading platforms in
            essential, non-discretionary services across the U.S. and Canada.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="onDark">
              Share an opportunity
            </Button>
            <Button
              href="/investment-criteria"
              variant="secondary"
              className="border-white/35 text-white hover:border-white hover:bg-white/10"
            >
              Investment criteria
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
