# Editing Agellus website content

Content is TypeScript, not a CMS. Changes go through a pull request and a Vercel preview.

## Files

| Update | File |
|---|---|
| Nav, phones, stats, legal URLs | `content/site.ts` |
| Team bios | `content/team.ts` + `public/biopics/` |
| Portfolio | `content/portfolio.ts` + `public/portfolio/` |
| News links | `content/news.ts` (`date` display text + ISO `dateTime`) |
| About / investment criteria | `content/criteria.ts` |
| FAQ (also drives schema) | `content/faq.ts` |
| Legal HTML drafts | `content/legal.ts` |
| Tearsheet / PDFs | `public/pdf/` |

## Steps

1. Branch from `staging` (or `main` after cutover): `content/short-description`
2. Edit the module. Keep existing object shapes.
3. `npm run dev` and check the page.
4. Open a PR. Review the preview URL on desktop and phone.
5. Merge after approval. Production deploys from `main`.

Do not put secrets in content files. Do not invent LinkedIn URLs. News items are outbound links only.
