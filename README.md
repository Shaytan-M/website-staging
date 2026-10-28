# Agellus Capital Website

Modern rebuild of [agellus.com](https://www.agellus.com) — Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Develop

Use Node.js 24.x locally and in Vercel/CI.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY` — Resend API key for contact form email
- `CONTACT_TO_EMAIL` — inbox for form submissions
- `CONTACT_FROM_EMAIL` — verified sender in Resend
- `TURNSTILE_SECRET_KEY` / `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — Cloudflare Turnstile (required in Production)
- `NEXT_PUBLIC_GA_ENABLED` — set `true` only on deployments that should send GA data (usually Production only)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — GA4 measurement ID (e.g. `G-XXXXXXXX`)

Without Resend vars, submissions are accepted and logged server-side (useful for local preview). GA loads only when enabled, a valid Measurement ID is set, **and** the visitor accepts cookies.

## Analytics & SEO

- **Vercel Analytics + Speed Insights** load on every visit (cookieless). Enable both in the Vercel project dashboard under Analytics / Speed Insights.
- **Google Analytics 4** is consent-gated and App Router page-view aware. Staging/preview stays off unless `NEXT_PUBLIC_GA_ENABLED=true`.
- Conversion events (when consent is accepted): `contact_form_submit`, `tearsheet_download`, `portfolio_outbound_click`.
- Technical SEO includes sitemap (`/sitemap.xml`), robots (search + AI crawlers), canonicals, Open Graph / Twitter cards, Organization / WebSite / Person / FAQ JSON-LD, and `llms.txt`.
- Legal HTML drafts at `/privacy`, `/terms`, `/cookies` (PDFs remain official until counsel approves). Sitewide investment disclaimer in the footer.

### After go-live

1. In Vercel **Production**: set `NEXT_PUBLIC_GA_ENABLED=true` and `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...`.
2. Leave Preview/staging GA disabled (or use a separate test Measurement ID if you need to validate).
3. Enable Web Analytics and Speed Insights on the Vercel project.
4. In GA4 Admin → Data Streams → Enhanced measurement, turn off browser-history pageviews (we send App Router pageviews manually).
5. In GA4 mark `contact_form_submit` and `tearsheet_download` as key events.
6. In [Google Search Console](https://search.google.com/search-console), verify `https://www.agellus.com` and submit `https://www.agellus.com/sitemap.xml`.
7. Confirm Accept loads `googletagmanager.com/gtag/js` and Decline does not.

## Content

Edit typed modules under `content/`:

- `site.ts` — nav, address, stats, legal links
- `team.ts` — team roster and bios
- `portfolio.ts` — current investments
- `news.ts` — news / press / podcasts
- `criteria.ts` — investment criteria and about copy

Brand assets live in `public/i`, `public/v`, `public/portfolio`, `public/biopics`, and `public/pdf`.

## Deploy (Vercel)

Connect the GitHub repo in Vercel (or `npx vercel`). Attach Preview to the `staging` branch and Production to `main`. Point DNS when ready.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
