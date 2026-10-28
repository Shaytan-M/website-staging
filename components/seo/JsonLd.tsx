import { site } from "@/content/site";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}${site.logoPng}`,
    image: `${site.url}${site.logoPng}`,
    description: site.description,
    telephone: site.phone.direct,
    email: "info@agellus.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7701 Forsyth Boulevard, Suite 350",
      addressLocality: "Clayton",
      addressRegion: "MO",
      postalCode: "63105",
      addressCountry: "US",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
