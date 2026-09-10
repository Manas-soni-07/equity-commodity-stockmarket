import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MarketCoverage from "@/components/MarketCoverage";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import { COMPANY_DATA } from "@/data/company";
import {
  Compass,
  Target,
  Eye,
  ShieldCheck,
  CheckCircle2,
  Building2,
  MapPin,
  Clock,
  Layers,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Equity & Commodity Market Research",
  description:
    "Learn about Equity & Commodity Market Research, our mission to simplify Indian capital and commodity market dynamics, our values, and research ethos.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0A192F] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Independent Research Firm</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              About Us
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mt-4 leading-relaxed font-normal">
              Demystifying Indian financial markets through empirical research, balanced risk awareness, and simple language.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider">
                Firm Background
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Empowering Market Participants With Objective Knowledge
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {COMPANY_DATA.description}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Indian financial markets have experienced unprecedented growth over the past decade, with millions of retail participants entering equities, derivatives, and commodities. However, the ecosystem has also seen a surge in speculative noise, unrealistic claims, and overly sensationalized commentary.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our purpose is clear: to operate as a disciplined, fact-based research desk. We break down the movements of the Nifty 50, Bank Nifty, listed Indian corporations, and MCX bullion contracts into transparent, actionable research briefs without the fluff.
              </p>

              <div className="pt-2 flex items-center gap-4 text-sm font-semibold">
                <Link
                  href="/services"
                  className="px-6 py-3 rounded-xl bg-[#0A192F] hover:bg-slate-800 text-white transition-colors"
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/contact"
                  className="text-[#0A192F] hover:text-amber-600 underline underline-offset-4 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right Col: Institutional Factsheet with Placeholders (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 sm:p-8 shadow-sm space-y-5">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
                    Company Factsheet
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {COMPANY_DATA.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {COMPANY_DATA.legalNote}
                  </p>
                </div>

                <div className="space-y-3.5 text-xs text-slate-700">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-slate-500 font-medium flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                      Headquarters:
                    </span>
                    <span className="font-semibold text-right text-slate-900">
                      {COMPANY_DATA.location}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <span className="text-slate-500 font-medium flex items-center gap-2">
                      <Layers className="w-4 h-4 text-amber-600 shrink-0" />
                      Coverage Scope:
                    </span>
                    <span className="font-semibold text-right text-slate-900">
                      NSE, BSE & MCX
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <span className="text-slate-500 font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                      Operating Hours:
                    </span>
                    <span className="font-semibold text-right text-slate-900">
                      Mon – Fri (8:30 AM – 6:00 PM IST)
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <span className="text-slate-500 font-medium flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      Ethical Standard:
                    </span>
                    <span className="font-semibold text-right text-emerald-700">
                      Zero Guaranteed Return Claims
                    </span>
                  </div>

            
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-[11px] text-amber-900 leading-relaxed">
                  <strong>Transparency Commitment:</strong> We strictly refrain from inventing fictitious registration claims or false awards. All institutional identifiers remain fully verifiable and editable.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Mission */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-14 h-14 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To simplify Indian capital and commodity market dynamics by providing unbiased, data-backed research notes that empower independent market participants to make informed, risk-conscious decisions.
              </p>
              <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Demystify corporate earnings and valuation frameworks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Provide objective technical price zones and support/resistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Promote disciplined capital preservation and risk management</span>
                </li>
              </ul>
            </div>

            {/* Our Vision */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-14 h-14 rounded-xl bg-[#0A192F] text-amber-400 flex items-center justify-center">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become India&apos;s most trusted, transparent, and accessible financial research desk — respected for intellectual honesty, analytical rigor, and educational value.
              </p>
              <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Establish the gold standard in clean, jargon-free market communication</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Support participants across Tier-1, Tier-2, and Tier-3 Indian cities</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Help reduce avoidable retail drawdown caused by speculative tips</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2">
              Foundational Ethics
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-base text-slate-600 mt-2">
              The ethical compass guiding every research note, chart study, and client conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Integrity Over Hype</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We never exaggerate potential returns or sugarcoat market risks. If data is inconclusive, we openly report it as inconclusive.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Empirical Rigor</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every observation is grounded in verifiable exchange data, audited financial filings, and historical multi-timeframe price action.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Simple Communication</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe true financial expertise lies in explaining complex market concepts in plain language that anyone can understand.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold mb-4">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Risk First Mindset</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Capital preservation is the single most important determinant of long-term success. We evaluate downside before upside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us component */}
      <WhyChooseUs />

      {/* Market Coverage component */}
      <MarketCoverage />

      {/* CTA Section */}
      <CTASection
        title="Experience Research Grounded in Clarity"
        subtitle="Connect with our desk to learn how our structured reports can support your understanding of Indian equities and commodities."
      />

      {/* Full Compliance Banner */}
      <DisclaimerBanner />
    </div>
  );
}
