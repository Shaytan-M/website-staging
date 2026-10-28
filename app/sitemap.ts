import type { MetadataRoute } from "next";
import { team } from "@/content/team";
import { news } from "@/content/news";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const staticRoutes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/team", changeFrequency: "monthly", priority: 0.8 },
    { path: "/investment-criteria", changeFrequency: "monthly", priority: 0.9 },
    { path: "/portfolio", changeFrequency: "weekly", priority: 0.9 },
    { path: "/news", changeFrequency: "weekly", priority: 0.7 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
    { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route.path}`,
      ...(route.path === "/news" && news[0]
        ? { lastModified: new Date(news[0].dateTime) }
        : {}),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...team.map((m) => ({
      url: `${base}/team/${m.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
