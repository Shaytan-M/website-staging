import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PersonJsonLd } from "@/components/seo/PersonJsonLd";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { getTeamMember, team } from "@/content/team";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return {};
  const description =
    member.bio[0].length > 155
      ? `${member.bio[0].slice(0, 152).trimEnd()}…`
      : member.bio[0];

  return {
    title: `${member.name}, ${member.title}`,
    description,
    alternates: { canonical: `/team/${member.slug}` },
    openGraph: {
      title: `${member.name} | ${site.name}`,
      description,
      url: `/team/${member.slug}`,
      images: [{ url: member.image }],
    },
  };
}

export default async function BioPage({ params }: Props) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  return (
    <Section className="bg-white pt-28 md:pt-32">
      <PersonJsonLd member={member} />
      <Container>
        <Link
          href="/team"
          className="text-sm font-semibold text-indigo underline-offset-4 hover:underline"
        >
          ← Back to Team
        </Link>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-soft">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="320px"
              priority
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo">
              {member.title}
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              {member.name}
            </h1>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted md:text-lg">
              {member.bio.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="secondary">
                Contact the firm
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
