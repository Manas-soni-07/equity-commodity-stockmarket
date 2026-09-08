export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Equity" | "Indices" | "Commodities" | "Technical Analysis" | "Market Updates" | "Education";
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      keyTakeaways?: string[];
    }[];
    conclusion: string;
  };
  relatedSlugs: string[];
}

export const BLOGS_DATA: BlogPost[] = [
  {
    id: "1",
    slug: "understanding-support-and-resistance",
    title: "Understanding Support and Resistance in Indian Markets",
    excerpt:
      "A practical guide to identifying critical price floors and ceilings on NSE charts without getting overwhelmed by indicators.",
    category: "Technical Analysis",
    author: "Research Desk",
    authorRole: "Technical Analysis Team",
    date: "August 28, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Candlestick chart showing support and resistance levels",
    featured: true,
    content: {
      intro:
        "Every market participant observes how stock prices often pause, reverse, or bounce at certain familiar price levels. In financial market technical analysis, these psychological price boundaries are known as Support and Resistance. Understanding how to locate these levels objectively is the cornerstone of disciplined market observation.",
      sections: [
        {
          heading: "What Exactly is Support?",
          body: "Support represents a price level where downward price momentum slows down and buying interest is historically strong enough to overcome selling pressure. Think of support as an invisible floor beneath the market. When the price of an Indian equity or index drops to this level, market participants perceive value and demand outstrips supply.",
          keyTakeaways: [
            "Support is a zone, not a single exact rupee figure.",
            "Previous swing lows and high-volume consolidation areas often serve as future support.",
            "The more times a support level is tested and holds, the more significant market participants consider it.",
          ],
        },
        {
          heading: "What is Resistance?",
          body: "Resistance is the opposite of support — it represents an overhead ceiling where upward momentum slows down due to an influx of sellers or profit-taking. At a resistance level, supply exceeds demand, causing the advance to pause or pull back. For instance, if Nifty repeatedly faces selling pressure around 25,000, that round number acts as a psychological resistance zone.",
          keyTakeaways: [
            "Resistance reflects an accumulation of pending sell orders and profit-booking.",
            "Round numbers (like Nifty 25,000 or Bank Nifty 52,000) frequently act as psychological resistance.",
            "A clear breakout above resistance with strong volume can turn that old resistance into new support.",
          ],
        },
        {
          heading: "The Role Reversal Principle",
          body: "One of the most reliable concepts in price action analysis is role reversal: once a strong support level is breached decisively to the downside, it frequently transitions into resistance on subsequent pullbacks. Conversely, when resistance is conquered on healthy volume, it often serves as reliable support during future market retracements.",
        },
        {
          heading: "Common Mistakes Indian Traders Make",
          body: "A frequent error among market learners is treating support and resistance as razor-thin lines down to the exact paisa. In real-world market dynamics, support and resistance should always be viewed as price zones or bands. Allowing a small margin for volatility prevents premature whipsaws.",
        },
      ],
      conclusion:
        "Support and resistance provide a clean, objective roadmap of market memory. By focusing on where buyers and sellers have historically engaged, you can make informed decisions based on risk-to-reward rather than impulse.",
    },
    relatedSlugs: ["how-market-indices-work", "things-to-know-before-studying-a-stock", "understanding-commodity-markets"],
  },
  {
    id: "2",
    slug: "how-market-indices-work",
    title: "How Market Indices Work: Deconstructing Nifty 50 and Bank Nifty",
    excerpt:
      "Learn how benchmark indices are calculated, why weightage matters, and how sectoral movements influence the broader market.",
    category: "Indices",
    author: "Research Desk",
    authorRole: "Index & Quantitative Research",
    date: "August 20, 2026",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Financial market display tracking index numbers",
    featured: true,
    content: {
      intro:
        "Whenever you open financial news in India, the first numbers displayed are the Nifty 50 and Sensex. But what do these figures actually represent, and why can the index be positive even when your individual portfolio stocks might be negative? Let us break down the mechanics of market indices.",
      sections: [
        {
          heading: "Free-Float Market Capitalization Methodology",
          body: "The Nifty 50 and BSE Sensex are constructed using the free-float market capitalization weighted methodology. Free-float refers to the proportion of shares readily available for public trading, excluding locked-in promoter holdings, government shares, and strategic stakes. A company with a higher free-float valuation exercises a larger proportional influence on the index movement.",
          keyTakeaways: [
            "Index movements are not an equal-weighted average of the 50 stocks.",
            "Heavyweight constituents have a disproportionate impact on daily index points.",
            "Sector representations shift over time to mirror India's changing industrial landscape.",
          ],
        },
        {
          heading: "Why Index Weightage Matters",
          body: "In the Nifty 50, the top 5 to 7 companies (such as HDFC Bank, Reliance Industries, ICICI Bank, Infosys, and TCS) typically account for over 40% of the entire index weight. Consequently, if two or three heavyweights experience strong buying from institutional investors, the Nifty may post substantial gains even if 30 out of the 50 stocks remain unchanged or decline.",
        },
        {
          heading: "Sectoral Indices as Leading Indicators",
          body: "Beyond the headline Nifty 50, specialized indices like Nifty Bank, Nifty IT, Nifty Auto, and Nifty Metal provide granular insights into specific industries. Often, leading sectoral indices begin their cyclical trends before the headline Nifty reflects the transition.",
        },
      ],
      conclusion:
        "Understanding index construction prevents misinterpreting daily market breadth. By monitoring both the headline index and underlying sectoral health, participants gain a balanced view of actual market sentiment.",
    },
    relatedSlugs: ["understanding-support-and-resistance", "things-to-know-before-studying-a-stock", "understanding-commodity-markets"],
  },
  {
    id: "3",
    slug: "things-to-know-before-studying-a-stock",
    title: "Things to Know Before Studying an Indian Stock",
    excerpt:
      "A structured fundamental checklist for examining Indian corporate earnings, balance sheets, and management quality.",
    category: "Equity",
    author: "Research Desk",
    authorRole: "Fundamental Equity Research",
    date: "August 12, 2026",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Financial report and stock valuation documents",
    featured: true,
    content: {
      intro:
        "With thousands of companies listed across the NSE and BSE, selecting stocks for systematic study requires a structured evaluation framework. Instead of relying on casual social media recommendations or unsubstantiated rumors, every prudent participant should follow a rigorous fundamental checklist.",
      sections: [
        {
          heading: "1. Business Model and Revenue Drivers",
          body: "Before diving into complex financial ratios, ask a simple question: How does this company make money? Does it sell consumer goods with consistent repeat purchases, or is it a cyclical capital goods manufacturer dependent on government infrastructure tenders? A clear understanding of the company's operating moat is paramount.",
          keyTakeaways: [
            "Identify the core products or services generating primary revenue.",
            "Determine whether customer demand is resilient or cyclical.",
            "Assess pricing power: Can the business pass rising raw material costs to customers?",
          ],
        },
        {
          heading: "2. Balance Sheet Health and Debt Levels",
          body: "High debt can severely strain a company during economic downturns. Look at the Debt-to-Equity ratio and Interest Coverage Ratio. Indian companies with prudent capital allocation and manageable debt are better positioned to weather interest rate cycles and reinvest cash flows into business expansion.",
        },
        {
          heading: "3. Cash Flow vs. Reported Net Profit",
          body: "Accounting profits on the Profit & Loss statement do not always equal actual cash in the bank. Always verify Cash Flow from Operations (CFO). A company that consistently reports growing profits but fails to generate positive operating cash flows warrants closer scrutiny regarding working capital delays.",
        },
        {
          heading: "4. Promoter Integrity and Corporate Governance",
          body: "Review promoter shareholding patterns, pledged shares, and related-party transactions. Promoters who maintain a stable stake without pledging shares demonstrate long-term alignment with minority shareholders.",
        },
      ],
      conclusion:
        "Conducting independent study of a company instills confidence during periods of broader market volatility. A disciplined checklist serves as your anchor in navigating Indian equities.",
    },
    relatedSlugs: ["understanding-support-and-resistance", "how-market-indices-work", "understanding-commodity-markets"],
  },
  {
    id: "4",
    slug: "understanding-commodity-markets",
    title: "Understanding Commodity Markets: Gold, Silver, and Industrial Cycles",
    excerpt:
      "Explore how MCX commodities respond to international macro trends, central bank policies, and currency movements.",
    category: "Commodities",
    author: "Research Desk",
    authorRole: "Commodities Desk",
    date: "August 05, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Gold bars and precious commodity elements",
    featured: false,
    content: {
      intro:
        "In India, commodities have deep cultural and economic significance. From household gold savings to energy imports that drive national trade balances, commodity markets provide crucial diversification and insight into global macroeconomic trends.",
      sections: [
        {
          heading: "Gold as an Inflation Hedge and Reserve Asset",
          body: "Gold prices are driven by real interest rates, the US Dollar Index (DXY), and central bank accumulation. In India, domestic MCX Gold futures reflect both international spot gold movements and the USD/INR exchange rate. If the Rupee depreciates against the Dollar, domestic gold prices can rise even if global dollar-denominated gold remains flat.",
          keyTakeaways: [
            "Negative correlation with real bond yields in major economies.",
            "Dual pricing dynamics: Global spot prices multiplied by Rupee-Dollar parity plus import duties.",
            "Structural accumulation by global central banks providing long-term baseline support.",
          ],
        },
        {
          heading: "Silver's Unique Dual Personality",
          body: "Unlike gold, which is primarily an investment and reserve asset, more than 50% of annual silver demand originates from industrial applications, including photovoltaic solar panels, semiconductors, and electric vehicles. Consequently, silver prices react to both financial hedge sentiment and manufacturing demand cycles.",
        },
        {
          heading: "Energy and Base Metals on MCX",
          body: "Crude oil is the lifeblood of global transportation, and India imports over 85% of its crude requirements. Changes in OPEC+ production quotas and geopolitical bottlenecks directly affect domestic input costs across paint, tire, and airline industries.",
        },
      ],
      conclusion:
        "Monitoring commodity trends enhances your overall market awareness. Whether studying industrial equities or bullion, commodity research provides the macro context necessary for informed decisions.",
    },
    relatedSlugs: ["understanding-support-and-resistance", "how-market-indices-work", "things-to-know-before-studying-a-stock"],
  },
];
