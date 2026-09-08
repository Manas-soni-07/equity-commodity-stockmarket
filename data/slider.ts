export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  imageUrl: string;
  imageAlt: string;
  tag: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    badge: "Indian Financial Markets",
    title: "Understand the Indian Market",
    subtitle:
      "Research-based insights for better market understanding and disciplined decision making.",
    primaryCtaText: "Explore Our Services",
    primaryCtaLink: "/services",
    secondaryCtaText: "Contact Us",
    secondaryCtaLink: "/contact",
    imageUrl: "/image/mar2.png",
    imageAlt: "Indian Stock Market Charts and Trading Screens",
    tag: "Market Overview",
  },
  {
    id: 2,
    badge: "NSE & BSE Equities",
    title: "Equity Market Research",
    subtitle:
      "Track important market trends, high-performing sectors and fundamental stock movements.",
    primaryCtaText: "Explore Research",
    primaryCtaLink: "/services",
    secondaryCtaText: "View Pricing",
    secondaryCtaLink: "/pricing",
    imageUrl: "/image/mar3.png",
    imageAlt: "Stock Market Candlestick Chart Analysis",
    tag: "Equities",
  },
  {
    id: 3,
    badge: "Benchmark Indices",
    title: "Index Research",
    subtitle:
      "Understand Nifty 50, Bank Nifty, FinNifty and other key benchmark indices with clarity.",
    primaryCtaText: "Index Insights",
    primaryCtaLink: "/services",
    secondaryCtaText: "Contact Us",
    secondaryCtaLink: "/contact",
    imageUrl: "/image/mar1.png",
    imageAlt: "Nifty and Index Data Visualization",
    tag: "Indices",
  },
  {
    id: 4,
    badge: "MCX & Global Commodities",
    title: "Commodity Market Research",
    subtitle:
      "Stay updated with Gold, Silver, Crude Oil and key industrial commodity price dynamics.",
    primaryCtaText: "Commodity Insights",
    primaryCtaLink: "/services",
    secondaryCtaText: "Explore Services",
    secondaryCtaLink: "/services",
    imageUrl: "/image/mar5.png",
    imageAlt: "Gold bullion and precious commodity markets",
    tag: "Commodities",
  },
  {
    id: 5,
    badge: "Price Action & Levels",
    title: "Technical Analysis",
    subtitle:
      "Understand important support, resistance, chart patterns and critical pivot market levels.",
    primaryCtaText: "Technical Research",
    primaryCtaLink: "/services",
    secondaryCtaText: "Read Blog",
    secondaryCtaLink: "/blog",
    imageUrl: "/image/mar4.png",
    imageAlt: "Technical Analysis with multi-timeframe charts",
    tag: "Technical Analysis",
  },
  {
    id: 6,
    badge: "Daily & Weekly Summaries",
    title: "Market Updates",
    subtitle:
      "Get simple updates on important market movements, policy developments, and global cues.",
    primaryCtaText: "Market Updates",
    primaryCtaLink: "/blog",
    secondaryCtaText: "Contact Team",
    secondaryCtaLink: "/contact",
    imageUrl: "/image/mar7.png",
    imageAlt: "Modern Indian Financial District skyline",
    tag: "Market Briefs",
  },
  {
    id: 7,
    badge: "Clarity Over Jargon",
    title: "Research You Can Understand",
    subtitle:
      "Clear information and logical frameworks without unnecessary Wall Street complexity.",
    primaryCtaText: "About Our Approach",
    primaryCtaLink: "/about",
    secondaryCtaText: "Our Services",
    secondaryCtaLink: "/services",
    imageUrl: "/image/mar6.png",
    imageAlt: "Financial market research analysts collaborating",
    tag: "Simplicity",
  },
  {
    id: 8,
    badge: "Disciplined Strategy",
    title: "Make Informed Decisions",
    subtitle:
      "Use objective research and balanced risk perspective to evaluate opportunities in Indian markets.",
    primaryCtaText: "View Plans",
    primaryCtaLink: "/pricing",
    secondaryCtaText: "Contact Us",
    secondaryCtaLink: "/contact",
    imageUrl: "/image/mar9.png",
    imageAlt: "Indian rupee finance and financial planning",
    tag: "Informed Decision",
  },
  {
    id: 9,
    badge: "Continuous Knowledge",
    title: "Stay Ahead With Better Research",
    subtitle:
      "Stay thoroughly informed about the dynamic Indian capital and derivatives markets.",
    primaryCtaText: "Explore Research",
    primaryCtaLink: "/services",
    secondaryCtaText: "Contact Us",
    secondaryCtaLink: "/contact",
    imageUrl: "/image/mar8.png",
    imageAlt: "Financial data screens and analytical reports",
    tag: "Market Intelligence",
  },
];