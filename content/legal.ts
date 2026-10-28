export const counselNotice =
  "This page is a website draft pending review by Agellus counsel. Until that review is complete, the PDF linked below is the operative version.";

export const investmentDisclaimer =
  "This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities, or an offer to provide investment advisory or other services. Nothing on this site is investment, legal, or tax advice. Past performance is not indicative of future results. Forward-looking statements are inherently uncertain. Agellus Capital, LLC is based in Clayton, Missouri, and describes activities in the United States and Canada; access to this site does not mean that any product or service is available in any particular jurisdiction.";

export const legalPages = {
  privacy: {
    title: "Privacy Policy",
    pdf: "/pdf/privacy.pdf",
    updated: "August 31, 2026",
    sections: [
      {
        heading: "Who we are",
        body: [
          "Agellus Capital, LLC (“Agellus,” “we,” “us”) operates https://www.agellus.com from 7701 Forsyth Boulevard, Suite 350, Clayton, MO 63105. Contact: info@agellus.com or 314.408.5600.",
        ],
      },
      {
        heading: "Information we collect",
        body: [
          "If you use the contact form, we receive the name, email address, and any company, phone, or message you choose to provide. We relay that message by email to a firm mailbox and do not store form submissions in a website database.",
          "If you accept analytics cookies, Google Analytics 4 may collect device, approximate location, and usage data. Vercel Analytics and Speed Insights collect privacy-oriented performance metrics and are not used to identify you.",
        ],
      },
      {
        heading: "How we use information",
        body: [
          "We use inquiry details only to respond to your message and operate the site. We do not sell personal information. We do not use the contact form to determine accredited-investor status.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "Essential operation of the site does not require optional cookies. Google Analytics loads only after you accept the cookie banner. See the Cookie Notice.",
        ],
      },
      {
        heading: "Retention",
        body: [
          "Website servers do not retain contact-form bodies. Email copies follow the firm’s ordinary mailbox retention. Analytics data follows Google’s and Vercel’s retention settings.",
        ],
      },
      {
        heading: "United States, California, and Canada",
        body: [
          "Depending on your location, you may have rights to request access, correction, or deletion of personal information we hold, or to opt out of “sale” or “sharing” of personal information as those terms are defined under California law. We do not sell personal information for money. GA4, if accepted, may be considered “sharing” for cross-context behavioral advertising in some interpretations. You may decline analytics cookies or email privacy requests to info@agellus.com with the subject “Privacy request.”",
          "Visitors in Canada: we handle personal information in accordance with applicable Canadian privacy law, including PIPEDA where it applies, and comparable provincial rules.",
        ],
      },
      {
        heading: "Do not sell or share",
        body: [
          "To opt out of analytics cookies that may constitute “sharing,” choose Decline on the cookie banner or clear site data and decline again. You may also email info@agellus.com with the subject “Do not sell or share.”",
        ],
      },
      {
        heading: "Children",
        body: [
          "This site is not directed to children under 16. We do not knowingly collect their information.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    pdf: "/pdf/terms.pdf",
    updated: "August 31, 2026",
    sections: [
      {
        heading: "Acceptance",
        body: [
          "By using www.agellus.com you agree to these terms. If you do not agree, do not use the site.",
        ],
      },
      {
        heading: "No offer or advice",
        body: [
          "Content is general information about Agellus Capital. It is not an offer, solicitation, recommendation, or advice. Interests in any fund are offered only pursuant to confidential offering documents and applicable law.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "Site content, trademarks, and logos are owned by Agellus or licensors. You may not copy or redistribute them except as allowed by law or with written permission.",
        ],
      },
      {
        heading: "Third-party links",
        body: [
          "News items and portfolio company websites are third-party properties. Agellus is not responsible for their content or practices.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "The site is provided “as is.” To the fullest extent permitted by law, Agellus disclaims warranties and is not liable for damages arising from use of the site.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "These terms are governed by the laws of the State of Missouri, without regard to conflict-of-law rules, except where mandatory local law applies.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie Notice",
    pdf: "/pdf/cookies.pdf",
    updated: "August 31, 2026",
    sections: [
      {
        heading: "What we use",
        body: [
          "Strictly necessary: we store your cookie preference (accepted or declined) in localStorage so the banner does not reappear on every visit.",
          "Optional analytics: Google Analytics 4 cookies and similar identifiers load only if you click Accept. They help us understand aggregated use of the site.",
          "Vercel Analytics and Speed Insights are cookieless performance metrics from our host and do not require the optional analytics consent described above.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          "Use Accept or Decline on the banner. You can clear site data in your browser to see the banner again. Blocking analytics does not affect essential pages or the contact form.",
        ],
      },
    ],
  },
} as const;
