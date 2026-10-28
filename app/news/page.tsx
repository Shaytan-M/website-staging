import type { Metadata } from "next";
import { NewsList } from "@/components/news/NewsList";
import { Container, PageHero, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { news } from "@/content/news";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Firm news, press releases, and podcasts covering Agellus Capital’s fund activity, portfolio investments, and private equity insights.",
  alternates: { canonical: "/news" },
  openGraph: { title: "News & Insights | Agellus Capital", url: "/news" },
};

export default function NewsPage() {
  return (
    <>
      <PageHero title="News & Insights" eyebrow="Updates" image="/i/news-img.png">
        <p>Firm announcements, portfolio news, and conversations.</p>
      </PageHero>

      <Section className="bg-white">
        <Container>
          <Reveal>
            <NewsList items={news} />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
