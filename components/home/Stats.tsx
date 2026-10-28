import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

export function Stats() {
  return (
    <Section className="bg-steel py-14 text-white md:py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {site.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="md:border-l md:border-white/30 md:pl-8 first:md:border-l-0 first:md:pl-0">
                <p className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/90 md:text-base">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
