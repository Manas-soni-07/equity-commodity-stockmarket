import Link from "next/link";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";
import { PricingPlan } from "@/data/pricing";

interface PricingCardProps {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  const isHighlighted = plan.popular;

  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl p-7 sm:p-8 transition-all duration-300 ${
        isHighlighted
          ? "bg-[#0A192F] text-white shadow-2xl ring-2 ring-amber-400 scale-[1.02] z-10"
          : "bg-white text-slate-900 border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-lg"
      }`}
    >
      {/* Popular Badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-400 text-[#0A192F] shadow-md">
            <Sparkles className="w-3 h-3" />
            {plan.badge}
          </span>
        </div>
      )}

      <div>
        {/* Tier Name */}
        <h3
          className={`text-xl font-bold tracking-tight ${
            isHighlighted ? "text-white" : "text-slate-900"
          }`}
        >
          {plan.name}
        </h3>

        {/* Short Description */}
        <p
          className={`text-xs sm:text-sm mt-2 leading-relaxed ${
            isHighlighted ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {plan.shortDescription}
        </p>

        {/* Price Placeholder */}
        <div className="mt-6 mb-6 pb-6 border-b border-slate-200/40">
          <div className="flex items-baseline gap-2">
            <span
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                isHighlighted ? "text-amber-400" : "text-slate-900"
              }`}
            >
              {plan.pricePlaceholder}
            </span>
            <span
              className={`text-xs font-medium ${
                isHighlighted ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {plan.billingPeriod}
            </span>
          </div>
          <p
            className={`text-[11px] mt-1.5 ${
              isHighlighted ? "text-slate-400" : "text-slate-400"
            }`}
          >
            *Transparent pricing. Configurable plan placeholder for clients.
          </p>
        </div>

        {/* Features list */}
        <div className="space-y-3 mb-8">
          <div
            className={`text-xs font-bold uppercase tracking-wider ${
              isHighlighted ? "text-amber-300" : "text-slate-700"
            }`}
          >
            What is included:
          </div>
          <ul className="space-y-2.5">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    isHighlighted ? "bg-amber-400/20 text-amber-300" : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className={isHighlighted ? "text-slate-200" : "text-slate-700"}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {plan.notIncluded && plan.notIncluded.length > 0 && (
            <div className="pt-3 space-y-2 border-t border-slate-200/20">
              {plan.notIncluded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-slate-100 text-slate-400">
                    <X className="w-3 h-3" />
                  </div>
                  <span className={isHighlighted ? "text-slate-400" : "text-slate-400"}>
                    {item}
                  </span>
                </li>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Button CTA */}
      <div>
        <Link
          href={plan.ctaLink}
          className={`w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm ${
            isHighlighted
              ? "bg-amber-400 hover:bg-amber-500 text-[#0A192F] shadow-amber-400/20 hover:shadow-md"
              : "bg-[#0A192F] hover:bg-slate-800 text-white"
          }`}
        >
          <span>{plan.ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
