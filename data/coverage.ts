export interface MarketCoverageItem {
  id: string;
  name: string;
  category: "Equities" | "Indices" | "Commodities" | "Sectors";
  tagline: string;
  description: string;
  keyHighlights: string[];
  exchange: string;
}

export const MARKET_COVERAGE_DATA: MarketCoverageItem[] = [
  {
    id: "indian-equities",
    name: "Indian Equities",
    category: "Equities",
    tagline: "NSE & BSE Listed Universe",
    description: "In-depth tracking of large-cap, mid-cap, and emerging growth companies shaping India's economic growth story.",
    keyHighlights: ["Blue-chip leaders", "Fast-growing mid-caps", "Corporate earnings & results", "Institutional flow dynamics"],
    exchange: "NSE & BSE",
  },
  {
    id: "nifty-50",
    name: "Nifty 50",
    category: "Indices",
    tagline: "India's Premier Benchmark",
    description: "Continuous analytical tracking of India's flagship 50-stock index representing 13 sectors of the Indian economy.",
    keyHighlights: ["Daily pivot & trend analysis", "F&O open interest shifts", "Weightage movers", "Global correlation cues"],
    exchange: "NSE",
  },
  {
    id: "bank-nifty",
    name: "Bank Nifty",
    category: "Indices",
    tagline: "Banking Sector Pulse",
    description: "Rigorous research on the high-beta banking index comprising leading private and public sector commercial banks in India.",
    keyHighlights: ["Credit growth trends", "NPA & asset quality indicators", "High-beta price action", "Weekly options data"],
    exchange: "NSE",
  },
  {
    id: "other-indices",
    name: "Other Major Indices",
    category: "Indices",
    tagline: "Thematic & Sectoral Benchmarks",
    description: "Extensive coverage of FinNifty, Nifty Midcap 100, Nifty Next 50, and BSE Sensex for complete market breadth.",
    keyHighlights: ["BSE Sensex", "Nifty IT & Auto", "Nifty Smallcap 100", "Market breadth indicators"],
    exchange: "NSE & BSE",
  },
  {
    id: "gold",
    name: "Gold (Bullion)",
    category: "Commodities",
    tagline: "Safe Haven & Inflation Hedge",
    description: "Fundamental and technical perspectives on domestic MCX Gold futures, international spot gold (XAU/USD), and rupee movements.",
    keyHighlights: ["MCX Gold 1kg / Mini", "Global interest rate correlation", "Festive & wedding season demand", "Central bank buying"],
    exchange: "MCX & International",
  },
  {
    id: "silver",
    name: "Silver (Precious & Industrial)",
    category: "Commodities",
    tagline: "Dual-Demand Dynamic",
    description: "Analysis of silver price behavior driven by both investment demand and accelerating industrial consumption in solar PV & electronics.",
    keyHighlights: ["MCX Silver & Silver Mini", "Gold/Silver ratio trends", "Clean tech industrial demand", "Inventory levels"],
    exchange: "MCX & International",
  },
  {
    id: "other-commodities",
    name: "Other Commodities",
    category: "Commodities",
    tagline: "Energy & Base Metals",
    description: "Tracking energy markets like Crude Oil and Natural Gas, alongside industrial base metals like Copper and Aluminum.",
    keyHighlights: ["Crude Oil (Brent/WTI/MCX)", "Natural gas inventory reports", "MCX Copper & Zinc", "OPEC+ policy tracking"],
    exchange: "MCX",
  },
  {
    id: "major-sectors",
    name: "Major Market Sectors",
    category: "Sectors",
    tagline: "Economic Rotation Drivers",
    description: "Mapping capital expenditure, valuation cycles, and quarterly earnings trends across core Indian economic sectors.",
    keyHighlights: ["Banking & Financials", "IT & Technology", "Automobile & EV", "Pharma, Infra & FMCG"],
    exchange: "Indian Economy",
  },
];
