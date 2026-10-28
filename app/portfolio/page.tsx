import type { Metadata } from "next";
import { CompanyBlock } from "@/components/portfolio/CompanyBlock";
import { Container, PageHero, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { portfolio } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Agellus Capital’s current portfolio platforms spanning fire & life safety, managed IT, commercial landscaping, and restoration services.",
  alternates: { canonical: "/portfolio" },
  openGraph: { title: "Portfolio | Agellus Capital", url: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Portfolio"
        eyebrow="Investments"
        image="/i/about-bg1.jpg"
      >
        <p>Current platforms across essential services markets.</p>
      </PageHero>

      <Section className="bg-background">
        <Container>
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              Current investments
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {portfolio.map((company, i) => (
              <Reveal key={company.slug} delay={i * 0.06}>
                <CompanyBlock company={company} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
