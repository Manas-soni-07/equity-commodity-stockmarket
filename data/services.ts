export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  whatWeCover: string[];
  benefits: string[];
  targetAudience: string;
  ctaText: string;
  image: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "equity-research",
    slug: "equity-research",
    title: "Equity Research",
    shortDescription: "Research and analysis of Indian stocks and sectors across large, mid, and small cap segments.",
    fullDescription:
      "Our Equity Research desk conducts disciplined analysis of listed companies on the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE). We look into corporate earnings, business fundamentals, sector tailwinds, valuation ratios, and balance sheet quality to produce easy-to-digest equity research notes.",
    iconName: "TrendingUp",
    whatWeCover: [
      "Large-cap, Mid-cap and Small-cap stocks on NSE & BSE",
      "Quarterly corporate earnings and financial result reviews",
      "Valuation analysis (P/E, P/B, EV/EBITDA metrics)",
      "Sector trends, Capex cycles, and regulatory impacts",
      "Key risk factors and corporate governance observations",
    ],
    benefits: [
      "Understand company fundamentals in plain, simple language",
      "Avoid emotional decisions by relying on verifiable numbers",
      "Stay updated on earnings season and quarterly commentaries",
      "Clear differentiation between short-term noise and business trends",
    ],
    targetAudience: "Long-term investors, market learners, and independent equity participants.",
    ctaText: "Explore Equity Research",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "index-research",
    slug: "index-research",
    title: "Index Research",
    shortDescription: "Market analysis covering major Indian indices such as Nifty 50, Bank Nifty, and FinNifty.",
    fullDescription:
      "Benchmark indices represent the broader pulse of the Indian economy. Our Index Research provides detailed structural breakdowns of Nifty 50, Bank Nifty, and key thematic indices. We evaluate open interest (OI) trends, index heavyweight movements, institutional participation cues, and multi-timeframe chart structures.",
    iconName: "BarChart3",
    whatWeCover: [
      "Nifty 50 and Bank Nifty daily & weekly technical structures",
      "Sectoral indices (Nifty IT, Nifty Auto, Nifty Pharma, Nifty FMCG)",
      "Open interest (OI) distribution and PCR (Put-Call Ratio) observations",
      "FII / DII institutional flow trends and market breadth",
      "Important support, resistance, and monthly range projections",
    ],
    benefits: [
      "Grasp broader market direction before assessing individual stocks",
      "Understand index weightage impacts (e.g., Reliance, HDFC Bank)",
      "Clear view of support and resistance zones for systematic awareness",
      "Objective index commentary free from sensationalized headlines",
    ],
    targetAudience: "Index traders, swing traders, and derivative market learners.",
    ctaText: "Explore Index Insights",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "commodity-research",
    slug: "commodity-research",
    title: "Commodity Research",
    shortDescription: "Research and updates on Gold, Silver, Crude Oil, and other major commodities traded on MCX.",
    fullDescription:
      "Commodities serve as both an inflation hedge and an essential economic barometer. Our Commodity Research desk tracks precious metals, energy, and base metals on the Multi Commodity Exchange (MCX), correlating domestic movements with international benchmarks, currency fluctuations (USD/INR), and geopolitical catalysts.",
    iconName: "Coins",
    whatWeCover: [
      "Bullion: Gold (MCX Gold, Sovereign Gold) and Silver price dynamics",
      "Energy: Crude Oil (WTI / Brent / MCX) and Natural Gas fundamentals",
      "Base Metals: Copper, Zinc, Aluminum supply-demand cycles",
      "Currency impact: Dollar Index (DXY) and Rupee valuation movements",
      "Central bank gold reserve actions and global macro data",
    ],
    benefits: [
      "Stay ahead of macro shifts impacting gold and silver price trends",
      "Understand the connection between global events and domestic prices",
      "Clear commodity calendars tracking inventory and inflation data",
      "Data-backed perspectives for both physical buyers and commodity participants",
    ],
    targetAudience: "Commodity traders, bullion market observers, and macro researchers.",
    ctaText: "Explore Commodity Research",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "technical-analysis",
    slug: "technical-analysis",
    title: "Technical Analysis",
    shortDescription: "Understand charts, trends, support, resistance, and important price action market levels.",
    fullDescription:
      "Technical analysis is the study of historical market action and human psychology reflected through prices and volume. We emphasize pure price action, moving average dynamics, trendline structures, support/resistance zones, and risk-to-reward ratios rather than overwhelming you with dozens of conflicting indicators.",
    iconName: "LineChart",
    whatWeCover: [
      "Multi-timeframe candlestick and price action evaluation",
      "Horizontal support and resistance, pivot points, and swing highs/lows",
      "Volume spread analysis and delivery percentage trends",
      "Chart patterns (Head & Shoulders, Flags, Double Tops/Bottoms, Triangles)",
      "Moving average crossovers (20 EMA, 50 SMA, 200 SMA) for trend identification",
    ],
    benefits: [
      "Learn to interpret market charts with structured methodology",
      "Identify objective entry, exit, and invalidation price zones",
      "Develop strict risk management and position sizing awareness",
      "Eliminate guesswork by relying on clear, repeatable price setups",
    ],
    targetAudience: "Short-term traders, positional traders, and technical charting students.",
    ctaText: "Explore Technical Research",
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "market-updates",
    slug: "market-updates",
    title: "Market Updates",
    shortDescription: "Simple updates about important developments, policy decisions, and movements in financial markets.",
    fullDescription:
      "Keeping pace with rapid daily financial developments can be overwhelming. Our Market Updates condense pre-market cues, global market handshakes (Dow, Nasdaq, Asian markets), RBI monetary policy meetings, Union Budget developments, and corporate actions into short, digestible morning and evening research notes.",
    iconName: "BellRing",
    whatWeCover: [
      "Pre-market morning briefing before Indian markets open at 9:15 AM",
      "Post-market closing analysis and top sector movers",
      "RBI Monetary Policy updates, CPI inflation, and GDP releases",
      "FII & DII net buying/selling figures and derivative rolls",
      "Key corporate announcements, dividends, stock splits, and AGMs",
    ],
    benefits: [
      "Save 2+ hours daily by reading summarized, factual updates",
      "Get prepared before market opening bell with actionable context",
      "No gossip or clickbait — only verified facts and market data",
      "Delivered in clear, accessible language for busy professionals",
    ],
    targetAudience: "Retail investors, working professionals, and active market followers.",
    ctaText: "Read Market Updates",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "sector-research",
    slug: "sector-research",
    title: "Sector Research",
    shortDescription: "Research and insights on major Indian market sectors including Banking, IT, Auto, and Pharma.",
    fullDescription:
      "Indian market performance is heavily cyclical, with sector rotation driving stock returns across different phases of the economic cycle. Our Sector Research maps capital expenditure (Capex), raw material costs, government initiatives (like PLI schemes), and seasonal demand across key industries.",
    iconName: "PieChart",
    whatWeCover: [
      "Banking & Financial Services (PSU Banks, Private Banks, NBFCs)",
      "Information Technology (Tier-1 IT vs Mid-cap growth firms)",
      "Automobiles & Auto Ancillaries (EV adoption, rural vs urban demand)",
      "Pharmaceuticals, Healthcare, and Chemical manufacturing",
      "Infrastructure, Capital Goods, Defence, and Renewable Energy sectors",
    ],
    benefits: [
      "Understand which sectors are in cyclical growth vs contraction",
      "Correlate government budget allocations with sectoral opportunities",
      "Compare sector valuation multiples with historical 10-year averages",
      "Make sector-level allocations with sound fundamental grounding",
    ],
    targetAudience: "Portfolio managers, wealth managers, and sector-focused investors.",
    ctaText: "Explore Sector Research",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "trading-insights",
    slug: "trading-insights",
    title: "Trading Insights",
    shortDescription: "Market observations and technical insights designed to build disciplined trading habits.",
    fullDescription:
      "Successful market participation relies heavily on psychology, risk allocation, and trade discipline. Our Trading Insights series shares observational notes on volatility behavior (India VIX), risk-to-reward frameworks, trade journal principles, and stop-loss placement strategies.",
    iconName: "Target",
    whatWeCover: [
      "India VIX (Volatility Index) interpretations and options premium pricing",
      "Risk-reward modeling (1:2, 1:3 minimum framework)",
      "Trade sizing and capital protection rules",
      "Behavioral psychology: handling drawdowns, FOMO, and revenge trading",
      "Scenario planning for high-volatility events (Elections, Budgets, Fed Rate calls)",
    ],
    benefits: [
      "Cultivate the discipline required for long-term consistency",
      "Understand why capital preservation is far more critical than high win rates",
      "Practical tools to audit and refine your personal trade checklist",
      "Completely objective insights without false promises of instant wealth",
    ],
    targetAudience: "Intraday and swing traders seeking disciplined risk management frameworks.",
    ctaText: "Explore Trading Insights",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "custom-research",
    slug: "custom-research",
    title: "Custom Research",
    shortDescription: "Tailored research solutions based on specific market requirements, asset classes, or themes.",
    fullDescription:
      "Have a unique research requirement or require a deep-dive report on a specific sector, commodity basket, or thematic index? Our research desk collaborates with family offices, business owners, independent advisors, and corporate treasuries to compile bespoke research deliverables.",
    iconName: "FileSpreadsheet",
    whatWeCover: [
      "Thematic research reports on emerging Indian industry themes",
      "Detailed financial modeling and historical peer group comparisons",
      "Hedging analysis for commodity-dependent manufacturing businesses",
      "Custom market presentations and quarterly data summaries",
      "Dedicated analyst briefing sessions upon request",
    ],
    benefits: [
      "Bespoke data aligned precisely to your mandate and objectives",
      "Direct communication with research analysts for clarifications",
      "Structured formats: executive summaries, datasets, and presentation slides",
      "Flexible engagement models tailored for your timeline",
    ],
    targetAudience: "SMEs, treasuries, independent financial professionals, and corporate leaders.",
    ctaText: "Request Custom Research",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80",
  },
];
