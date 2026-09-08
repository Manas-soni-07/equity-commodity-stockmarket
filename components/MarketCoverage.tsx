import Link from "next/link";
import { MARKET_COVERAGE_DATA } from "@/data/coverage";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function MarketCoverage() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A192F]/5 text-[#0A192F] text-xs font-semibold uppercase tracking-wider mb-3">
            Domestic Breadth & Depth
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Markets We Cover
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Comprehensive informational coverage spanning leading domestic exchanges (NSE, BSE, MCX) and key macroeconomic drivers.
          </p>
        </div>

        {/* Coverage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MARKET_COVERAGE_DATA.map((item) => {
            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-amber-400/80 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Category & Exchange Pill */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 rounded-md">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 font-medium">
                      {item.exchange}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0A192F] transition-colors mb-1">
                    {item.name}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 mb-3">
                    {item.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-1.5 border-t border-slate-200/60 pt-3">
                    {item.keyHighlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-2 border-t border-slate-200/40">
                  <Link
                    href="/services"
                    className="text-xs font-semibold text-[#0A192F] hover:text-amber-600 inline-flex items-center gap-1 group/btn"
                  >
                    <span>View research scope</span>
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Note */}
        <div className="mt-10 p-4 rounded-xl bg-amber-50/60 border border-amber-200/60 text-center max-w-2xl mx-auto">
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>Exchange Note:</strong> Coverage spans cash equities, benchmark index futures/options dynamics, and MCX commodity contracts. All insights are prepared strictly for market study.
          </p>
        </div>
      </div>
    </section>
  );
}
