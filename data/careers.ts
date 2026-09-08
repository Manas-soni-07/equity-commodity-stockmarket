export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  status: "Open Position" | "Coming Soon";
  experienceRequired: string;
  shortDescription: string;
  responsibilities: string[];
  qualifications: string[];
}

export const CAREER_POSITIONS: CareerPosition[] = [
  {
    id: "research-analyst",
    title: "Research Analyst — Equity & Indices",
    department: "Capital Markets Research",
    location: "India [Office / Hybrid Placeholder]",
    type: "Full-Time",
    status: "Open Position",
    experienceRequired: "1–3 Years in Equity Research / Financial Analysis",
    shortDescription:
      "Responsible for tracking Indian listed companies, conducting quarterly earnings reviews, and compiling structured research notes for our client briefs.",
    responsibilities: [
      "Analyze financial statements, balance sheets, and cash flow trends of NSE/BSE companies.",
      "Monitor sector trends, quarterly results, and conference call transcripts.",
      "Synthesize complex market data into simple, readable research briefs for retail and institutional readers.",
      "Assist senior analysts in drafting daily pre-market and post-market research notes.",
    ],
    qualifications: [
      "Degree in Finance, Economics, Commerce, MBA (Finance), or CFA/NISM certifications.",
      "Sound understanding of financial metrics (P/E, P/B, RoCE, RoE, EV/EBITDA).",
      "Excellent written and verbal communication in simple, clear English.",
      "Familiarity with financial databases and market charting tools.",
    ],
  },
  {
    id: "market-research-intern",
    title: "Market Research Intern",
    department: "Research Desk",
    location: "India [Remote / Hybrid Placeholder]",
    type: "Internship (3–6 Months)",
    status: "Open Position",
    experienceRequired: "Freshers / College Students in Final Year",
    shortDescription:
      "A hands-on learning opportunity for passionate market learners eager to understand real-world Indian equities, indices, and commodity dynamics.",
    responsibilities: [
      "Collect and verify daily data on Nifty 50, Bank Nifty, and MCX commodities.",
      "Track corporate announcements, board meetings, and dividend declarations.",
      "Support content drafting for educational blog posts and market tutorials.",
      "Learn structured technical charting and fundamental ratio analysis.",
    ],
    qualifications: [
      "Enthusiasm for Indian stock and commodity markets.",
      "Basic grasp of financial accounting and stock market terms.",
      "Attention to detail and proficiency in spreadsheet tools (Excel/Google Sheets).",
      "Willingness to learn and communicate ideas clearly.",
    ],
  },
  {
    id: "business-development-executive",
    title: "Business Development Executive",
    department: "Client Relations & Growth",
    location: "India [Office / Remote Placeholder]",
    type: "Full-Time",
    status: "Coming Soon",
    experienceRequired: "1–2 Years in Client Onboarding / Customer Success",
    shortDescription:
      "Drive transparent client engagements, explain our research plans to interested subscribers, and ensure top-tier onboarding satisfaction.",
    responsibilities: [
      "Connect with prospective clients who have inquired about research services.",
      "Explain the non-advisory, research-focused nature of our deliverables transparently.",
      "Gather customer feedback to help improve report formats and service offerings.",
      "Maintain professional communication via email and telephonic touchpoints.",
    ],
    qualifications: [
      "Demonstrated experience in client servicing or customer relations.",
      "Strong interpersonal skills with honest, high-integrity communication.",
      "Basic familiarity with Indian capital market concepts.",
    ],
  },
  {
    id: "digital-marketing-executive",
    title: "Digital Marketing Executive",
    department: "Digital Outreach",
    location: "India [Remote Placeholder]",
    type: "Full-Time",
    status: "Coming Soon",
    experienceRequired: "1–3 Years in Content Marketing & SEO",
    shortDescription:
      "Manage our educational outreach, social media presence, and organic search optimization to bring clean financial literacy to a wider audience.",
    responsibilities: [
      "Manage educational content distribution across LinkedIn, X, and YouTube.",
      "Optimize website blog articles for search engine visibility and accessibility.",
      "Design clean, professional visual snippets of daily research summaries.",
      "Ensure all marketing strictly adheres to financial compliance and non-guarantee ethics.",
    ],
    qualifications: [
      "Experience with SEO, content marketing, and professional social media management.",
      "Ability to write clean, grammatical English for financial audiences.",
      "Familiarity with Canva, design tools, and web analytics.",
    ],
  },
];
