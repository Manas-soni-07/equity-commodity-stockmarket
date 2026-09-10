import Link from "next/link";
import {
  Check,
  X,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Wallet,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { PricingPlan } from "@/data/pricing";

interface PricingCardProps {
  plan: PricingPlan;
  fullWidth?: boolean;
  tierIndex?: number;
  isMiddleFeatured?: boolean;
}

function parseFinancialPlan(priceStr: string) {
  if (!priceStr) return null;
  const hasKeywords = /profit/i.test(priceStr) && /charge/i.test(priceStr);
  if (!hasKeywords) return null;

  const profitMatch = priceStr.match(
    /Profit\s*[-:]\s*([^.]+?)(?=\.|$|\s+[A-Z])/i
  );
  const chargeMatch = priceStr.match(
    /Charge\s*[-:]\s*([^.]+?)(?=\.|$|\s+[A-Z])/i
  );
  const capitalMatch = priceStr.match(
    /Demat\s*Capital\s*(?:requried|required)?\s*[-:]\s*([^.]+?)(?=\.|$)/i
  );

  return {
    profit: profitMatch ? profitMatch[1].trim() : null,
    charge: chargeMatch ? chargeMatch[1].trim() : null,
    capital: capitalMatch ? capitalMatch[1].trim() : null,
  };
}

export default function PricingCard({
  plan,
  fullWidth = false,
  tierIndex,
  isMiddleFeatured = false,
}: PricingCardProps) {
  const financialMetrics = parseFinancialPlan(plan.pricePlaceholder);
  const isHighlighted = isMiddleFeatured || (plan.popular && tierIndex === undefined);

  // Determine appropriate tier badge
  let badgeText = plan.badge;
  let badgeIcon = <Sparkles className="w-3.5 h-3.5" />;
  if (tierIndex === 0 && financialMetrics?.capital) {
    badgeText = `₹${financialMetrics.capital} Capital Tier`;
    badgeIcon = <ShieldCheck className="w-3.5 h-3.5" />;
  } else if (tierIndex === 1 || isMiddleFeatured) {
    badgeText = financialMetrics?.capital
      ? `Most Popular • ₹${financialMetrics.capital} Capital`
      : plan.badge || "Most Popular";
    badgeIcon = <Sparkles className="w-3.5 h-3.5" />;
  } else if (tierIndex === 2 && financialMetrics?.capital) {
    badgeText = `Elite Tier • ₹${financialMetrics.capital} Capital`;
    badgeIcon = <Sparkles className="w-3.5 h-3.5" />;
  }

  // ==========================================
  // FULL-WIDTH LAYOUT (Used for First Plan)
  // ==========================================
  if (fullWidth) {
    return (
      <div className="relative rounded-3xl bg-white border-2 border-slate-200/90 hover:border-amber-400/70 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Top Decorative Accent Gradient */}
        <div className="h-2 w-full bg-gradient-to-r from-amber-400 via-amber-500 to-[#0A192F]" />

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200/80 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>{plan.badge || "Essential Entry Plan"}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {plan.name}
                </h3>

                <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {plan.shortDescription}
                </p>
              </div>

              {/* Pricing Section */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Subscription Rate
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-[#0A192F] tracking-tight">
                    {plan.pricePlaceholder}
                  </span>
                  {plan.billingPeriod && (
                    <span className="text-base font-semibold text-slate-500">
                      {plan.billingPeriod}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-2 flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Standard research updates • Instant WhatsApp delivery</span>
                </p>
              </div>

              {/* Action Button */}
              <div>
                <Link
                  href={plan.ctaLink}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-[#0A192F] hover:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column (7 Cols): Features Grid */}
            <div className="lg:col-span-7 bg-slate-50/90 rounded-2xl p-6 sm:p-8 border border-slate-200/80">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Key Deliverables & Included Features</span>
                </h4>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  Included
                </span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/70 shadow-xs hover:border-slate-300 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-emerald-100 text-emerald-700">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                      {feature.trim()}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.notIncluded && plan.notIncluded.length > 0 && (
                <div className="mt-4 pt-3 border-t border-slate-200 space-y-1.5">
                  {plan.notIncluded.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-500"
                    >
                      <X className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // STANDARD CARD LAYOUT (Used for 3 Columns)
  // ==========================================
  return (
    <div
      className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
        isHighlighted
          ? "bg-gradient-to-b from-[#0E223F] to-[#0A192F] text-white shadow-2xl ring-2 ring-amber-400 scale-[1.02] lg:-translate-y-2 z-10"
          : "bg-[#0A192F] text-white border border-slate-800 hover:border-slate-700 shadow-xl"
      }`}
    >
      {/* Top Badge */}
      {badgeText && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-md ${
              isHighlighted
                ? "bg-amber-400 text-[#0A192F]"
                : "bg-slate-800 text-amber-300 border border-amber-400/30"
            }`}
          >
            {badgeIcon}
            <span>{badgeText}</span>
          </span>
        </div>
      )}

      <div className="flex-1 flex flex-col">
        {/* Tier Header */}
        <div className="mt-2">
          <h3 className="text-xl font-bold tracking-tight text-white">
            {plan.name}
          </h3>

          <p className="text-xs sm:text-sm mt-2.5 leading-relaxed text-slate-300">
            {plan.shortDescription}
          </p>
        </div>

        {/* Pricing / Financial Metrics */}
        {financialMetrics ? (
          <div className="my-6 space-y-2.5">
            {/* Primary Research Charge */}
            <div className="p-3.5 rounded-2xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 block">
                  Research Charge
                </span>
                <span className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight">
                  ₹{financialMetrics.charge}
                </span>
              </div>
              <span className="text-[11px] font-semibold text-amber-300 px-2.5 py-1 rounded-lg bg-amber-400/20 border border-amber-400/30">
                Service Fee
              </span>
            </div>

            {/* Demat Capital & Profit Target Dual Stats */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/60">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1">
                  <Wallet className="w-3 h-3 text-slate-400" />
                  Demat Capital
                </span>
                <div className="text-sm sm:text-base font-bold text-white mt-1">
                  ₹{financialMetrics.capital}
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-emerald-400" />
                  Target Profit
                </span>
                <div className="text-sm sm:text-base font-bold text-emerald-400 mt-1">
                  ₹{financialMetrics.profit}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-5 mb-6 pb-5 border-b border-slate-800">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-amber-400">
                {plan.pricePlaceholder}
              </span>
              {plan.billingPeriod && (
                <span className="text-xs font-medium text-slate-400">
                  {plan.billingPeriod}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Features Checklist */}
        <div className="space-y-3 mb-8 flex-1">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-300/90 flex items-center gap-1.5 pb-1 border-b border-slate-800">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Deliverables Included</span>
          </div>

          <ul className="space-y-2.5">
            {plan.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
              >
                <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-amber-400/20 text-amber-300">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{feature.trim()}</span>
              </li>
            ))}
          </ul>

          {plan.notIncluded && plan.notIncluded.length > 0 && (
            <div className="pt-3 space-y-2 border-t border-slate-800">
              {plan.notIncluded.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-slate-400"
                >
                  <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-slate-800 text-slate-500">
                    <X className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Button CTA */}
      <div className="pt-2">
        <Link
          href={plan.ctaLink}
          className={`w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold transition-all duration-200 shadow-sm ${
            isHighlighted
              ? "bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#0A192F] shadow-amber-400/20 hover:shadow-lg"
              : "bg-amber-400 hover:bg-amber-500 text-[#0A192F]"
          }`}
        >
          <span>{plan.ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
