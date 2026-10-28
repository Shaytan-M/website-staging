import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container, PageHero, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Agellus Capital in Clayton, Missouri to discuss a platform or add-on opportunity in essential services.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | Agellus Capital", url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" eyebrow="Get in touch" image="/i/contact-hero.png">
        <p>We are eager to hear from you.</p>
      </PageHero>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Agellus Capital, LLC
                </h2>
                <div className="mt-4 space-y-1 text-muted">
                  {site.address.lines.slice(1).map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <div className="mt-6 space-y-2 text-sm">
                  <p>
                    <span className="font-semibold text-ink">Direct: </span>
                    <a
                      href={`tel:${site.phone.direct.replace(/\./g, "")}`}
                      className="text-indigo hover:underline"
                    >
                      {site.phone.direct}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Toll Free: </span>
                    <a
                      href={`tel:${site.phone.tollFree.replace(/\./g, "")}`}
                      className="text-indigo hover:underline"
                    >
                      {site.phone.tollFree}
                    </a>
                  </p>
                </div>
                <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">
                  To discuss a new opportunity or to learn more about Agellus
                  Capital, please contact us using the form.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-sm border border-line bg-soft/40 p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold text-ink">
                  Contact form
                </h2>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
