export const site = {
  name: "Agellus Capital",
  tagline: "Essential services. Transformational growth.",
  description:
    "Agellus Capital partners with management teams of essential, non-discretionary services businesses across the United States and Canada.",
  url: "https://www.agellus.com",
  address: {
    lines: ["Agellus Capital, LLC", "7701 Forsyth Boulevard, Suite 350", "Clayton, MO 63105"],
  },
  phone: {
    direct: "314.408.5600",
    tollFree: "877.840.8560",
  },
  tearsheet: "/pdf/tearsheet.pdf",
  legal: {
    privacy: "/privacy",
    terms: "/terms",
    cookies: "/cookies",
  },
  logoPng: "/i/Agellus-metaimage.png",
  nav: [
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/investment-criteria", label: "Investment Criteria" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/news", label: "News & Insights" },
    { href: "/contact", label: "Contact" },
  ],
  stats: [
    { value: "200+", label: "Career deals closed by senior team" },
    { value: "$400M", label: "Fund I" },
    { value: "38+", label: "Years combined PE investment history" },
  ],
} as const;
