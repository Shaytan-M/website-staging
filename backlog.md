# Agellus Website — Launch Backlog

_Last updated: 2026-09-01_

Ranked remaining work for `agelluscapital/website`. Repository-level launch
hardening is pushed to `staging`; CI and Vercel deployment succeeded on
2026-09-01. The deployment-protected preview still needs a signed-in human
visual review before the human-controlled production cutover.

## P0 — Launch blockers requiring Agellus action

1. **Approve the counsel packet**
   - Counsel and the Site Owner must review `/privacy`, `/terms`, `/cookies`,
     the investment disclaimer, and the contact-form disclaimer.
   - HTML remains visibly marked as draft and the existing PDFs remain
     operative until approval.
   - Confirm the `$400M`, `200+`, `38+`, and qualitative performance claims.

2. **Configure and safeguard Production environment variables**
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (confirm `info@agellus.com` is a monitored shared mailbox)
   - `CONTACT_FROM_EMAIL` (verified sender)
   - `TURNSTILE_SECRET_KEY`
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
   - `NEXT_PUBLIC_GA_ENABLED=true`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...`
   - Store the same values in Dashlane; redeploy after changes.

3. **Complete the production release gate**
   - Confirm branch protection and required CI review.
   - Approve the first `staging` → `main` cutover merge.
   - Verify the `main` deployment on its `*.vercel.app` URL.
   - Test real Turnstile verification and Resend delivery to the shared mailbox.
   - Rehearse Vercel rollback and Git revert.

4. **Prepare the domain safely**
   - Export the complete GoDaddy DNS zone into `docs/dns-records.md`.
   - Confirm auto-renew, transfer lock, role-based billing contact, 2FA, and
     at least two authorized credential holders.
   - Inventory every subdomain before enabling HSTS beyond the canonical host.

## P1 — Human-executed cutover

5. Lower only the apex and `www` TTLs to 300 at least 24 hours before cutover.
6. Attach `agellus.com` and `www.agellus.com` in Vercel.
7. At GoDaddy, change only the apex and `www` records supplied by Vercel.
   Do not change MX, SPF, DKIM, DMARC, or autodiscover.
8. Verify TLS, apex → `www`, HTTP → HTTPS, and email send/receive.
9. Test primary routes, all legacy redirects, legal PDFs, contact delivery,
   cookie consent, analytics gating, mobile navigation, and the tearsheet.
10. Restore normal TTLs after 48 stable hours.

## P2 — Immediately after cutover

11. Verify Google Search Console and Bing Webmaster Tools; submit
    `https://www.agellus.com/sitemap.xml`.
12. In GA4, prevent duplicate history pageviews and mark
    `contact_form_submit` and `tearsheet_download` as key events.
13. Configure Better Stack uptime monitoring, Sentry, deployment failure
    notifications, and the `#website-ops` incident path.
14. Review crawl errors and index coverage weekly for four weeks.
15. Keep Ovis active for at least a two-week stable soak.
16. Confirm whether both Vercel projects (`agellus-website` and `website`) are
    intentionally connected to GitHub; retire the duplicate only after the
    canonical project and its environment variables are confirmed.

## P3 — Ovis offboarding

17. Export the full Ovis site, CMS content, original media, PDFs, and analytics.
18. Confirm Ovis has no remaining DNS, email, SSL, forwarding, or mailbox role.
19. Identify marketing materials and LP communications linking to legacy URLs.
20. Serve contractual notice, remove Ovis access, and cancel only after soak.

## P4 — Operating ownership

21. Name a primary and backup for Site Owner, Technical Lead, Release Approver,
    Incident Lead, and Access Administrator.
22. Walk editors through `docs/editing-content.md` and the preview/PR workflow.
23. Run quarterly GitHub, Vercel, registrar, Dashlane, dependency, cost, and
    recovery reviews.
24. Revisit a CMS only if content changes become monthly or editors avoid Git.

## Engineering follow-ups after launch

25. Replace best-effort in-memory contact rate limiting with provider-level
    distributed rate limiting if abuse appears; do not add form persistence.
26. Monitor image optimization and bandwidth usage, especially hero media.
27. Add broader browser smoke automation only if manual release checks become
    unreliable or frequent.
28. Evaluate registrar transfer no earlier than Q1 2027, separately from launch.

## Implemented and verified locally and in CI on `staging`

- Resend contact relay with production fail-closed behavior
- Cloudflare Turnstile, honeypot, bounded validation, and best-effort rate limit
- No PII logging or form database
- Consent-gated GA4 plus Vercel Analytics and Speed Insights
- Security headers, conservative HSTS, apex → `www`, and preview noindex
- Legacy `/bio`, `/article`, legal PDF, and sitemap redirects
- Legal HTML drafts, PDF fallback, investment/form disclaimers
- Organization, WebSite, Person, and FAQ structured data
- `robots.txt`, `sitemap.xml`, `llms.txt`, and canonical metadata
- Branded 404, skip link, mobile-menu keyboard handling, and field errors
- Node 24, CI lint/test/build, PR template, and CODEOWNERS

## Explicitly not automated

- Production secrets
- Counsel approval or investment-claim changes
- First `staging` → `main` cutover merge
- Vercel custom-domain or GoDaddy DNS changes
- Ovis cancellation
