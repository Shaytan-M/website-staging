import type { Metadata } from "next";
import { AboutFaq } from "@/components/home/AboutFaq";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { TearsheetButton } from "@/components/analytics/TearsheetButton";
import { Container, PageHero, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { aboutContent } from "@/content/criteria";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Agellus Capital partners with management teams to scale essential, non-discretionary services businesses through organic growth and add-on acquisitions.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Agellus Capital",
    description:
      "Learn how Agellus Capital partners with management teams to scale essential, non-discretionary services businesses through organic growth and add-on acquisitions.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <FaqJsonLd />
      <PageHero title="About" eyebrow="The firm" image="/i/aboutus-hero.png">
        <p>{aboutContent.headline}</p>
      </PageHero>

      <Section className="bg-white">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-lg leading-relaxed text-muted md:text-xl">
                {aboutContent.body}
              </p>
              <div className="mt-8">
                <TearsheetButton />
              </div>
              <AboutFaq />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-indigo-deep text-white">
        <Container>
          <Reveal>
            <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
              {aboutContent.pillarsIntro}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {aboutContent.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="border-t border-steel/50 pt-6">
                  <h3 className="font-display text-xl font-semibold text-steel">
                    {pillar.title}
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                    {pillar.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
