import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Section";
import { counselNotice, legalPages } from "@/content/legal";

type LegalKey = keyof typeof legalPages;

export function legalMetadata(key: LegalKey): Metadata {
  const page = legalPages[key];
  return {
    title: page.title,
    description: `${page.title} for Agellus Capital. HTML summary with a link to the PDF version.`,
    alternates: { canonical: `/${key}` },
    openGraph: { title: `${page.title} | Agellus Capital`, url: `/${key}` },
    robots: { index: true, follow: true },
  };
}

export function LegalDocument({ pageKey }: { pageKey: LegalKey }) {
  const page = legalPages[pageKey];

  return (
    <Section className="bg-white pt-28 md:pt-32">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">
          {page.title}
        </h1>
        <p className="mt-3 text-sm text-muted">Last updated {page.updated}</p>
        <p className="mt-6 rounded-sm border border-line bg-soft/80 px-4 py-3 text-sm leading-relaxed text-ink">
          {counselNotice}{" "}
          <a
            href={page.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-indigo underline-offset-4 hover:underline"
          >
            Download the PDF
          </a>
          .
        </p>
        <div className="mt-10 space-y-8">
          {page.sections.map((section) => (
            <section
              key={section.heading}
              id={
                section.heading === "Do not sell or share"
                  ? "do-not-sell"
                  : undefined
              }
            >
              <h2 className="font-display text-2xl font-semibold text-ink">
                {section.heading}
              </h2>
              {section.body.map((p) => (
                <p key={p.slice(0, 48)} className="mt-3 text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
        <p className="mt-12 text-sm">
          <Link href="/" className="font-semibold text-indigo hover:underline">
            Back to home
          </Link>
        </p>
      </Container>
    </Section>
  );
}
