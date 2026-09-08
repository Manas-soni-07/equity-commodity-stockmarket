import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import { COMPANY_DATA } from "@/data/company";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Equity & Commodity Market Research",
  description:
    "Get in touch with the Equity & Commodity Market Research desk. Inquire about research reports, custom studies, or subscription tiers.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    COMPANY_DATA.whatsappMessage
  )}`;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0A192F] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Direct Research Inquiries</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Contact Us
            </h1>
            <p className="text-lg text-slate-300 mt-3 leading-relaxed font-normal">
              Have a question about our research services? Get in touch with us.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Col: Contact Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
                  Desk Support
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  How to Reach Us
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Our research analysts and customer support desk are available during standard Indian trading and business hours to assist you.
                </p>
              </div>

              {/* Information Cards */}
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${COMPANY_DATA.email}`}
                      className="text-sm font-semibold text-slate-900 hover:text-amber-600 transition-colors break-all"
                    >
                      {COMPANY_DATA.email}
                    </a>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Average response time: Within 1 business day
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${COMPANY_DATA.phone}`}
                      className="text-sm font-semibold text-slate-900 hover:text-emerald-600 transition-colors"
                    >
                      {COMPANY_DATA.phone}
                    </a>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Direct telephone support during market hours
                    </span>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Office Location
                    </span>
                    <p className="text-sm font-semibold text-slate-900">
                      {COMPANY_DATA.address}
                    </p>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      {COMPANY_DATA.location}
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Working & Market Hours
                    </span>
                    <p className="text-sm font-semibold text-slate-900">
                      {COMPANY_DATA.operatingHours}
                    </p>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      {COMPANY_DATA.marketHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick CTA Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-white shadow-md space-y-3">
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-6 h-6 text-emerald-300" />
                  <h4 className="font-bold text-base">Quick WhatsApp Inquiry</h4>
                </div>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  Prefer instant messaging? Connect with our research desk on WhatsApp for quick inquiries regarding research reports or plan features.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-[#061121] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Col: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Placeholder Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-2">
              <Building className="w-3.5 h-3.5" />
              <span>Location Map</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Our Presence & Regional Reach
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Serving subscribers across key Indian financial hubs including Mumbai, Delhi NCR, Bengaluru, Hyderabad, and Chennai.
            </p>
          </div>

          {/* Clean Google Maps Styled Placeholder Container */}
          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner flex flex-col items-center justify-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-[#0A192F] text-amber-400 flex items-center justify-center shadow-lg mb-3">
              <MapPin className="w-8 h-8 animate-bounce" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">
              {COMPANY_DATA.name}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mt-1 mb-4">
              {COMPANY_DATA.address} — {COMPANY_DATA.location}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-300 text-xs text-slate-700 shadow-sm font-medium">
              <span>Interactive Google Map Embed Available Upon Final Deployment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Disclaimer Banner */}
      <DisclaimerBanner />
    </div>
  );
}
