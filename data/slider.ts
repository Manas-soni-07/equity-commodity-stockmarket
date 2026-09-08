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

  // Image positioning & visual composition
  objectPosition?: string;
  mobileObjectPosition?: string;
  contentPosition?: "left" | "right";
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    badge: "Benchmark Indices",
    title: "Index Research",
    subtitle:
      "Understand Nifty 50, Bank Nifty, FinNifty and other key benchmark indices with clarity.",
    primaryCtaText: "Index Insights",
    primaryCtaLink: "/services",
    secondaryCtaText: "Contact Us",
    secondaryCtaLink: "/contact",
    imageUrl: "/image/mar1.png",
    imageAlt: "Indian stock market benchmark indices analysis showing Nifty 50, Bank Nifty, and FinNifty research charts",
    tag: "Indices",
    objectPosition: "center 40%",
    mobileObjectPosition: "35% center",
    contentPosition: "left",
  },
  {
    id: 2,
    badge: "Indian Financial Markets",
    title: "Understand the Indian Market",
    subtitle:
      "Research-based insights for better market understanding and disciplined decision making.",
    primaryCtaText: "Explore Our Services",
    primaryCtaLink: "/services",
    secondaryCtaText: "Contact Us",
    secondaryCtaLink: "/contact",
    imageUrl: "/image/mar2.png",
    imageAlt: "Indian financial market research workspace with trading laptop, market checklist, and stock analysis monitors",
    tag: "Market Overview",
    objectPosition: "50% 45%",
    mobileObjectPosition: "40% center",
    contentPosition: "right",
  },
  {
    id: 3,
    badge: "NSE & BSE Equities",
    title: "Equity Market Research",
    subtitle:
      "Track important market trends, high-performing sectors and fundamental stock movements.",
    primaryCtaText: "Explore Research",
    primaryCtaLink: "/services",
    secondaryCtaText: "View Pricing",
    secondaryCtaLink: "/pricing",
    imageUrl: "/image/mar3.png",
    imageAlt: "NSE and BSE equity market research with sector performance and fundamental analysis",
    tag: "Equities",
    objectPosition: "center 45%",
    mobileObjectPosition: "40% center",
    contentPosition: "left",
  },
  {
    id: 4,
    badge: "Price Action & Levels",
    title: "Technical Analysis",
    subtitle:
      "Understand important support, resistance, chart patterns and critical pivot market levels.",
    primaryCtaText: "Technical Research",
    primaryCtaLink: "/services",
    secondaryCtaText: "Read Blog",
    secondaryCtaLink: "/blog",
    imageUrl: "/image/mar4.png",
    imageAlt: "Stock market technical analysis showing candlestick chart patterns, support and resistance levels",
    tag: "Technical Analysis",
    objectPosition: "center 45%",
    mobileObjectPosition: "55% center",
    contentPosition: "left",
  },
  {
    id: 5,
    badge: "MCX & Global Commodities",
    title: "Commodity Market Research",
    subtitle:
      "Stay updated with Gold, Silver, Crude Oil and key industrial commodity price dynamics.",
    primaryCtaText: "Commodity Insights",
    primaryCtaLink: "/services",
    secondaryCtaText: "Explore Services",
    secondaryCtaLink: "/services",
    imageUrl: "/image/mar5.png",
    imageAlt: "MCX commodity research on gold bullion, silver, crude oil WTI, and industrial metals",
    tag: "Commodities",
    objectPosition: "50% 45%",
    mobileObjectPosition: "35% center",
    contentPosition: "left",
  },
  {
    id: 6,
    badge: "Clarity Over Jargon",
    title: "Research You Can Understand",
    subtitle:
      "Clear information and logical frameworks without unnecessary Wall Street complexity.",
    primaryCtaText: "About Our Approach",
    primaryCtaLink: "/about",
    secondaryCtaText: "Our Services",
    secondaryCtaLink: "/services",
    imageUrl: "/image/mar6.png",
    imageAlt: "Simplified Indian market research framework with clear educational concepts and structured investment analysis",
    tag: "Simplicity",
    objectPosition: "center 45%",
    mobileObjectPosition: "50% center",
    contentPosition: "left",
  },
  {
    id: 7,
    badge: "Daily & Weekly Summaries",
    title: "Market Updates",
    subtitle:
      "Get simple updates on important market movements, policy developments, and global cues.",
    primaryCtaText: "Market Updates",
    primaryCtaLink: "/blog",
    secondaryCtaText: "Contact Team",
    secondaryCtaLink: "/contact",
    imageUrl: "/image/mar7.png",
    imageAlt: "Daily Indian market updates, RBI policy announcements and global cues tracking",
    tag: "Market Briefs",
    objectPosition: "center 45%",
    mobileObjectPosition: "45% center",
    contentPosition: "left",
  },
  {
    id: 8,
    badge: "Continuous Knowledge",
    title: "Stay Ahead With Better Research",
    subtitle:
      "Stay thoroughly informed about the dynamic Indian capital and derivatives markets.",
    primaryCtaText: "Explore Research",
    primaryCtaLink: "/services",
    secondaryCtaText: "Contact Us",
    secondaryCtaLink: "/contact",
    imageUrl: "/image/mar8.png",
    imageAlt: "Continuous market intelligence featuring the Bombay Stock Exchange Phiroze Jeejeebhoy Towers, bull and bear dynamics, and derivatives analysis",
    tag: "Market Intelligence",
    objectPosition: "55% 45%",
    mobileObjectPosition: "50% center",
    contentPosition: "left",
  },
  {
    id: 9,
    badge: "Disciplined Strategy",
    title: "Make Informed Decisions",
    subtitle:
      "Use objective research and balanced risk perspective to evaluate opportunities in Indian markets.",
    primaryCtaText: "View Plans",
    primaryCtaLink: "/pricing",
    secondaryCtaText: "Contact Us",
    secondaryCtaLink: "/contact",
    imageUrl: "/image/mar9.png",
    imageAlt: "Disciplined equity investment strategy desk focused on objective research, balanced risk management, and Indian market opportunities",
    tag: "Informed Decision",
    objectPosition: "center 45%",
    mobileObjectPosition: "45% center",
    contentPosition: "left",
  },
];