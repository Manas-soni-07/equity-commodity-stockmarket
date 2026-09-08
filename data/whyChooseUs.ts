export interface WhyChooseUsItem {
  id: number;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  bulletPoints: string[];
}

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: 1,
    title: "Research-Based Approach",
    tagline: "Data Over Speculation",
    description:
      "We focus strictly on verified data, historical market information, and structured fundamental/technical analysis rather than speculation or rumors.",
    iconName: "Database",
    bulletPoints: ["Documented historical data", "Multi-factor evaluation", "No rumors or unverified tips"],
  },
  {
    id: 2,
    title: "Simple Communication",
    tagline: "Zero Confusing Jargon",
    description:
      "We explain complex market events, earnings figures, and technical chart setups in simple, lucid English that everyday Indian investors easily comprehend.",
    iconName: "MessageSquare",
    bulletPoints: ["Clear, understandable explanations", "Accessible to beginners & pros", "Practical summaries"],
  },
  {
    id: 3,
    title: "Indian Market Focus",
    tagline: "Dedicated to NSE, BSE & MCX",
    description:
      "Our research is 100% tailored to the dynamics of the Indian economy, local regulatory frameworks, RBI policies, and domestic liquidity cycles.",
    iconName: "Landmark",
    bulletPoints: ["Deep domestic exchange context", "RBI & Union Budget tracking", "Domestic liquidity flows"],
  },
  {
    id: 4,
    title: "Clear Information",
    tagline: "Transparent & Honest",
    description:
      "We avoid unnecessary complexity and sensationalism. Our reports highlight both the potential upside catalysts and the downside risks objectively.",
    iconName: "Eye",
    bulletPoints: ["Balanced upside & downside view", "Concise executive takeaways", "Honest representation"],
  },
  {
    id: 5,
    title: "Professional Approach",
    tagline: "Structured Research Process",
    description:
      "We follow a disciplined 4-step research methodology: data collation, qualitative analysis, technical confirmation, and structured report dissemination.",
    iconName: "CheckCircle2",
    bulletPoints: ["Standardized review checklists", "Rigorous cross-validation", "Disciplined timeline"],
  },
  {
    id: 6,
    title: "Risk Awareness",
    tagline: "Capital Preservation First",
    description:
      "We believe understanding downside market risks is far more important than chasing speculative returns. Capital preservation is the bedrock of longevity.",
    iconName: "ShieldAlert",
    bulletPoints: ["No guaranteed return claims", "Strict invalidation criteria", "Emphasis on risk-reward"],
  },
];
