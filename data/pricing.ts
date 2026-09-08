export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  pricePlaceholder: string;
  billingPeriod: string;
  shortDescription: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  ctaLink: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic Research",
    popular: false,
    pricePlaceholder: "₹XXXX",
    billingPeriod: "/ Month ",
    shortDescription: "Essential market insights and weekly overviews for independent learners and retail market followers.",
    features: [
      "Weekly Indian Equity & Market Summary",
      "Key Nifty 50 & Bank Nifty support/resistance levels",
      "Weekly Commodity Market Overview (Gold & Silver)",
      "Important economic calendar & RBI event alerts",
      "Email delivery of weekly research digest",
      "Educational charting primers",
    ],
    notIncluded: [
      "Daily pre-market morning briefings",
      "In-depth quarterly earnings teardowns",
      "Direct custom research inquiries",
    ],
    ctaText: "Get Started",
    ctaLink: "/contact?plan=basic",
  },
  {
    id: "professional",
    name: "Professional Research",
    popular: true,
    badge: "Most Popular",
    pricePlaceholder: "₹XXXX",
    billingPeriod: "/ Month",
    shortDescription: "Comprehensive daily research notes and sector analysis for active traders and dedicated market participants.",
    features: [
      "Daily pre-market note before 9:15 AM IST",
      "Daily post-market wrap-up & sector heatmaps",
      "Detailed Nifty & Bank Nifty Open Interest (OI) analysis",
      "Commodity desk updates (MCX Bullion, Crude, Natural Gas)",
      "Sector rotation analysis & quarterly earnings review",
      "Technical price action levels & multi-timeframe review",
      "Direct priority email support for research queries",
    ],
    notIncluded: ["One-on-one custom institutional mandates"],
    ctaText: "Get Started",
    ctaLink: "/contact?plan=professional",
  },
  {
    id: "custom",
    name: "Custom Research",
    popular: false,
    badge: "Tailored Solutions",
    pricePlaceholder: "₹XXXX",
    billingPeriod: "/ Custom Mandate [Editable]",
    shortDescription: "Bespoke analytical mandates tailored for family offices, business treasuries, and independent advisors.",
    features: [
      "All Professional Research deliverables included",
      "Tailored research reports on specific sectors or commodities",
      "Historical data modeling & peer group comparative analysis",
      "Commodity hedging & price risk exposure assessment",
      "Quarterly direct analyst briefing sessions",
      "Custom format delivery (PDF, spreadsheet models, slides)",
      "Dedicated account coordinator",
    ],
    ctaText: "Talk to Us",
    ctaLink: "/contact?plan=custom",
  },
];

export interface PricingFAQ {
  question: string;
  answer: string;
}

export const PRICING_FAQS: PricingFAQ[] = [
  {
    question: "What is included in the research plans?",
    answer:
      "Depending on the plan selected, our deliverables include weekly or daily market summaries, technical chart studies of major indices (Nifty, Bank Nifty), commodity overviews (Gold, Silver, Energy), sectoral earnings analyses, and educational market insights. All research is provided in clear, accessible formats.",
  },
  {
    question: "Is investment return guaranteed?",
    answer:
      "No. Market returns cannot be guaranteed. Financial markets are subject to inherent market risk, economic cycles, and price volatility. Our research is strictly intended to provide factual information, objective data, and disciplined analysis to help users better understand the market.",
  },
  {
    question: "Can I request custom research for a specific sector or commodity?",
    answer:
      "Yes. Our Custom Research plan is specifically designed for participants needing targeted analyses, such as thematic sector studies, corporate earnings modeling, or commodity price risk tracking. Contact our team to discuss your scope.",
  },
  {
    question: "How can I contact the research team if I have questions?",
    answer:
      "You can reach out anytime via our Contact page, send an email to our desk at contact@equitycommodityresearch.com, or use our direct inquiry form. Subscribers to our Professional and Custom plans receive priority email support for research clarifications.",
  },
  {
    question: "Is this research suitable for beginners in the market?",
    answer:
      "Yes. A core mission of Equity & Commodity Market Research is to simplify financial concepts. We deliberately avoid overly complicated jargon and explain technical and fundamental concepts in simple, transparent English suitable for both beginners and experienced participants.",
  },
  {
    question: "How are research reports delivered?",
    answer:
      "Reports are delivered digitally via email digests, downloadable PDF briefs, and accessible portal summaries formatted for effortless reading on desktop, tablet, or smartphone devices.",
  },
];
