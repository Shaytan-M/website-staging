import type { TeamMember } from "@/content/team";
import { site } from "@/content/site";

export function PersonJsonLd({ member }: { member: TeamMember }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.title,
    image: `${site.url}${member.image}`,
    url: `${site.url}/team/${member.slug}`,
    worksFor: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
