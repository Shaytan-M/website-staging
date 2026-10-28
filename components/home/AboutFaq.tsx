import { aboutFaqs } from "@/content/faq";

export function AboutFaq() {
  return (
    <div className="mt-16 border-t border-line pt-12">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
        Frequently asked questions
      </h2>
      <dl className="mt-8 space-y-8">
        {aboutFaqs.map((item) => (
          <div key={item.question}>
            <dt className="font-display text-lg font-semibold text-ink">
              {item.question}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted md:text-base">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
