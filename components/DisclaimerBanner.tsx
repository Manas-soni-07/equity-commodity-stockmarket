import Link from "next/link";
import { AlertTriangle, ShieldCheck } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

interface DisclaimerBannerProps {
  compact?: boolean;
}

export default function DisclaimerBanner({ compact = false }: DisclaimerBannerProps) {
  if (compact) {
    return (
      <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-4 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">Statutory Financial Notice: </span>
          {COMPANY_DATA.disclaimerShort}{" "}
          <Link href="/disclaimer" className="underline font-semibold text-amber-950 hover:text-amber-800">
            Read full disclaimer
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 bg-slate-100/80 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>Compliance & Market Risk Disclosure</span>
                <span className="text-[11px] font-mono uppercase bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded font-normal">
                  Non-Advisory Mandate
                </span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {COMPANY_DATA.disclaimerShort}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                {COMPANY_DATA.disclaimerFull}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#0A192F]">
                <Link href="/disclaimer" className="text-amber-600 hover:text-amber-700 underline">
                  Full Compliance Disclaimer →
                </Link>
                <Link href="/terms" className="text-slate-600 hover:text-slate-900 underline">
                  Terms of Service →
                </Link>
                <Link href="/privacy-policy" className="text-slate-600 hover:text-slate-900 underline">
                  Privacy Policy →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
