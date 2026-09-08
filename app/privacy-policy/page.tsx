import { Metadata } from "next";
import Link from "next/link";
import { COMPANY_DATA } from "@/data/company";
import { Shield, Lock, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Equity & Commodity Market Research",
  description:
    "Privacy Policy for Equity & Commodity Market Research. How we handle user inquiries, communication preferences, and data privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#0A192F] text-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Data Protection Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Last Updated: August 2026 | Effective for all visitors and subscribers of Equity & Commodity Market Research.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Introduction</h2>
            <p>
              Equity & Commodity Market Research (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal information you share with us through our website and research communication channels. This Privacy Policy explains how we collect, store, and utilize your information when you interact with our research portal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Information We Collect</h2>
            <p>
              We collect information strictly necessary to provide research briefs, answer inquiries, and manage subscriptions:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and organization when you submit an inquiry or subscribe to research digests.</li>
              <li><strong>Career Application Data:</strong> Resumes, employment history, and contact details submitted via our Career page.</li>
              <li><strong>Website Usage Data:</strong> Standard server logs, browser types, device information, and anonymous session statistics to maintain site speed and security.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. How We Use Your Information</h2>
            <p>
              The information we collect is utilized exclusively for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Delivering requested research reports, morning notes, and market updates.</li>
              <li>Responding to specific queries submitted through our contact forms or WhatsApp desk.</li>
              <li>Evaluating candidate profiles for open and upcoming career opportunities.</li>
              <li>Ensuring compliance with Indian digital privacy guidelines and prevention of unauthorized access.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. No Sharing or Sale of Personal Data</h2>
            <p>
              We do NOT sell, rent, lease, or trade your personal information or contact details to third-party telemarketers, lead aggregators, or unauthorized third parties. Your details are accessible solely to authorized members of our research and support desk.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Data Security</h2>
            <p>
              We employ industry-standard administrative and technical safeguards to secure your personal data from loss, unauthorized disclosure, or misuse. However, no electronic transmission over the Internet is 100% immune from security risks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">6. Contact Our Privacy Officer</h2>
            <p>
              If you have any questions, wish to update your contact details, or request deletion of your information from our delivery list, please email:{" "}
              <a href={`mailto:${COMPANY_DATA.email}`} className="text-amber-600 font-semibold underline">
                {COMPANY_DATA.email}
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
