"use client";

import Image from "next/image";
import type { PortfolioCompany } from "@/content/portfolio";
import { trackEvent } from "@/lib/analytics";

export function CompanyBlock({ company }: { company: PortfolioCompany }) {
  return (
    <article className="flex h-full flex-col border-t-2 border-indigo pt-6">
      <div className="flex h-20 items-center rounded-sm bg-soft/80 px-4">
        <Image
          src={company.logo}
          alt={`${company.name} logo`}
          width={180}
          height={72}
          className="max-h-14 w-auto object-contain object-left"
        />
      </div>
      <h2 className="mt-5 font-display text-xl font-semibold text-ink">
        {company.name}
      </h2>
      <p className="mt-2 text-sm text-muted">
        Investment Date: {company.investmentDate}
      </p>
      <p className="text-sm text-muted">Headquarters: {company.headquarters}</p>
      <div className="mt-4 flex-1 space-y-3 text-sm leading-relaxed text-muted">
        {company.description.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </div>
      <a
        href={company.website}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex text-sm font-semibold text-indigo underline-offset-4 hover:underline"
        onClick={() =>
          trackEvent("portfolio_outbound_click", {
            company: company.name,
            destination: company.website,
          })
        }
      >
        Visit website
        <span className="sr-only"> for {company.name} (opens in a new window)</span>
      </a>
    </article>
  );
}
