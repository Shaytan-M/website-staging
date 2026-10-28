# Cutover runbook (humans execute DNS)

Site: https://www.agellus.com  
Rebuild: `agelluscapital/website` — Production branch `main`, integration `staging`.

## Env (Vercel Production)

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL` (default `info@agellus.com`)
- `CONTACT_FROM_EMAIL` (verified Resend domain)
- `TURNSTILE_SECRET_KEY`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `NEXT_PUBLIC_GA_ENABLED=true`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`

Preview: keep GA disabled. Store values in Dashlane “Website Operations”.

## Sequence

1. Merge `staging` → `main` only after pre-launch checklist in `gb-webadmin/playbooks/pre-launch.md`.
2. Confirm Production URL `*.vercel.app` is healthy.
3. Lower TTL on apex A and www to 300 for ≥24 hours.
4. Attach `agellus.com` and `www.agellus.com` in Vercel.
5. At GoDaddy change **only** those two records. Do not touch MX, SPF, DKIM, DMARC, autodiscover.
6. Confirm TLS. Send and receive email immediately.
7. Test 20 URLs from `redirect-map.csv` plus contact form, tearsheet, cookie banner.
8. Submit `https://www.agellus.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
9. Restore TTL after 48 stable hours.
10. Keep Ovis until soak is complete. Do not cancel hosting in the same window as DNS.

## Rollback

Vercel Instant Rollback, then `git revert` on `main` so git matches production.
