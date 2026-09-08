import { Metadata } from "next";
import Link from "next/link";
import { COMPANY_DATA } from "@/data/company";
import { FileText, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Equity & Commodity Market Research",
  description:
    "Terms and Conditions governing the use of the Equity & Commodity Market Research platform, research reports, and intellectual content.",
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#0A192F] text-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Service Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Please read these terms carefully before accessing research materials published by Equity & Commodity Market Research.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing our website, subscribing to our research notes, or utilizing any informational content provided by Equity & Commodity Market Research, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Research & Educational Nature (Non-Advisory)</h2>
            <p>
              All materials, technical chart observations, support/resistance studies, market overviews, and sector briefs prepared by Equity & Commodity Market Research are strictly intended for <strong>informational and educational purposes only</strong>.
            </p>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm">
              <strong className="block font-bold mb-1">Important Clarification:</strong>
              We do NOT offer portfolio management services, stock tips, buy/sell call execution signals, or promise guaranteed returns of any kind. You assume total responsibility for all trading and investment decisions.
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Intellectual Property Rights</h2>
            <p>
              All research reports, analytical charts, branding, and written commentary on this website are the proprietary intellectual property of Equity & Commodity Market Research. Subscribers are granted a single-user license to read and utilize materials for personal study. Redistribution, copying, commercial resale, or broadcast without explicit written consent is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Limitation of Liability</h2>
            <p>
              In no event shall Equity & Commodity Market Research, its founders, analysts, or employees be liable for any direct, indirect, incidental, or consequential financial losses arising out of market investments or trades executed by users based on information published on this platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Governing Law & Jurisdiction</h2>
            <p>
              These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
