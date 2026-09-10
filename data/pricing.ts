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
    pricePlaceholder: "₹4500",
    billingPeriod: "/ Month ",
    shortDescription:
      " Clear and simple market research for better  Company and sector insights to understand market opportunities. Nifty,    Bank Nifty and index market updates.  Understand market risks and opportunities with objective research..",
    features: [
      " 1–3 High-Probability Trading Levels Daily",
      " Clear Entry, Target & Stop-Loss Levels",
      "Complete Guidance & Dedicated Support",
      " All Levels Delivered Instantly on WhatsApp",
      " Risk Management & Trade Execution Assistance",
    ],
    notIncluded: [
  
    ],
    ctaText: "Get Started",
    ctaLink: "/contact?plan=basic",
  },
  {
    id: "professional",
    name: "Professional Research",
    popular: true,
    badge: "Most Popular",
    pricePlaceholder: "Profit-2,30,000. Charge-82,500. Demat Capital requried- 50,000.",
    billingPeriod: "",
    shortDescription:
      "Research designed to help you understand the market with clarity and confidence.Our Professional Research service provides detailed analysis across Equity and Commodity Markets, covering important market trends, technical factors, fundamentals and key risks. Our research focuses on Stocks, Nifty, Bank Nifty and major Commodities such as Gold, Silver and Crude Oil. Each research report is prepared after studying relevant market data, price trends, company fundamentals and other important market factors. Our structured and timely research helps you understand what is happening in the market, what factors are driving it, and what key risks should be considered before making your own trading or investment decision.",
    features: [
      "Daily intraday recommendation’s frequency is limited to 1-2",
      "Timely Follow Ups of all the trade signals",
      "All Important Market related News & Information",
      "Concise information of Domestic & World Market",
      "  Weekly Nifty Overview",
      "Calls are provided through SMS",
      " Swift real time customer support",
      "Trades can be Intraday or overnight basis market conditions",
    ],
    notIncluded: [],
    ctaText: "Get Started",
    ctaLink: "/contact?plan=professional",
  },
  {
    id: "professional",
    name: "Professional Research",
    popular: true,
    badge: "Most Popular",
    pricePlaceholder: "Profit-6,50,000. Charge-2,18,000. Demat Capital requried- 80,000.",
    billingPeriod: "",
    shortDescription:
      "Research designed to help you understand the market with clarity and confidence.Our Professional Research service provides detailed analysis across Equity and Commodity Markets, covering important market trends, technical factors, fundamentals and key risks. Our research focuses on Stocks, Nifty, Bank Nifty and major Commodities such as Gold, Silver and Crude Oil. Each research report is prepared after studying relevant market data, price trends, company fundamentals and other important market factors. Our structured and timely research helps you understand what is happening in the market, what factors are driving it, and what key risks should be considered before making your own trading or investment decision.",
    features: [
      "Daily intraday recommendation’s frequency is limited to 1-2",
      "Timely Follow Ups of all the trade signals",
      "All Important Market related News & Information",
      "Concise information of Domestic & World Market",
      "  Weekly Nifty Overview",
      "Calls are provided through SMS",
      " Swift real time customer support",
      "Trades can be Intraday or overnight basis market conditions",
    ],
    notIncluded: [],
    ctaText: "Get Started",
    ctaLink: "/contact?plan=professional",
  },
  {
    id: "professional",
    name: "Professional Research",
    popular: true,
    badge: "Most Popular",
    pricePlaceholder: "Profit-10,00,000. Charge-3,31,000. Demat Capital requried- 1,00,000.",
    billingPeriod: "",
    shortDescription:
      "Research designed to help you understand the market with clarity and confidence.Our Professional Research service provides detailed analysis across Equity and Commodity Markets, covering important market trends, technical factors, fundamentals and key risks. Our research focuses on Stocks, Nifty, Bank Nifty and major Commodities such as Gold, Silver and Crude Oil. Each research report is prepared after studying relevant market data, price trends, company fundamentals and other important market factors. Our structured and timely research helps you understand what is happening in the market, what factors are driving it, and what key risks should be considered before making your own trading or investment decision.",
    features: [
      "Daily intraday recommendation’s frequency is limited to 1-2",
      "Timely Follow Ups of all the trade signals",
      "All Important Market related News & Information",
      "Concise information of Domestic & World Market",
      "  Weekly Nifty Overview",
      "Calls are provided through SMS",
      " Swift real time customer support",
      "Trades can be Intraday or overnight basis market conditions",
    ],
    notIncluded: [],
    ctaText: "Get Started",
    ctaLink: "/contact?plan=professional",
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
    question:
      "Can I request custom research for a specific sector or commodity?",
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
