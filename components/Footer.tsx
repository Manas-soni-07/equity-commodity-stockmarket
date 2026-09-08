import Link from "next/link";
import Image from "next/image";
import {
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

// Clean inline SVGs for social platforms
const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.07v8.37h2.78Z" />
  </svg>
);

const XIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81a2.5 2.5 0 0 0 1.76 1.77c1.56.42 7.82.42 7.82.42s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.75 15.02V8.98L15 12l-5.25 3.02z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#061121] text-slate-300 border-t border-slate-800">
      {/* Top Value Banner */}
      <div className="border-b border-slate-800/80 bg-[#0A192F]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Indian Market Focus
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Dedicated analysis of NSE, BSE and MCX commodity benchmarks.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Pure Research & Education
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Factual, transparent and disciplined analysis with zero return promises.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-400/10 border border-blue-400/30 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Timely Market Insights
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Morning briefing before 9:15 AM IST and daily post-market wrap-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col (2 cols wide on large screen) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-amber-500/40 shadow-md bg-[#FDFBF7] shrink-0">
                <Image
                  src="/logo/yogijilogo.jpeg"
                  alt="Equity & Commodity Market Research Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-white block leading-tight">
                  Equity & Commodity
                </span>
                <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
                  Market Research
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_DATA.description}
            </p>
            <p className="text-xs text-slate-400 italic">
              Tagline: &ldquo;{COMPANY_DATA.tagline}&rdquo;
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Connect With Our Research Desk
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_DATA.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-slate-800 hover:bg-amber-500 hover:text-[#0A192F] text-slate-300 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href={COMPANY_DATA.socialLinks.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-slate-800 hover:bg-amber-500 hover:text-[#0A192F] text-slate-300 flex items-center justify-center transition-colors"
                  aria-label="X (formerly Twitter) Profile"
                >
                  <XIcon />
                </a>
                <a
                  href={COMPANY_DATA.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-slate-800 hover:bg-amber-500 hover:text-[#0A192F] text-slate-300 flex items-center justify-center transition-colors"
                  aria-label="Facebook Page"
                >
                  <FacebookIcon />
                </a>
                <a
                  href={COMPANY_DATA.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-slate-800 hover:bg-amber-500 hover:text-[#0A192F] text-slate-300 flex items-center justify-center transition-colors"
                  aria-label="YouTube Channel"
                >
                  <YoutubeIcon />
                </a>
                <a
                  href={COMPANY_DATA.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-slate-800 hover:bg-amber-500 hover:text-[#0A192F] text-slate-300 flex items-center justify-center transition-colors"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services#equity-research"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-400" />
                  <span>Equity Research</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#index-research"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-400" />
                  <span>Index Research</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#commodity-research"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-400" />
                  <span>Commodity Research</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#technical-analysis"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-400" />
                  <span>Technical Analysis</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#market-updates"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-400" />
                  <span>Market Updates</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#custom-research"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-400" />
                  <span>Custom Research</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Career Opportunities
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Market Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Contact Desk
            </h3>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="hover:text-amber-400 transition-colors break-all"
                >
                  {COMPANY_DATA.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_DATA.phone}`}
                  className="hover:text-amber-400 transition-colors"
                >
                  {COMPANY_DATA.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.operatingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-md text-xs font-semibold text-[#0A192F] bg-amber-400 hover:bg-amber-500 transition-colors"
              >
                Send Direct Inquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Financial Compliance & Risk Disclaimer Banner */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Regulatory & Market Risk Disclaimer
                </h5>
                <p className="text-[12px] text-slate-400 leading-relaxed">
                  {COMPANY_DATA.disclaimerShort}
                </p>
                <div className="text-[11px] text-slate-400 pt-1">
                  For complete details on non-advisory terms, risk disclosures, and research guidelines, please read our{" "}
                  <Link
                    href="/disclaimer"
                    className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
                  >
                    Full Disclaimer
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/terms"
                    className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
                  >
                    Terms of Service
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Equity & Commodity Market Research. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-amber-400 transition-colors underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-amber-400 transition-colors underline-offset-2 hover:underline"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-amber-400 transition-colors underline-offset-2 hover:underline"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
