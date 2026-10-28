"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import type { NewsItem } from "@/content/news";

const PAGE_SIZE = 8;

export function NewsList({ items }: { items: NewsItem[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = items.slice(0, visible);
  const hasMore = visible < items.length;

  return (
    <div>
      <ul className="divide-y divide-line border-t border-line">
        {shown.map((item) => (
          <li key={`${item.href}-${item.date}`}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 py-6 transition-colors hover:bg-soft/70 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:px-2"
            >
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo">
                  {item.type}
                </p>
                <h2 className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-indigo md:text-xl">
                  {item.title}
                  <span className="sr-only"> (opens in a new window)</span>
                </h2>
              </div>
              <time
                className="shrink-0 text-sm text-muted"
                dateTime={item.dateTime}
              >
                {item.date}
              </time>
            </a>
          </li>
        ))}
      </ul>

      {hasMore ? (
        <div className="mt-8">
          <Button
            type="button"
            variant="secondary"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
          >
            Load more
          </Button>
        </div>
      ) : null}
    </div>
  );
}
