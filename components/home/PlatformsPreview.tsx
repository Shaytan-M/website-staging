import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { portfolio } from "@/content/portfolio";

export function PlatformsPreview() {
  return (
    <Section className="bg-white">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo">
                Portfolio
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                Current platforms
              </h2>
            </div>
            <Button href="/portfolio" variant="ghost" className="self-start md:self-auto">
              View all investments
            </Button>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((company, i) => (
            <Reveal key={company.slug} delay={i * 0.06}>
              <Link
                href="/portfolio"
                className="group flex h-full flex-col border-t border-line pt-5 transition-colors hover:border-indigo"
              >
                <div className="flex h-16 items-center">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={160}
                    height={64}
                    className="max-h-12 w-auto object-contain object-left"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink group-hover:text-indigo">
                  {company.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{company.headquarters}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
