import type { Metadata } from "next";
import { MemberCard } from "@/components/team/MemberCard";
import { Container, PageHero, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { teamIntro } from "@/content/criteria";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Agellus Capital investment and operating team—experienced private equity professionals partnering with founders across essential services.",
  alternates: { canonical: "/team" },
  openGraph: { title: "Team | Agellus Capital", url: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <PageHero title="Team" eyebrow="People" image="/i/team-hero.png">
        <p>{teamIntro.headline}</p>
      </PageHero>

      <Section className="bg-background">
        <Container>
          <Reveal>
            <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">
              {teamIntro.body}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.slug} delay={(i % 4) * 0.05}>
                <MemberCard member={member} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
