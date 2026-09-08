export interface TestimonialItem {
  id: number;
  author: string;
  role: string;
  location: string;
  rating: number;
  quoteTitle: string;
  reviewText: string;
  category: "Equity" | "Commodity" | "Index" | "General";
  initials: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 1,
    author: "Customer Name [Sample Placeholder]",
    role: "Equity Investor & Independent Trader",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Simple, easy-to-understand research",
    reviewText:
      "The research is presented in a very simple and straightforward way. It helps me understand market trends, support-resistance levels, and sector movements without the usual confusing financial jargon.",
    category: "Equity",
    initials: "CN",
  },
  {
    id: 2,
    author: "Client Name [Sample Placeholder]",
    role: "Index Market Participant",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Balanced perspective on Nifty & Bank Nifty",
    reviewText:
      "What I appreciate most is that they do not make unrealistic promises. The daily index summaries and open interest breakdowns give me an objective view of market structure before the morning bell.",
    category: "Index",
    initials: "CP",
  },
  {
    id: 3,
    author: "Subscriber Name [Sample Placeholder]",
    role: "Commodity & Bullion Observer",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Comprehensive Gold & Silver updates",
    reviewText:
      "Tracking MCX gold and silver along with global macro indicators used to take hours. Their commodity research notes clearly summarize the key drivers, inventory data, and currency impacts.",
    category: "Commodity",
    initials: "SN",
  },
  {
    id: 4,
    author: "Business Owner [Sample Placeholder]",
    role: "SME Founder & Corporate Participant",
    location: "Client, India",
    rating: 5,
    quoteTitle: "High standard of objectivity and risk awareness",
    reviewText:
      "Unlike many speculative sources on social media, this platform emphasizes risk management and capital preservation. The sector reviews give great clarity for business planning.",
    category: "General",
    initials: "BO",
  },
  {
    id: 5,
    author: "Investor Name [Sample Placeholder]",
    role: "Long-Term Equity Researcher",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Reliable data and honest communication",
    reviewText:
      "The quarterly earnings breakdowns and fundamental reviews are thorough yet concise. Having structured information saves me significant time during peak corporate results season.",
    category: "Equity",
    initials: "IN",
  },
  {
    id: 6,
    author: "Market Enthusiast [Sample Placeholder]",
    role: "Technical Charting Learner",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Clear chart levels without complicated indicators",
    reviewText:
      "The technical analysis notes focus on price action, volume, and multi-timeframe support/resistance zones. Very educational and practical for someone developing chart literacy.",
    category: "General",
    initials: "ME",
  },
];
