import { Button } from "@/components/ui/Button";
import { TearsheetButton } from "@/components/analytics/TearsheetButton";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <Section className="bg-indigo-deep text-white">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Ready to discuss an opportunity?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
              Whether you are a founder, management team, or intermediary, we are
              eager to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="onDark">
                Contact us
              </Button>
              <TearsheetButton
                variant="secondary"
                className="border-white/35 text-white hover:border-white hover:bg-white/10"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
