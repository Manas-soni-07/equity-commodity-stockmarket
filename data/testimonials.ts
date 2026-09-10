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
    author: "Ram Birla",
    role: "Equity Investor & Independent Trader",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Simple, easy-to-understand research",
    reviewText:
      "The research is presented in a very simple and straightforward way. It helps me understand market trends, support-resistance levels, and sector movements without the usual confusing financial jargon.",
    category: "Equity",
    initials: "RB",
  },
  {
    id: 2,
    author: "Jayesh Kumar",
    role: "Index Market Participant",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Balanced perspective on Nifty & Bank Nifty",
    reviewText:
      "What I appreciate most is that they do not make unrealistic promises. The daily index summaries and open interest breakdowns give me an objective view of market structure before the morning bell.",
    category: "Index",
    initials: "JK",
  },
  {
    id: 3,
    author: "Dilip Kumar",
    role: "Commodity & Bullion Observer",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Comprehensive Gold & Silver updates",
    reviewText:
      "Tracking MCX gold and silver along with global macro indicators used to take hours. Their commodity research notes clearly summarize the key drivers, inventory data, and currency impacts.",
    category: "Commodity",
    initials: "DK",
  },
  {
    id: 4,
    author: "Hariom Birla",
    role: "SME Founder & Corporate Participant",
    location: "Client, India",
    rating: 5,
    quoteTitle: "High standard of objectivity and risk awareness",
    reviewText:
      "Unlike many speculative sources on social media, this platform emphasizes risk management and capital preservation. The sector reviews give great clarity for business planning.",
    category: "General",
    initials: "HB",
  },
  {
    id: 5,
    author: "Anil Kumar Jain",
    role: "Long-Term Equity Researcher",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Reliable data and honest communication",
    reviewText:
      "The quarterly earnings breakdowns and fundamental reviews are thorough yet concise. Having structured information saves me significant time during peak corporate results season.",
    category: "Equity",
    initials: "AK",
  },
  {
    id: 6,
    author: "Manoj Kumar Sharma",
    role: "Technical Charting Learner",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Clear chart levels without complicated indicators",
    reviewText:
      "The technical analysis notes focus on price action, volume, and multi-timeframe support/resistance zones. Very educational and practical for someone developing chart literacy.",
    category: "General",
    initials: "MS",
  },
  {
    id: 7,
    author: "Rajkumar Jaiswal",
    role: "Retail Equity Investor",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Research that saves valuable time",
    reviewText:
      "The research summaries are well structured and easy to follow. I can quickly understand what is happening across the market without spending hours going through multiple sources.",
    category: "Equity",
    initials: "RJ",
  },
  {
    id: 8,
    author: "Sandeep Kumar Singh",
    role: "Independent Market Trader",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Useful technical market perspective",
    reviewText:
      "The combination of price action, market levels and trend analysis provides a useful framework for studying the market. The reports are concise and focused on the important information.",
    category: "Equity",
    initials: "SS",
  },
  {
    id: 9,
    author: "Hanuman Prasad",
    role: "Nifty & Bank Nifty Participant",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Clear view of index structure",
    reviewText:
      "The Nifty and Bank Nifty analysis gives a clear picture of important levels, market structure and overall sentiment. It makes my pre-market preparation much more organized.",
    category: "Index",
    initials: "HP",
  },
  {
    id: 10,
    author: "Himanshu Kumar Birla",
    role: "Long-Term Equity Investor",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Fundamental research in simple language",
    reviewText:
      "I particularly like how company fundamentals and quarterly results are explained without unnecessary complexity. The structured format makes it easier to review companies consistently.",
    category: "Equity",
    initials: "HK",
  },
  {
    id: 11,
    author: "Rakesh Choudhary",
    role: "MCX Market Participant",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Helpful perspective on commodity markets",
    reviewText:
      "The commodity updates bring together domestic and international factors in one place. Gold, silver and crude oil updates are presented in a way that is easy to understand.",
    category: "Commodity",
    initials: "RC",
  },
  {
    id: 12,
    author: "Vikram Mehta",
    role: "Gold & Silver Market Participant",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Good coverage of bullion markets",
    reviewText:
      "The regular updates on gold and silver help me keep track of major market drivers, global developments and currency movements without having to follow several different sources.",
    category: "Commodity",
    initials: "VM",
  },
  {
    id: 13,
    author: "Amit Malhotra",
    role: "Business & Finance Professional",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Professional and objective approach",
    reviewText:
      "The overall approach feels professional and research-oriented. I appreciate the focus on facts, market data and risk awareness rather than sensational market commentary.",
    category: "General",
    initials: "AM",
  },
  {
    id: 14,
    author: "Pankaj Verma",
    role: "Market Research Learner",
    location: "Client, India",
    rating: 5,
    quoteTitle: "A useful learning resource",
    reviewText:
      "The reports have helped me understand concepts such as market trends, support and resistance, sector performance and price action in a much more structured way.",
    category: "General",
    initials: "PV",
  },
  {
    id: 15,
    author: "Rahul Agarwal",
    role: "Portfolio & Equity Market Participant",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Well-organized market information",
    reviewText:
      "Having equity, index and sector information organized in one place makes regular market review much easier. The presentation is clean, focused and convenient to follow.",
    category: "Equity",
    initials: "RA",
  },
  {
    id: 16,
    author: "Nitin Sharma",
    role: "Index Research Participant",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Useful pre-market preparation",
    reviewText:
      "The index research provides a good starting point for my daily market preparation. Important levels and market developments are presented clearly without excessive information.",
    category: "Index",
    initials: "NS",
  },
  {
    id: 17,
    author: "Deepak Tiwari",
    role: "Commodity Research Participant",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Global factors explained clearly",
    reviewText:
      "Understanding commodity prices requires looking at several global factors. The research notes make these relationships easier to follow and provide a structured view of the market.",
    category: "Commodity",
    initials: "DT",
  },
  {
    id: 18,
    author: "Arjun Kapoor",
    role: "Financial Market Participant",
    location: "Client, India",
    rating: 5,
    quoteTitle: "Focused on research, not speculation",
    reviewText:
      "The biggest positive for me is the research-first approach. The content focuses on market information, analysis and risk awareness instead of making exaggerated claims.",
    category: "General",
    initials: "AK",
  },
{
  id: 19,
  author: "Rohit Sharma",
  role: "Retail Equity Investor",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Research that is easy to follow",
  reviewText:
    "The market research is presented in a clear and structured manner. It helps me quickly understand important market trends and company-specific developments.",
  category: "Equity",
  initials: "RS",
},

{
  id: 20,
  author: "Aakash Patel",
  role: "Independent Equity Trader",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Clear and practical market insights",
  reviewText:
    "I like the way technical levels and market trends are explained. The reports are concise and help me prepare better before making my own market decisions.",
  category: "Equity",
  initials: "AP",
},

{
  id: 21,
  author: "Vivek Mishra",
  role: "Nifty Market Participant",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Helpful Nifty market analysis",
  reviewText:
    "The index analysis gives a useful overview of Nifty movements, important levels and market sentiment. It has become a helpful part of my daily market preparation.",
  category: "Index",
  initials: "VM",
},

{
  id: 22,
  author: "Saurabh Gupta",
  role: "Long-Term Equity Investor",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Fundamental information presented clearly",
  reviewText:
    "The fundamental research is detailed without being difficult to understand. Company performance, earnings and important developments are presented in a well-organized format.",
  category: "Equity",
  initials: "SG",
},

{
  id: 23,
  author: "Kunal Bansal",
  role: "Bank Nifty Trader",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Useful index levels and market structure",
  reviewText:
    "The Bank Nifty analysis makes it easier to track important support and resistance levels. I especially appreciate the simple presentation of technical information.",
  category: "Index",
  initials: "KB",
},

{
  id: 24,
  author: "Abhishek Srivastava",
  role: "Financial Market Participant",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Professional research approach",
  reviewText:
    "The overall research feels professional and objective. Instead of unnecessary market noise, the reports focus on relevant data, trends and important developments.",
  category: "General",
  initials: "AS",
},

{
  id: 25,
  author: "Mohit Agrawal",
  role: "Commodity Market Participant",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Useful commodity market updates",
  reviewText:
    "The commodity updates provide a convenient summary of important developments in gold, silver and crude oil. The information is simple to understand and easy to review.",
  category: "Commodity",
  initials: "MA",
},

{
  id: 26,
  author: "Rajat Saxena",
  role: "Technical Analysis Learner",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Great resource for understanding charts",
  reviewText:
    "The research has helped me understand price action, trends and support-resistance levels more clearly. The explanations are practical and easy to follow.",
  category: "General",
  initials: "RS",
},

{
  id: 27,
  author: "Neeraj Yadav",
  role: "Retail Market Investor",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Saves time during market research",
  reviewText:
    "Instead of checking multiple sources every day, I can get the important market information in one structured place. This makes my regular research much more efficient.",
  category: "Equity",
  initials: "NY",
},

{
  id: 28,
  author: "Amit Soni",
  role: "Equity & Portfolio Participant",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Well-structured equity research",
  reviewText:
    "The company research and market updates are presented in a very organized way. It is useful for keeping track of companies and understanding broader market trends.",
  category: "Equity",
  initials: "AS",
},

{
  id: 29,
  author: "Varun Mehta",
  role: "Gold & Silver Market Observer",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Clear view of bullion markets",
  reviewText:
    "The gold and silver updates are easy to understand and cover the major factors affecting prices. I find the global market perspective particularly useful.",
  category: "Commodity",
  initials: "VM",
},

{
  id: 30,
  author: "Prakash Joshi",
  role: "Business & Finance Professional",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Objective and research-focused",
  reviewText:
    "I appreciate the research-first approach. The information is presented professionally and focuses on market data, business developments and risk awareness.",
  category: "General",
  initials: "PJ",
},

{
  id: 31,
  author: "Ravi Shukla",
  role: "Index Research Participant",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Good support for daily market preparation",
  reviewText:
    "The index reports give me a quick understanding of market structure and important levels. The concise format makes it convenient to review before the market opens.",
  category: "Index",
  initials: "RS",
},

{
  id: 32,
  author: "Sachin Choudhary",
  role: "Independent Market Trader",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Focused information without unnecessary noise",
  reviewText:
    "The reports focus on the information that actually matters. Market trends, technical levels and important developments are explained clearly without unnecessary complexity.",
  category: "General",
  initials: "SC",
},

{
  id: 33,
  author: "Aditya Khanna",
  role: "Equity Research Participant",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Reliable format for regular research",
  reviewText:
    "The structured research format makes it easier to review market and company information regularly. I particularly like the balance between detailed analysis and simple explanations.",
  category: "Equity",
  initials: "AK",
},
{
  id: 69,
  author: "Priya Rohit panchal",
  role: "Equity Investor Couple",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Simple and reliable market research",
  reviewText:
    "We both appreciate how clearly the market research is presented. The reports help us understand important trends and developments without unnecessary complexity.",
  category: "Equity",
  initials: "PR",
},

{
  id: 70,
  author: "Neha Amit Agarwal",
  role: "Long-Term Investment Couple",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Helpful fundamental research",
  reviewText:
    "The company research and quarterly updates are easy to understand. It helps us review businesses and market developments in a more structured way.",
  category: "Equity",
  initials: "NA",
},

{
  id: 71,
  author: "Sneha Rahul Gupta",
  role: "Equity Market Participants",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Research that saves time",
  reviewText:
    "The structured market summaries save us a lot of time. We can quickly understand the important developments before doing our own detailed research.",
  category: "Equity",
  initials: "SR",
},

{
  id: 72,
  author: "Pooja Vikas Verma",
  role: "Nifty & Bank Nifty Participants",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Clear index market insights",
  reviewText:
    "The Nifty and Bank Nifty analysis gives us a clear view of important levels and market structure. It is very useful for our daily market preparation.",
  category: "Index",
  initials: "PV",
},

{
  id: 73,
  author: "Anjali Saurabh Mehta",
  role: "Equity Research Couple",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Professional and easy to follow",
  reviewText:
    "We like the professional presentation and simple explanations. The combination of company fundamentals and market updates makes regular research much easier.",
  category: "Equity",
  initials: "AS",
},

{
  id: 74,
  author: "Kavita Rajesh Joshi",
  role: "Commodity Market Participants",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Useful commodity updates",
  reviewText:
    "The gold, silver and crude oil updates give us a convenient overview of commodity markets. The major global factors are explained in a clear manner.",
  category: "Commodity",
  initials: "KR",
},

{
  id: 75,
  author: "Ritu Manoj Sharma",
  role: "Financial Market Participants",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Balanced and objective approach",
  reviewText:
    "We appreciate the research-focused approach. The reports provide useful market information while maintaining an objective view of opportunities and risks.",
  category: "General",
  initials: "RM",
},

{
  id: 76,
  author: "Divya Kunal Kapoor",
  role: "Independent Equity Investors",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Useful equity market insights",
  reviewText:
    "The equity updates help us understand important company and sector developments quickly. The reports are clean, concise and convenient to review.",
  category: "Equity",
  initials: "DK",
},

{
  id: 77,
  author: "Shweta Nitin Jain",
  role: "Long-Term Market Participants",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Well-organized market information",
  reviewText:
    "The information is organized very well and makes our regular market tracking easier. We particularly like the concise company and sector updates.",
  category: "Equity",
  initials: "SN",
},

{
  id: 78,
  author: "Nisha Arjun Patel",
  role: "Index Market Participants",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Clear pre-market perspective",
  reviewText:
    "The index research gives us a useful starting point before the market opens. Important levels, trends and market developments are easy to identify.",
  category: "Index",
  initials: "NA",
},

{
  id: 79,
  author: "Simran Rohan Arora",
  role: "Technical Analysis Learners",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Helpful for understanding charts",
  reviewText:
    "The focus on price action, trends and support-resistance levels has helped us improve our understanding of technical analysis. The explanations are practical and simple.",
  category: "General",
  initials: "SR",
},

{
  id: 80,
  author: "Meena Sanjay Choudhary",
  role: "Gold & Silver Market Participants",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Good bullion market coverage",
  reviewText:
    "The regular gold and silver updates help us follow major market drivers and global developments. The information is presented in a straightforward way.",
  category: "Commodity",
  initials: "MS",
},

{
  id: 81,
  author: "Isha Varun Malhotra",
  role: "Portfolio Investors",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Convenient market research",
  reviewText:
    "Having equity, index and sector information together makes our research routine much easier. The presentation is clean, structured and professional.",
  category: "Equity",
  initials: "IV",
},

{
  id: 82,
  author: "Swati Akshay Bansal",
  role: "Retail Market Investors",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Easy-to-follow market insights",
  reviewText:
    "The reports focus on important information without making things unnecessarily complicated. They are useful for keeping track of daily market developments.",
  category: "General",
  initials: "SA",
},

{
  id: 83,
  author: "Aarti Mohit Srivastava",
  role: "Financial Research Participants",
  location: "Client, India",
  rating: 5,
  quoteTitle: "Professional research experience",
  reviewText:
    "We appreciate the organized and professional approach. The focus on market data, objective analysis and risk awareness makes the research valuable for regular market tracking.",
  category: "General",
  initials: "AM",
},


];
