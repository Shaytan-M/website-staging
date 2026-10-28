export type PortfolioCompany = {
  slug: string;
  name: string;
  logo: string;
  investmentDate: string;
  headquarters: string;
  website: string;
  description: string[];
};

export const portfolio: PortfolioCompany[] = [
  {
    slug: "bluejack",
    name: "Bluejack Fire & Life Safety",
    logo: "/portfolio/bluejack.png",
    investmentDate: "December 2024",
    headquarters: "Houston, TX",
    website: "https://bluejackfire.com/",
    description: [
      "Bluejack is a national provider of fire and life safety services. The company’s offerings include inspection, testing, maintenance, repair, consulting engineering, and installation of alarm, sprinkler, extinguisher, and suppression systems.",
      "Bluejack is actively pursuing add-on acquisition opportunities.",
    ],
  },
  {
    slug: "compassmsp",
    name: "CompassMSP",
    logo: "/portfolio/compass.webp",
    investmentDate: "September 2024",
    headquarters: "Hartford, CT",
    website: "https://compassmsp.com",
    description: [
      "Compass is a managed IT services provider to small and mid-sized businesses across the US. The company’s offerings include managed IT services, cloud and software hosting, cybersecurity, and IT consulting.",
      "Compass is actively pursuing add-on acquisition opportunities.",
    ],
  },
  {
    slug: "highgrove",
    name: "HighGrove Partners",
    logo: "/portfolio/highgrove.jpg",
    investmentDate: "November 2025",
    headquarters: "Atlanta, GA",
    website: "https://www.highgrove.net/",
    description: [
      "HighGrove Partners is a provider of commercial landscape services. The company offering is focused on commercial lawncare maintenance and enhancement services.",
      "HighGrove is actively pursuing add-on acquisition opportunities across the Southeastern United States.",
    ],
  },
  {
    slug: "titan",
    name: "Titan Restoration",
    logo: "/portfolio/titan.png",
    investmentDate: "March 2026",
    headquarters: "Phoenix, AZ",
    website: "https://titan911.com/",
    description: [
      "Titan Restoration is a provider of commercial mitigation and restoration services. The company provides water, fire, and storm damage restoration, mold remediation, biohazard cleanup, asbestos abatement, and reconstruction services.",
      "Titan is actively pursuing add-on acquisitions across the Southwest and Mountain West US.",
    ],
  },
];
