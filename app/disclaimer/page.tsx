import { Metadata } from "next";
import Link from "next/link";
import { COMPANY_DATA } from "@/data/company";
import { ShieldAlert, AlertTriangle, Scale, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Financial Disclaimer | Equity & Commodity Market Research",
  description:
    "Comprehensive financial research disclaimer, market risk disclosure, and non-advisory mandate statement for Indian equity and commodity research.",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#0A192F] text-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Compliance & Statutory Disclosure</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Comprehensive Financial Disclaimer
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Important regulatory disclaimers, market risk disclosures, and non-guarantee principles.
          </p>
        </div>
      </section>

      {/* Main Disclaimer Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* Top High-Priority Notice Box */}
          <div className="p-6 sm:p-7 rounded-2xl bg-amber-50 border-2 border-amber-300 shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-amber-950">
                Statutory Financial Risk Disclosure
              </h2>
            </div>
            <p className="text-amber-900 leading-relaxed font-medium">
              {COMPANY_DATA.disclaimerShort}
            </p>
          </div>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-600" />
              <span>1. Informational & Educational Nature Only</span>
            </h3>
            <p>
              Equity & Commodity Market Research operates as an independent research provider. All reports, chart pattern studies, index levels (such as Nifty 50 and Bank Nifty), and commodity commentaries (such as MCX Gold and Silver) are prepared solely for educational awareness and analytical study.
            </p>
            <p>
              Under no circumstances should any content published on this website or shared via email/messaging be construed as direct investment advice, portfolio management, or an endorsement/recommendation to purchase or liquidate any security, derivative, or commodity contract.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-600" />
              <span>2. No Guaranteed Returns or Profit Promises</span>
            </h3>
            <p>
              Trading and investing in financial markets carry substantial risk of loss. Historical stock performance or past technical chart patterns do not guarantee future results.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>We do NOT promise or imply guaranteed profits or target returns.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>We do NOT provide speculative tips, insider calls, or lottery schemes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>We focus strictly on objective data, risk-reward ratios, and balanced market analysis.</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-600" />
              <span>3. Independent Due Diligence & Professional Advice</span>
            </h3>
            <p>
              Every investor and trader has unique financial goals, risk tolerance, and time horizons. Market participants must conduct their own independent due diligence or consult an authorized financial advisor before executing trades. You are solely responsible for any decisions made based on your interpretation of our research reports.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900">4. Institutional Identifiers & Placeholders</h3>
            <p>
              In strict adherence to ethical practices, Equity & Commodity Market Research does not invent or advertise fictitious certifications or registration claims. Any institutional identifiers required by local statutes are maintained transparently with editable placeholders for institutional verification.
            </p>
          </section>

          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="text-sm font-semibold text-[#0A192F] hover:text-amber-600 underline underline-offset-4"
            >
              ← Return to Homepage
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-[#0A192F] text-amber-400 text-xs font-semibold hover:bg-slate-800"
            >
              Contact Compliance Desk
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
