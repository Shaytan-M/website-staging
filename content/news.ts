export type NewsType = "News" | "Press Release" | "Podcast";

export type NewsItem = {
  title: string;
  type: NewsType;
  date: string;
  dateTime: string;
  href: string;
};

export const news: NewsItem[] = [
  {
    title:
      "Agellus-backed HighGrove is targeting maintenance-focused add-ons in Georgia and surrounding E-verify states",
    type: "News",
    date: "February 06, 2026",
    dateTime: "2026-02-06",
    href: "https://pipeline.thedeal.com/article/0000019c-019e-d653-adbc-33bef8210000/deal-news/private-equity/agellus-builds-southeast-landscaping-platform",
  },
  {
    title:
      "Agellus Capital Completes Acquisition of HighGrove Partners to Create a Market-leading Commercial Landscaping Platform in the Southeastern United States",
    type: "Press Release",
    date: "November 20, 2025",
    dateTime: "2025-11-20",
    href: "https://www.businesswire.com/news/home/20251120018648/en/Agellus-Capital-Completes-Acquisition-of-HighGrove-Partners-to-Create-a-Market-leading-Commercial-Landscaping-Platform-in-the-Southeastern-United-States",
  },
  {
    title:
      "CompassMSP Acquires Simplegrid Technology, Inc., Expanding High-Touch IT and Cybersecurity for Regulated Industries",
    type: "Press Release",
    date: "September 22, 2025",
    dateTime: "2025-09-22",
    href: "https://cmps.pro/41V8K0g",
  },
  {
    title:
      "Agellus Capital Completes Investment in Orcus Fire & Risk as an Addition to its National Fire and Life Safety Acquisition Platform",
    type: "News",
    date: "March 26, 2025",
    dateTime: "2025-03-26",
    href: "https://www.businesswire.com/news/home/20250326898478/en/Agellus-Capital-Completes-Investment-in-Orcus-Fire-Risk-as-an-Addition-to-its-National-Fire-and-Life-Safety-Acquisition-Platform",
  },
  {
    title:
      "Agellus’ Jeff Aiello on fire safety platform: ‘We saw an opportunity to start small in a large, fragmented market’",
    type: "News",
    date: "March 19, 2025",
    dateTime: "2025-03-19",
    href: "https://www.pehub.com/agellus-jeff-aiello-on-fire-safety-platform-we-saw-an-opportunity-to-start-small-in-a-large-fragmented-market/",
  },
  {
    title: "Agellus Capital Combines FirePro Tech LLC, Chase Fire, and AAA Fire Protection Services",
    type: "Press Release",
    date: "February 26, 2025",
    dateTime: "2025-02-26",
    href: "https://www.businesswire.com/news/home/54215273/en",
  },
  {
    title: "WSJ: Agellus Capital Makes Fire Protection Play With Bluejack",
    type: "News",
    date: "February 20, 2025",
    dateTime: "2025-02-20",
    href: "https://www.wsj.com/articles/agellus-capital-makes-fire-protection-play-with-bluejack-9873f834",
  },
  {
    title: "Agellus Capital Unites CompassMSP and BlackPoint IT Services",
    type: "Press Release",
    date: "February 12, 2025",
    dateTime: "2025-02-12",
    href: "https://www.businesswire.com/news/home/20250212717179/en/Agellus-Capital-Unites-CompassMSP-and-BlackPoint-IT-Services-to-Create-a-Scaled-Market-Leading-IT-and-Cybersecurity-Managed-Services-Platform",
  },
  {
    title: "The Private Equity Playbook: Sourcing & Strategy with Justin Smith",
    type: "Podcast",
    date: "February 11, 2025",
    dateTime: "2025-02-11",
    href: "https://www.youtube.com/watch?v=gY93QH1PyA8",
  },
  {
    title: "Jeff Aiello - Agellus Capital",
    type: "Podcast",
    date: "January 30, 2025",
    dateTime: "2025-01-30",
    href: "https://podcasts.apple.com/us/podcast/jeff-aiello-agellus-capital/id1359329939?i=1000687186161",
  },
  {
    title: "Agellus Capital Closes Debut Fund at $400 Million",
    type: "News",
    date: "January 24, 2025",
    dateTime: "2025-01-24",
    href: "https://www.wsj.com/articles/agellus-capital-closes-debut-fund-at-400-million-83db5f99",
  },
  {
    title: "ROTR #8 | Justin Smith - Agellus Capital",
    type: "Podcast",
    date: "November 12, 2024",
    dateTime: "2024-11-12",
    href: "https://www.youtube.com/watch?v=tjDCVRhc8Tc",
  },
  {
    title: "SourceTalks featuring Justin Smith",
    type: "Podcast",
    date: "October 30, 2024",
    dateTime: "2024-10-30",
    href: "https://suttonplacestrategies.com/source-talks-ep-54",
  },
  {
    title: "Agellus Capital Completes Investment in BlackPoint IT Services",
    type: "Press Release",
    date: "September 17, 2024",
    dateTime: "2024-09-17",
    href: "https://www.businesswire.com/news/home/20240917511246/en/Agellus-Capital-Completes-Investment-in-BlackPoint-IT-Services",
  },
  {
    title: "How a chance meeting led Jeff Aiello into a career in private equity",
    type: "News",
    date: "August 01, 2024",
    dateTime: "2024-08-01",
    href: "https://www.pehub.com/how-a-chance-meeting-led-jeff-aiello-into-a-career-in-private-equity/",
  },
  {
    title: "Longtime friends open Clayton private equity firm, raise $400M",
    type: "News",
    date: "July 31, 2024",
    dateTime: "2024-07-31",
    href: "https://www.bizjournals.com/stlouis/inno/stories/profiles/2024/07/31/agellus-capital-clayton-private-equity-firm-opens.html",
  },
  {
    title: "WSJ: Agellus Capital Closes Debut Fund at $400 Million",
    type: "News",
    date: "July 24, 2024",
    dateTime: "2024-07-24",
    href: "https://webreprints.djreprints.com/2513194.html",
  },
  {
    title: "Agellus Capital Closes Inaugural Fund at $400 Million",
    type: "Press Release",
    date: "July 24, 2024",
    dateTime: "2024-07-24",
    href: "https://www.businesswire.com/news/home/20240724984700/en/Agellus-Capital-Closes-Inaugural-Fund-at-400-Million",
  },
];
