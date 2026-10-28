import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { verticals } from "@/content/criteria";

export function Thesis() {
  return (
    <Section className="bg-background">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo">
              Our focus
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Building platforms where essential services meet fragmented markets
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              Agellus partners with founders and management teams to scale
              non-discretionary services businesses through organic growth and
              add-on acquisitions—backed by a repeatable value creation playbook.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {verticals.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.08}>
              <div className="h-full border-t-2 border-indigo pt-6">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {v.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{v.thesis}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-indigo">
                  {v.subVerticals.join(" · ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Button href="/investment-criteria" variant="secondary">
            View investment criteria
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
