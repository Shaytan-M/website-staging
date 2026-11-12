"use client";

import Link from "next/link";

const href = "/privacy#do-not-sell";

export function DoNotSellLink() {
  return (
    <Link
      href={href}
      className="hover:text-white"
      onNavigate={(event) => {
        const { pathname, search, hash } = window.location;
        if (`${pathname}${search}${hash}` !== href) return;

        const section = document.getElementById("do-not-sell");
        if (!section) return;

        event.preventDefault();
        section.scrollIntoView({ block: "start" });
      }}
    >
      Do not sell or share
    </Link>
  );
}