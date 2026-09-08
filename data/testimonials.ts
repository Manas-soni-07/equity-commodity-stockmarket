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
  {
  id: 7,
  author: "Retail Investor [Sample Placeholder]",
  role: "Retail Equity Investor",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Research that saves valuable time",
  reviewText:
    "The research summaries are well structured and easy to follow. I can quickly understand what is happening across the market without spending hours going through multiple sources.",
  category: "Equity",
  initials: "RI",
},

{
  id: 8,
  author: "Trading Professional [Sample Placeholder]",
  role: "Independent Market Trader",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Useful technical market perspective",
  reviewText:
    "The combination of price action, market levels and trend analysis provides a useful framework for studying the market. The reports are concise and focused on the important information.",
  category: "Equity",
  initials: "TP",
},

{
  id: 9,
  author: "Market Participant [Sample Placeholder]",
  role: "Nifty & Bank Nifty Participant",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Clear view of index structure",
  reviewText:
    "The Nifty and Bank Nifty analysis gives a clear picture of important levels, market structure and overall sentiment. It makes my pre-market preparation much more organized.",
  category: "Index",
  initials: "MP",
},

{
  id: 10,
  author: "Equity Research User [Sample Placeholder]",
  role: "Long-Term Equity Investor",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Fundamental research in simple language",
  reviewText:
    "I particularly like how company fundamentals and quarterly results are explained without unnecessary complexity. The structured format makes it easier to review companies consistently.",
  category: "Equity",
  initials: "ER",
},

{
  id: 11,
  author: "Commodity Participant [Sample Placeholder]",
  role: "MCX Market Participant",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Helpful perspective on commodity markets",
  reviewText:
    "The commodity updates bring together domestic and international factors in one place. Gold, silver and crude oil updates are presented in a way that is easy to understand.",
  category: "Commodity",
  initials: "CM",
},

{
  id: 12,
  author: "Bullion Market Observer [Sample Placeholder]",
  role: "Gold & Silver Market Participant",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Good coverage of bullion markets",
  reviewText:
    "The regular updates on gold and silver help me keep track of major market drivers, global developments and currency movements without having to follow several different sources.",
  category: "Commodity",
  initials: "BM",
},

{
  id: 13,
  author: "Business Professional [Sample Placeholder]",
  role: "Business & Finance Professional",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Professional and objective approach",
  reviewText:
    "The overall approach feels professional and research-oriented. I appreciate the focus on facts, market data and risk awareness rather than sensational market commentary.",
  category: "General",
  initials: "BP",
},

{
  id: 14,
  author: "Investment Learner [Sample Placeholder]",
  role: "Market Research Learner",
  location: "Client, India",
  rating: 5,
  quoteTitle: "A useful learning resource",
  reviewText:
    "The reports have helped me understand concepts such as market trends, support and resistance, sector performance and price action in a much more structured way.",
  category: "General",
  initials: "IL",
},

{
  id: 15,
  author: "Portfolio Participant [Sample Placeholder]",
  role: "Portfolio & Equity Market Participant",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Well-organized market information",
  reviewText:
    "Having equity, index and sector information organized in one place makes regular market review much easier. The presentation is clean, focused and convenient to follow.",
  category: "Equity",
  initials: "PP",
},

{
  id: 16,
  author: "Index Research User [Sample Placeholder]",
  role: "Index Research Participant",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Useful pre-market preparation",
  reviewText:
    "The index research provides a good starting point for my daily market preparation. Important levels and market developments are presented clearly without excessive information.",
  category: "Index",
  initials: "IR",
},

{
  id: 17,
  author: "Commodity Research User [Sample Placeholder]",
  role: "Commodity Research Participant",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Global factors explained clearly",
  reviewText:
    "Understanding commodity prices requires looking at several global factors. The research notes make these relationships easier to follow and provide a structured view of the market.",
  category: "Commodity",
  initials: "CR",
},

{
  id: 18,
  author: "Financial Market User [Sample Placeholder]",
  role: "Financial Market Participant",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Focused on research, not speculation",
  reviewText:
    "The biggest positive for me is the research-first approach. The content focuses on market information, analysis and risk awareness instead of making exaggerated claims.",
  category: "General",
  initials: "FM",
},
];
