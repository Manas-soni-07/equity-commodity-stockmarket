import { Database, Search, LineChart, FileCheck2, ArrowRight } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STEPS: StepItem[] = [
  {
    number: "01",
    title: "Market Data",
    tagline: "Reliable Raw Data Collection",
    description:
      "We aggregate end-of-day price actions, open interest (OI) feeds, quarterly corporate reports, and domestic economic data from official exchange portals.",
    icon: Database,
  },
  {
    number: "02",
    title: "Research & Analysis",
    tagline: "Quantitative & Qualitative Filtering",
    description:
      "Our research desk screens data against established valuation models, sector trends, institutional flow metrics, and macro indicators.",
  icon: Search,
  },
  {
    number: "03",
    title: "Technical & Fundamental Review",
    tagline: "Rigorous Dual-Check Process",
    description:
      "Every observation undergoes dual verification: evaluating balance sheet fundamentals alongside multi-timeframe price action, support, and resistance.",
    icon: LineChart,
  },
  {
    number: "04",
    title: "Clear Market Insights",
    tagline: "Actionable, Jargon-Free Delivery",
    description:
      "Insights are structured into clear, readable research briefs with explicit invalidation levels and risk disclosures for subscribers.",
    icon: FileCheck2,
  },
];

export default function ResearchProcess() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            Structured Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Research Approach
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            We adhere to a transparent, 4-step research workflow to deliver objective insights without unnecessary market noise.
          </p>
        </div>

        {/* Process Timeline: Desktop Horizontal, Mobile Vertical */}
        <div className="relative">
          {/* Connecting Line on Desktop */}
          <div
            className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-amber-400 via-[#0A192F] to-emerald-500 -translate-y-6 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group relative flex flex-col bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-amber-400 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {/* Step Number Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-amber-500 group-hover:scale-110 transition-transform">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#0A192F] text-amber-400 flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[#0A192F] transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-3">
                    {step.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow Indicator for non-last steps on desktop */}
                  {index < STEPS.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-slate-400 z-20">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 italic max-w-2xl mx-auto">
            &ldquo;Every stage of our research process is designed around empirical evidence, transparent documentation, and a conservative risk-first framework.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
