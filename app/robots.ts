import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  const sitemap = `${site.url}/sitemap.xml`;
  const allowAll = {
    userAgent: "*",
    allow: "/",
  } as const;

  const aiAgents = [
    "GPTBot",
    "OAI-SearchBot",
    "ClaudeBot",
    "PerplexityBot",
    "Google-Extended",
    "Applebot-Extended",
  ];

  return {
    rules: [
      allowAll,
      ...aiAgents.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap,
  };
}
