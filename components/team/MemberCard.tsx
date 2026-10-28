import Image from "next/image";
import Link from "next/link";
import type { TeamMember } from "@/content/team";

export function MemberCard({ member }: { member: TeamMember }) {
  return (
    <Link
      href={`/team/${member.slug}`}
      className="group block overflow-hidden rounded-sm bg-white transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-soft">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="border-t-2 border-transparent px-1 py-4 transition-colors group-hover:border-indigo">
        <h2 className="font-display text-lg font-semibold text-ink group-hover:text-indigo">
          {member.name}
        </h2>
        <p className="mt-1 text-sm text-muted">{member.title}</p>
      </div>
    </Link>
  );
}
