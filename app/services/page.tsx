import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import {
  TrendingUp,
  BarChart3,
  Coins,
  LineChart,
  BellRing,
  PieChart,
  Target,
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Equity & Commodity Market Research",
  description:
    "Explore our full suite of research services covering Indian Equities, Nifty & Bank Nifty indices, MCX Commodities, Technical Analysis, and Sector Studies.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  BarChart3,
  Coins,
  LineChart,
  BellRing,
  PieChart,
  Target,
  FileSpreadsheet,
};

const SERVICES_FAQS = [
  {
    question: "How do I receive the research reports?",
    answer:
      "Reports are delivered straight to your registered email inbox as structured digital briefs and downloadable PDF reports. Daily pre-market notes are sent before 9:00 AM IST on market days.",
  },
  {
    question: "Do you offer intraday tips or call-put recommendations?",
    answer:
      "No. We do not provide trading tips, stock hotlines, or buy/sell execution signals. Our work is strictly structured research and education to help participants identify critical market levels, trends, and fundamental factors independently.",
  },
  {
    question: "Which exchanges do you cover?",
    answer:
      "We cover the National Stock Exchange of India (NSE), Bombay Stock Exchange (BSE), and Multi Commodity Exchange (MCX). We also correlate global benchmarks such as US indices, Brent crude, and the US Dollar Index.",
  },
  {
    question: "Can I upgrade or customize my research subscription later?",
    answer:
      "Yes. You can switch between Basic, Professional, or Custom Research mandates at any time by coordinating with our support desk.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0A192F] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Comprehensive Research Spectrum</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Our Research Services
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mt-4 leading-relaxed font-normal">
              Disciplined, data-backed insights across Indian equities, indices, and commodities. Designed to empower investors and market participants with objective clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation Anchor Bar */}
      <nav aria-label="Services Navigation" className="sticky top-[65px] z-30 bg-slate-900 border-b border-slate-800 py-3 overflow-x-auto shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 min-w-max">
          {SERVICES_DATA.map((service) => (
            <a
              key={service.id}
              href={`#${service.slug}`}
              className="px-3 py-1.5 rounded-md text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {service.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Detailed Service Sections */}
      <section className="py-16 sm:py-20 divide-y divide-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {SERVICES_DATA.map((service, index) => {
            const Icon = iconMap[service.iconName] || TrendingUp;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.slug}
                className={`pt-16 first:pt-0 scroll-mt-36 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Content (7 cols) */}
                <div className={`space-y-6 ${isReversed ? "lg:col-span-7 lg:order-2" : "lg:col-span-7"}`}>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#0A192F] text-amber-400 flex items-center justify-center shadow-md shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded">
                        Service #{String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Simple Explanation */}
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                    {service.fullDescription}
                  </p>

                  {/* Two-column Box: What We Cover & Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    {/* What We Cover */}
                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/90">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-amber-600" />
                        <span>What We Cover:</span>
                      </h4>
                      <ul className="space-y-2">
                        {service.whatWeCover.map((item, idx) => (
                          <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/90">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Key Participant Benefits:</span>
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5"></span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Target Audience pill */}
                  <div className="flex items-center gap-2 text-xs text-slate-600 bg-amber-50/70 border border-amber-200/60 p-3 rounded-lg">
                    <UserCheck className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>
                      <strong>Ideal for:</strong> {service.targetAudience}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <Link
                      href={`/contact?service=${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#0A192F] bg-amber-400 hover:bg-amber-500 transition-colors shadow-sm"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Service Visual (5 cols) */}
                <div className={`${isReversed ? "lg:col-span-5 lg:order-1" : "lg:col-span-5"}`}>
                  <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                        Research Mandate
                      </span>
                      <p className="text-sm font-medium text-slate-200 mt-0.5">
                        Indian Capital & Commodity Markets
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2">
              Common Questions
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Services & Coverage FAQ
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Everything you need to know about our research formats, delivery schedules, and compliance policies.
            </p>
          </div>

          <FAQAccordion items={SERVICES_FAQS} />
        </div>
      </section>

      {/* Call to Action */}
      <CTASection
        title="Ready to Deepen Your Market Understanding?"
        subtitle="Contact our research desk today to discuss customized briefs or subscription options."
      />

      {/* Regulatory Banner */}
      <DisclaimerBanner />
    </div>
  );
}
