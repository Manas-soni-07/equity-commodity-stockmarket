import {
  Database,
  MessageSquare,
  Landmark,
  Eye,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";
import { WHY_CHOOSE_US_DATA } from "@/data/whyChooseUs";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  MessageSquare,
  Landmark,
  Eye,
  CheckCircle2,
  ShieldAlert,
};

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            Core Principles
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Us?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            In a market filled with speculative noise and unrealistic promises, we deliver structured, honest research designed to help you understand the market.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US_DATA.map((item) => {
            const Icon = iconMap[item.iconName] || Database;
            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-amber-500/70 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  {/* Top Icon with circle background */}
                  <div className="w-14 h-14 rounded-xl bg-[#0A192F] group-hover:bg-amber-500 text-amber-400 group-hover:text-[#0A192F] flex items-center justify-center transition-all duration-300 shadow-md mb-6">
                    <Icon className="w-7 h-7 transition-transform group-hover:scale-110" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#0A192F] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-3">
                    {item.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Micro bullet checkmarks */}
                <ul className="space-y-2 border-t border-slate-100 pt-4">
                  {item.bulletPoints.map((point, idx) => (
                    <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
