import { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import { PRICING_PLANS, PRICING_FAQS } from "@/data/pricing";
import { ShieldCheck, HelpCircle, CheckCircle2, MessageSquare } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "Pricing Plans | Equity & Commodity Market Research",
  description:
    "Explore transparent research subscription plans for Indian equities, indices, and MCX commodities. Transparent pricing with clear deliverables.",
};

export default function PricingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0A192F] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Transparent & Simple Subscription Tiers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Simple, Transparent Plans
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mt-4 leading-relaxed font-normal">
              Select the research tier tailored to your market engagement — from weekly overviews to dedicated institutional custom mandates.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Choose Your Research Level
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              All plans include clear, non-advisory market research briefs delivered on Indian market days.
            </p>
          </div>

          {/* First Plan: Full Width Basic Research */}
          {PRICING_PLANS[0] && (
            <div className="max-w-6xl mx-auto mb-12 sm:mb-14">
              <PricingCard plan={PRICING_PLANS[0]} fullWidth />
            </div>
          )}

          {/* Section Sub-divider for Professional Tiers */}
          <div className="mt-4 mb-8 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
              Capital-Based Research Programs
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Professional Research Tiers
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              Structured analysis across Equity, Nifty, Bank Nifty & Commodities, tailored to your trading capital.
            </p>
          </div>

          {/* Last 3 Plans: 3 Columns Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {PRICING_PLANS.slice(1).map((plan, idx) => (
              <PricingCard
                key={`${plan.id}-${idx}`}
                plan={plan}
                tierIndex={idx}
                isMiddleFeatured={idx === 1}
              />
            ))}
          </div>

          {/* Pricing Disclaimer Note */}
          <div className="mt-12 max-w-3xl mx-auto p-4 rounded-xl bg-white border border-slate-200 text-center">
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Notice Regarding Pricing:</strong> Final pricing can be configured or customized based on delivery frequency and organizational requirements. Contact our team to confirm pricing models and payment channels.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Comparison Overview */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-900">
              Plan Comparison Breakdown
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              A quick side-by-side view of what is included across each research tier.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#0A192F] text-white">
                <tr>
                  <th className="py-4 px-6 font-semibold">Deliverable</th>
                  <th className="py-4 px-4 font-semibold text-center">Basic Research</th>
                  <th className="py-4 px-4 font-semibold text-center text-amber-300">Professional</th>
                  <th className="py-4 px-4 font-semibold text-center">Custom Mandate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-6 font-medium text-slate-900">Frequency</td>
                  <td className="py-3.5 px-4 text-center">Weekly Digest</td>
                  <td className="py-3.5 px-4 text-center font-semibold text-[#0A192F]">Daily (Pre/Post Market)</td>
                  <td className="py-3.5 px-4 text-center">Real-Time / On-Demand</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-6 font-medium text-slate-900">Indian Equity & Stock Notes</td>
                  <td className="py-3.5 px-4 text-center">General Highlights</td>
                  <td className="py-3.5 px-4 text-center font-semibold text-emerald-600">Full Coverage</td>
                  <td className="py-3.5 px-4 text-center font-semibold text-emerald-600">Bespoke Stock Teardowns</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-6 font-medium text-slate-900">Index Research (Nifty/Bank Nifty)</td>
                  <td className="py-3.5 px-4 text-center">Support / Resistance</td>
                  <td className="py-3.5 px-4 text-center font-semibold text-emerald-600">OI, PCR & Chart Levels</td>
                  <td className="py-3.5 px-4 text-center font-semibold text-emerald-600">Multi-Timeframe Models</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-6 font-medium text-slate-900">MCX Commodity Updates (Gold/Silver)</td>
                  <td className="py-3.5 px-4 text-center">Weekly Summary</td>
                  <td className="py-3.5 px-4 text-center font-semibold text-emerald-600">Daily Updates</td>
                  <td className="py-3.5 px-4 text-center font-semibold text-emerald-600">Hedging & Price Exposure</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3.5 px-6 font-medium text-slate-900">Analyst Consultation</td>
                  <td className="py-3.5 px-4 text-center text-slate-400">—</td>
                  <td className="py-3.5 px-4 text-center font-medium">Priority Email Support</td>
                  <td className="py-3.5 px-4 text-center font-semibold text-emerald-600">Direct Analyst Calls</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQs Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900">
              Questions About Pricing & Deliverables
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Clear answers to help you select the most suitable plan for your research needs.
            </p>
          </div>

          <FAQAccordion items={PRICING_FAQS} />
        </div>
      </section>

      {/* Need Custom Plan Card */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-[#0A192F] to-[#112240] p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h4 className="text-xl font-bold text-white">Need a Bespoke Research Plan?</h4>
              <p className="text-sm text-slate-300 mt-1">
                Our desk compiles custom sector studies and corporate models for enterprise clients.
              </p>
            </div>
            <Link
              href="/contact?plan=custom"
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-[#0A192F] font-semibold text-sm shrink-0 transition-colors"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Full Compliance Banner */}
      <DisclaimerBanner />
    </div>
  );
}
