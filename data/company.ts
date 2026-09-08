export interface CompanyInfo {
  name: string;
  legalNote: string;
  tagline: string;
  secondaryTagline: string;
  description: string;
  location: string;
  operatingHours: string;
  marketHours: string;
  email: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  address: string;
  experiencePlaceholder: string;
  disclaimerShort: string;
  disclaimerFull: string;
  socialLinks: {
    linkedin: string;
    x: string;
    facebook: string;
    youtube: string;
    instagram: string;
  };
}

export const COMPANY_DATA: CompanyInfo = {
  name: "Equity & Commodity Market Research",
  legalNote: "Independent Indian Financial Market Research & Educational Analytics",
  tagline: "Understand the Indian Market. Make Informed Decisions.",
  secondaryTagline: "Simple, Research-Based Insights for Indian Equity & Commodity Markets.",
  description:
    "Equity & Commodity Market Research provides research-based insights across Indian equities, indices and commodities. Our aim is to make market information simple, useful and easy to understand for market participants, investors, and analysts.",
  location: "India [City / State Placeholder]",
  operatingHours: "Monday to Friday: 8:30 AM – 6:00 PM IST (Saturday: 10:00 AM – 2:00 PM)",
  marketHours: "NSE & BSE Cash / F&O: 9:15 AM – 3:30 PM | MCX: 9:00 AM – 11:30/11:55 PM IST",
  email: "contact@equitycommodityresearch.com ",
  phone: "+91 9876543210", // placeholder phone number
  whatsapp: "+919876543210", // placeholder phone number for WhatsApp link
  whatsappMessage: "Hello, I am interested in learning more about Equity & Commodity Market Research services.",
  address: "Financial District / Commercial Hub, India [Editable Address Placeholder]",
  experiencePlaceholder: "Established with dedicated focus on Indian Capital Markets research [Editable Year/Experience]",
  disclaimerShort:
    "Disclaimer: The information provided on this website is for informational and research purposes only. It should not be considered investment advice, a recommendation to buy or sell securities or commodities, or a guarantee of returns. Market investments are subject to risks. Please make decisions based on your own research and consult a qualified financial professional where appropriate.",
  disclaimerFull:
    "Equity & Commodity Market Research is an independent market research and analysis provider. All content, technical chart studies, indices observations, commodity overviews, and educational write-ups published on this platform are strictly prepared for informational and educational purposes. We DO NOT provide portfolio management services, tip services, or promise guaranteed returns of any kind. Trading and investing in securities and commodity derivatives involve substantial financial risk of loss. Users must perform their own due diligence or consult an authorized financial advisor before executing trades.",
  socialLinks: {
    linkedin: "https://linkedin.com ",
    x: "https://x.com [Placeholder]",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com ",
    instagram: "https://instagram.com",
  },
};
