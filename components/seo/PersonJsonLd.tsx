import type { TeamMember } from "@/content/team";
import { site } from "@/content/site";

export function PersonJsonLd({ member }: { member: TeamMember }) {
  const profileUrl = `${site.url}/team/${member.slug}`;
  const data = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: profileUrl,
  mainEntity: {
    "@type": "Person",
    "@id": `${profileUrl}#person`,
    name: member.name,
    jobTitle: member.title,
    image: `${site.url}${member.image}`,
    url: profileUrl,
    worksFor: {
      "@id": `${site.url}/#organization`,
    },
  },
};

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
