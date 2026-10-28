export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  image: string;
  linkedIn?: string;
  bio: string[];
};

export const team: TeamMember[] = [
  {
    slug: "jeff-aiello",
    name: "Jeff Aiello",
    title: "Managing Partner",
    image: "/biopics/54015-sozVOU.jpg",
    bio: [
      "Jeff co-founded Agellus Capital in 2024 after spending 13 years in the private equity industry. Prior to Agellus, Jeff was a Managing Director at Thompson Street Capital Partners. Prior to Thompson Street, Jeff was a Senior Associate at Audax Private Equity. Prior to Audax, Jeff served as a Captain in the U.S. Air Force.",
      "Jeff holds a BS in Aeronautical Engineering from the U.S. Air Force Academy, an MS in Mechanical Engineering from the University of Dayton, and an MBA from Wharton. He lives in St. Louis with his wife, son, and daughter.",
    ],
  },
  {
    slug: "joe-amadio",
    name: "Joe Amadio",
    title: "Partner & Chief Operating Officer",
    image: "/biopics/73538-Ia4opz.jpg",
    bio: [
      "Joe brings over 20 years of experience to Agellus, where he leads the firm’s operations to support portfolio companies in building scalable, high-performing organizations. He works across strategy, execution, and integration—helping management teams accelerate growth while maintaining focus and discipline.",
      "Before joining Agellus, Joe was a Managing Director at Thompson Street Capital Partners, a St. Louis–based private equity firm investing in founder-led middle-market businesses across healthcare, technology, and business services. Over six years at TSCP, he partnered closely with leadership teams to execute organic and acquisition-driven growth strategies.",
      "Joe began his career at PwC, where he spent more than a decade advising public and private companies on complex financial reporting, transactions, and operational improvements. He holds a B.S.B.A. in Finance and Accounting from Marquette University. Joe currently lives in St. Louis with his wife and three daughters.",
    ],
  },
  {
    slug: "tim-dubis",
    name: "Tim Dubis",
    title: "Vice President",
    image: "/biopics/73543-Ctz4A8.jpg",
    bio: [
      "Tim is a Vice President on the investment team at Agellus Capital. He focuses on sourcing, investment decisions, transaction execution, portfolio management, and value creation with Agellus portfolio companies. Most recently, Tim was Chief of Staff at PestCo, one of the largest residential and commercial pest control providers in the United States. Previously, Tim was a Senior Associate on the investment team at Thompson Street Capital Partners. Prior to that he was an Associate on the investment team at Aterian Investment Partners. Tim began his career in Chicago, working at Lincoln International as an Investment Banking Analyst in its Industrials Group and at KPMG as an Associate in its Deal Advisory practice.",
      "Tim received an MBA from the Kellogg School of Management and a BSB in finance and accountancy from the Farmer School of Business at Miami University.",
    ],
  },
  {
    slug: "josh-kantor",
    name: "Josh Kantor",
    title: "Principal",
    image: "/biopics/76136-rIQMP2.png",
    bio: [
      "Josh is a Principal on the investment team at Agellus Capital. He focuses on sourcing, investment decisions, transaction execution, portfolio management, and value creation with Agellus portfolio companies. Most recently, Josh was a Vice President at WestView Capital Partners, a middle-market private equity firm. Previously, Josh was an Investment Banking Analyst at J.P. Morgan in its Mid-Cap M&A Group after beginning his career in Atlanta, where he was an Investment Banking Analyst at TM Capital.",
      "Josh received a BBA in finance and real estate from the Goizueta Business School at Emory University.",
    ],
  },
  {
    slug: "becky-lopez",
    name: "Becky Lopez",
    title: "Principal, Finance & Compliance",
    image: "/biopics/73884-iGpP5M.jpg",
    bio: [
      "Becky is a Principal within the Finance and Compliance practice at Agellus Capital. In her role, Becky is responsible for fund reporting, investor relations, and managing the firm’s compliance and finance infrastructure across the Agellus platform. Before joining Agellus, Becky spent over a decade at Thompson Street Capital Partners, a middle-market private equity firm, serving as Senior Director of Finance. Earlier in her career, Becky worked within the Finance Group at Energizer and at PwC in its Audit practice.",
      "Becky received a BS in Accountancy in addition to her Master’s in Accountancy from the Trulaske School of Business at the University of Missouri.",
    ],
  },
  {
    slug: "dominic-lupo",
    name: "Dominic Lupo",
    title: "Associate",
    image: "/biopics/65552-31FPeh.jpg",
    bio: [
      "Dominic joined Agellus from J.P. Morgan, where he worked as an Associate within the Asset and Wealth Management arm of the bank. While at J.P. Morgan, Dominic partnered with institutional and ultra-high net worth clients on their investment and lending needs.",
      "Dominic graduated Magna Cum Laude from the University of Tulsa, where he received a BSBA in Finance, BA in Economics, and a BA in Political Science. Dominic lives in St. Louis, and outside of the office, he enjoys weightlifting, pickleball, and supporting the St. Louis Blues.",
    ],
  },
  {
    slug: "slater-nalen",
    name: "Slater Nalen",
    title: "Associate",
    image: "/biopics/61678-NsUA82.jpg",
    bio: [
      "Slater joined Agellus from MPE Partners, where he worked as an Associate on the investment team. Prior to MPE, Slater worked as an Investment Banking Analyst at Piper Sandler in the Services & Industrials group.",
      "Slater graduated Summa Cum Laude from the University of Richmond, where he received a BS with a major in Mathematical Economics. Slater lives in St. Louis, and outside of the office, he enjoys skiing, golf, and grilling.",
    ],
  },
  {
    slug: "barclay-nihill",
    name: "Barclay Nihill",
    title: "Managing Director, StratOps",
    image: "/biopics/60766.jpg",
    bio: [
      "Barclay brings over 15 years of operational and M&A experience to Agellus, having previously held positions in private equity, investment banking, and financial consulting. Previously, Barclay was a Managing Director at FTI Consulting, where he led consulting engagements for private equity and strategic clients across a variety of sectors. Prior to FTI, Barclay was a Vice President at CommonView Capital, a lower-middle market private equity firm. Earlier in his career, Barclay worked in M&A investment banking in both New York and Mexico City.",
      "He lives in St. Louis with his wife and daughter.",
    ],
  },
  {
    slug: "myles-opdahl",
    name: "Myles Opdahl",
    title: "Senior Associate",
    image: "/biopics/55812-CU73Be.jpg",
    bio: [
      "Myles joined Agellus from Deloitte Corporate Finance, where he worked as an Investment Banking Analyst in the Industrials M&A Group. While at Deloitte Corporate Finance, Myles focused on mergers and acquisitions for privately held companies.",
      "Myles graduated Summa Cum Laude from the University of Missouri, where he received a BSBA with a major in Finance and Banking. Myles lives in St. Louis, and outside of the office, he enjoys running, golf, and following the Kansas City Chiefs.",
    ],
  },
  {
    slug: "jill-pfeffer",
    name: "Jill Pfeffer",
    title: "Office Manager",
    image: "/biopics/65557-RthQV0.png",
    bio: [
      "Jill joins Agellus from Eclipse Capital Management, a commodity trading advisory firm. As an Office Manager at Eclipse Capital, Jill oversaw administrative duties to optimize efficiency and streamline processes for clients and colleagues. Prior to Eclipse Capital, Jill held various administrative management roles at Scottrade Advisors.",
      "She lives in the Greater St. Louis area with her husband, daughter, and two dogs.",
    ],
  },
  {
    slug: "justin-smith",
    name: "Justin Smith",
    title: "Managing Director, Business Development",
    image: "/biopics/54025.jpg",
    bio: [
      "With over 13 years in private equity, Justin has built and scaled business development platforms at multiple investment firms. Before joining Agellus, he was Director of Business Development at Longwater, where he led sourcing and intermediary coverage efforts. Earlier in his career, Justin served as Vice President at Atomic Capital, a Houston-based energy investment fund, after starting his career in EY’s M&A advisory practice.",
      "A native of Texas, Justin holds a BS in Communication Studies from the University of Texas and an MBA in Finance from Southern Methodist University. He lives in St. Louis with his wife and two daughters.",
    ],
  },
  {
    slug: "luke-sutterer",
    name: "Luke Sutterer",
    title: "Vice President",
    image: "/biopics/69455-pOUNAU.jpg",
    bio: [
      "Luke is a Vice President on the investment team at Agellus Capital. He focuses on sourcing, investment decisions, transaction execution, portfolio management, and value creation with Agellus portfolio companies. Previously, Luke was a Senior Associate on the investment team at Thompson Street Capital Partners. Prior to that he worked in investment banking at Lincoln International and has also held roles at Goldman Sachs and Cross Keys Capital.",
      "Luke received an MBA in finance and management from Wharton, where he graduated with honors, and a BSBA in finance from the University of Miami.",
    ],
  },
  {
    slug: "beau-thomas",
    name: "Beau Thomas",
    title: "Managing Partner",
    image: "/biopics/54020.jpg",
    bio: [
      "Beau co-founded Agellus Capital in 2024 after spending nearly 15 years in private equity. Prior to Agellus, Beau was a Managing Director at Audax Private Equity with a focus on business services and logistics investments. He also has served as a Trustee for the Foundation for Student Communication, Inc. (Business Today) since 2020.",
      "Originally from New Orleans, Beau holds an AB from Princeton University and lives in Boston with his wife, three sons, and daughter.",
    ],
  },
];

export function getTeamMember(slug: string) {
  return team.find((m) => m.slug === slug);
}
