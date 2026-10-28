import Image from "next/image";
import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  as: Tag = "section",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
}) {
  return (
    <Tag id={id} className={cn("py-16 md:py-24", className)}>
      {children}
    </Tag>
  );
}

export function PageHero({
  title,
  eyebrow,
  image,
  children,
}: {
  title: string;
  eyebrow?: string;
  image: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate min-h-[42vh] overflow-hidden bg-indigo-deep text-white md:min-h-[48vh]">
      <Image
        src={image}
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-deep/90 via-indigo-deep/70 to-indigo-deep/35" />
      <Container className="relative flex min-h-[42vh] flex-col justify-end pb-12 pt-28 md:min-h-[48vh] md:pb-16">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-steel">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {children ? (
          <div className="mt-5 max-w-2xl text-base text-white/85 md:text-lg">
            {children}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
