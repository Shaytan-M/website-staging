# DNS records (export)

Export the live GoDaddy zone here before any cutover. Do not invent records.

Last export: _not yet captured — Technical Lead to paste zone file._

Protected (do not change at cutover):

- MX
- SPF (`TXT` beginning `v=spf1`)
- DKIM (`.*._domainkey`)
- `_dmarc`
- `autodiscover`

Expected after cutover (values from Vercel Domains UI):

- Apex `A` → Vercel
- `www` `CNAME` or `A` → Vercel
