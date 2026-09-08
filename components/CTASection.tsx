import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = "Want to Understand the Market Better?",
  subtitle = "Talk to our team to learn more about our research services, reports, and methodology.",
}: CTASectionProps) {
  return (
    <section className="relative py-16 sm:py-20 bg-[#0A192F] text-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Research-Driven Decision Making</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-[#0A192F] bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-lg shadow-amber-500/25 transition-all duration-200 group"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all duration-200"
            >
              <span>Explore Services</span>
            </Link>
          </div>

          {/* Direct Phone or WhatsApp prompt */}
          <div className="pt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span>
              Direct Desk Inquiries:{" "}
              <a href={`tel:${COMPANY_DATA.phone}`} className="text-slate-300 hover:text-amber-400 underline">
                {COMPANY_DATA.phone}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
