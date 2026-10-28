import type { Metadata } from "next";
import { TearsheetButton } from "@/components/analytics/TearsheetButton";
import { Container, PageHero, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { buyAndBuild, criteriaIntro, verticals } from "@/content/criteria";

export const metadata: Metadata = {
  title: "Investment Criteria",
  description:
    "Agellus targets essential services platforms with $2–25M of EBITDA and add-ons of any size across B2B, consumer, and supply chain & infrastructure services.",
  alternates: { canonical: "/investment-criteria" },
  openGraph: {
    title: "Investment Criteria | Agellus Capital",
    url: "/investment-criteria",
  },
};

export default function InvestmentCriteriaPage() {
  return (
    <>
      <PageHero
        title="Investment Criteria"
        eyebrow="Strategy"
        image="/i/IC-hero.png"
      >
        <p>{criteriaIntro.headline}</p>
      </PageHero>

      <Section className="bg-white">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-lg leading-relaxed text-muted">
                {criteriaIntro.body}
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {criteriaIntro.sizes.map((size) => (
                  <div
                    key={size.label}
                    className="border-t-2 border-indigo bg-soft/60 px-5 py-6"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo">
                      {size.label}
                    </p>
                    <p className="mt-2 font-display text-2xl font-semibold text-ink">
                      {size.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <TearsheetButton />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Essential, non-discretionary services
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              We focus on three key verticals. See below for more detail on each
              focus area.
            </p>
          </Reveal>

          <div className="mt-12 space-y-10">
            {verticals.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.05}>
                <article className="grid gap-6 border-t border-line pt-8 lg:grid-cols-[1fr_1.2fr]">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      {v.name}
                    </h3>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-indigo">
                      Sub-verticals
                    </p>
                    <p className="mt-2 text-sm text-muted">
                      {v.subVerticals.join(" · ")}
                    </p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo">
                        Thesis
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {v.thesis}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo">
                        Growth drivers
                      </p>
                      <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted">
                        {v.growthDrivers.map((d) => (
                          <li key={d}>• {d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              The benefits of a buy-and-build strategy
            </h2>
            <p className="mt-4 max-w-3xl text-muted">{buyAndBuild.intro}</p>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {buyAndBuild.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="h-full border-t-2 border-indigo pt-6">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {pillar.title}
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                    {pillar.points.map((p) => (
                      <li key={p}>{p}</li>
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
