import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section className="bg-indigo-deep text-white pt-32 md:pt-40">
      <Container className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-steel">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-white/80">
          The page you requested is not available. Return home or contact the
          firm.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/" variant="onDark">
            Home
          </Button>
          <Button
            href="/contact"
            variant="secondary"
            className="border-white/35 text-white hover:border-white hover:bg-white/10"
          >
            Contact
          </Button>
        </div>
        <p className="mt-10 text-sm text-white/55">
          <Link href="/" className="hover:text-white">
            Agellus Capital
          </Link>
        </p>
      </Container>
    </Section>
  );
}
