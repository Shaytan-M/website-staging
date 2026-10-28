import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { InvestmentDisclaimer } from "@/components/site/InvestmentDisclaimer";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-indigo-deep text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link href="/" aria-label="Agellus Capital home">
            <Image
              src="/i/logo-wh.svg"
              alt="Agellus Capital"
              width={180}
              height={48}
              className="h-9 w-auto"
            />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {site.description}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {site.address.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
              <li>
                <a href={`tel:${site.phone.direct.replace(/\./g, "")}`} className="hover:text-white">
                  {site.phone.direct}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] space-y-4 px-5 py-5 sm:px-8">
          <InvestmentDisclaimer />
          <div className="flex flex-col gap-3 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright ©{year} Agellus Capital. All rights reserved.</p>
            <p className="flex flex-wrap gap-x-3 gap-y-1">
              <Link href={site.legal.privacy} className="hover:text-white">
                Privacy Policy
              </Link>
              <span aria-hidden>|</span>
              <Link href={site.legal.terms} className="hover:text-white">
                Terms of Use
              </Link>
              <span aria-hidden>|</span>
              <Link href={site.legal.cookies} className="hover:text-white">
                Cookie Notice
              </Link>
              <span aria-hidden>|</span>
              <Link href="/privacy#do-not-sell" className="hover:text-white">
                Do not sell or share
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
