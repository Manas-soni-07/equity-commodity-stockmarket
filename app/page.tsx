import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import ServiceCard from "@/components/ServiceCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import ResearchProcess from "@/components/ResearchProcess";
import MarketCoverage from "@/components/MarketCoverage";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import PricingCard from "@/components/PricingCard";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import { SERVICES_DATA } from "@/data/services";

import { PRICING_PLANS } from "@/data/pricing";
import { BLOGS_DATA } from "@/data/blogs";
import { COMPANY_DATA } from "@/data/company";
import {
  ArrowRight,
  TrendingUp,
  Target,
  Compass,
  Shield,
  MapPin,
  Building2,
  CalendarCheck,
  Layers,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* ==================================================
          SECTION 1 — HERO SLIDER (9 Slides, Autoplay, Responsive)
          ================================================== */}
      <HeroSlider />

      {/* ==================================================
          SECTION 2 — COMPANY INTRODUCTION
          ================================================== */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Main Intro Text (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider">
                About Our Firm
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                About Equity & Commodity Market Research
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {COMPANY_DATA.description}
              </p>

              {/* 4 Pillars: Overview, What We Do, Approach, Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    <h3 className="text-sm font-bold text-slate-900">Company Overview</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A dedicated Indian research initiative committed to objective data and clarity across domestic capital and commodity markets.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <TrendingUp className="w-4 h-4 text-amber-600" />
                    <h3 className="text-sm font-bold text-slate-900">What We Do</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We track equities, indices (Nifty, Bank Nifty), and commodities (Gold, Silver) to synthesize readable, factual reports.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <Compass className="w-4 h-4 text-amber-600" />
                    <h3 className="text-sm font-bold text-slate-900">Our Approach</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A multi-step evaluation pairing balance sheet fundamentals with disciplined technical price action.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <Shield className="w-4 h-4 text-amber-600" />
                    <h3 className="text-sm font-bold text-slate-900">Our Values</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Uncompromising honesty, transparent risk awareness, and absolutely zero false promises of guaranteed returns.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#0A192F] hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <span>Read Full Company Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-semibold text-[#0A192F] hover:text-amber-600 transition-colors underline underline-offset-4"
                >
                  Explore Research Deliverables
                </Link>
              </div>
            </div>

            {/* Right Col: Indian Company-Style Institutional Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#0A192F] to-[#061121] text-white rounded-2xl p-7 sm:p-8 border border-slate-800 shadow-xl space-y-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold">
                    Company Information Desk
                  </span>
                  <h3 className="text-xl font-bold mt-1 text-white">
                    {COMPANY_DATA.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 italic">
                    &ldquo;{COMPANY_DATA.tagline}&rdquo;
                  </p>
                </div>

                <div className="space-y-4 text-xs divide-y divide-slate-800/80 pt-2">
                  <div className="flex items-start justify-between gap-4 pt-3">
                    <span className="text-slate-400 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                      Location:
                    </span>
                    <span className="text-slate-200 font-medium text-right">
                      {COMPANY_DATA.location}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 pt-3">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-amber-400 shrink-0" />
                      Market Coverage:
                    </span>
                    <span className="text-slate-200 font-medium text-right">
                      Indian Equity, Indices & Commodities
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 pt-3">
                    <span className="text-slate-400 flex items-center gap-2">
                      <CalendarCheck className="w-4 h-4 text-amber-400 shrink-0" />
                      Research Focus:
                    </span>
                    <span className="text-slate-200 font-medium text-right">
                      {COMPANY_DATA.experiencePlaceholder}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 pt-3">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                      Compliance Status:
                    </span>
                    <span className="text-emerald-400 font-medium text-right">
                      Independent Research Desk [Non-Advisory]
                    </span>
                  </div>
                </div>

                {/* Transparency Note Box */}
                <div className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700 text-[11px] text-slate-300 leading-relaxed">
                  <strong>Notice:</strong> We do not publish speculative tips or guarantee profits. All company details are clearly documented with editable placeholders for institutional verification.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 3 — OUR SERVICES (8 Cards)
          ================================================== */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
              Research Spectrum
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Simple research and market insights to help you understand the market better.
            </p>
          </div>

          {/* 8 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0A192F] hover:bg-slate-800 shadow-md transition-all"
            >
              <span>View Detailed Service Coverage & Methodology</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 4 — WHY CHOOSE US (6 Core Cards)
          ================================================== */}
      <WhyChooseUs />

      {/* ==================================================
          SECTION 5 — OUR RESEARCH APPROACH (Horizontal on Desktop, Vertical on Mobile)
          ================================================== */}
      <ResearchProcess />

      {/* ==================================================
          SECTION 6 — MARKET COVERAGE (NSE, BSE, MCX, Sectors)
          ================================================== */}
      <MarketCoverage />

      {/* ==================================================
          SECTION 7 — WHAT OUR CUSTOMERS SAY (Horizontal Scrolling Infinite Carousel)
          ================================================== */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ==================================================
          SECTION 8 — PRICING PREVIEW
          ================================================== */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
              Subscription Tiers
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Simple Plans
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Transparent, research-backed plans structured for independent learners, active market followers, and bespoke mandates.
            </p>
          </div>

          {/* First Plan: Full-Width Card */}
          {PRICING_PLANS[0] && (
            <div className="max-w-6xl mx-auto mb-12 sm:mb-14">
              <PricingCard plan={PRICING_PLANS[0]} fullWidth />
            </div>
          )}

          {/* Section Sub-divider for Professional Tiers */}
          <div className="mt-4 mb-8 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-2">
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

          {/* Custom plan prompt */}
          {/* <div className="mt-14 text-center p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-2xl max-w-2xl mx-auto shadow-xs">
            <h4 className="text-base font-bold text-slate-900">
              Need a custom plan or bespoke corporate research mandate?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-4">
              We compile tailored market teardowns, hedging reviews, and sector studies for businesses and family offices.
            </p>
            <Link
              href="/contact?plan=custom"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0A192F] hover:text-amber-600 transition-colors underline underline-offset-4"
            >
              <span>Contact our team for a custom quote →</span>
            </Link>
          </div> */}
        </div>
      </section>

      {/* ==================================================
          SECTION 9 — LATEST MARKET INSIGHTS / BLOG
          ================================================== */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
                Market Intelligence
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Latest Market Insights
              </h2>
              <p className="text-base text-slate-600 mt-2">
                Educational write-ups and structural observations on Indian market fundamentals and charts.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A192F] hover:text-amber-600 transition-colors self-start md:self-auto"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BLOGS_DATA.slice(0, 4).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 10 — STRONG CALL TO ACTION (CTA)
          ================================================== */}
      <CTASection
        title="Want to Understand the Market Better?"
        subtitle="Talk to our team to learn more about our research services, weekly briefs, and objective analytical methodology."
      />

      {/* ==================================================
          SECTION 11 — FINANCIAL REGULATORY DISCLAIMER
          ================================================== */}
      <DisclaimerBanner />
    </div>
  );
}
