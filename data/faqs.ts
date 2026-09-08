export interface FAQItem {
  id: string;
  category: "General" | "Services" | "Risk & Compliance" | "Subscriptions";
  question: string;
  answer: string;
}

export const GENERAL_FAQS: FAQItem[] = [
  {
    id: "what-is-company",
    category: "General",
    question: "What does Equity & Commodity Market Research do?",
    answer:
      "Equity & Commodity Market Research is an independent Indian financial research provider. We publish structured, data-driven research reports covering Indian equities (NSE & BSE), benchmark indices (Nifty 50, Bank Nifty), and commodities (Gold, Silver, Crude Oil on MCX). Our focus is on objective market analysis, educational insights, and technical studies.",
  },
  {
    id: "guarantee-returns",
    category: "Risk & Compliance",
    question: "Do you guarantee returns or profits on market recommendations?",
    answer:
      "No. Market returns cannot be guaranteed. We do NOT provide profit promises, guaranteed tips, or portfolio management services. All investments and trades in equities and commodities carry inherent market risks. Our research is strictly designed to help participants understand data, chart structures, and market dynamics to make their own informed decisions.",
  },
  {
    id: "who-is-it-for",
    category: "Services",
    question: "Who can benefit from your research reports?",
    answer:
      "Our research is designed for retail investors, positional market participants, independent traders, finance students, and business owners looking for clean, jargon-free insights into Indian market trends, corporate performance, and commodity price dynamics.",
  },
  {
    id: "technical-vs-fundamental",
    category: "Services",
    question: "Do you cover both fundamental and technical analysis?",
    answer:
      "Yes. We believe both disciplines provide valuable perspectives. Fundamental analysis examines balance sheet strength, corporate earnings, and sector valuations for longer-term understanding, while technical analysis identifies support/resistance zones, price action structures, and risk-reward levels.",
  },
  {
    id: "how-to-contact",
    category: "General",
    question: "How can I contact the research desk?",
    answer:
      "You can submit an inquiry through our Contact page, reach out via our official WhatsApp inquiry button, or email contact@equitycommodityresearch.com. We respond to general inquiries during standard Indian business hours.",
  },
  {
    id: "custom-reports",
    category: "Subscriptions",
    question: "Can I commission a custom research study on a specific company or sector?",
    answer:
      "Yes. Our Custom Research desk accepts bespoke requests for specialized sector overviews, historical data compilations, or commodity hedging reviews. You can submit details via our Contact page or the Custom Research inquiry form.",
  },
];
