"use client";

import Link from "next/link";
import { Clock, ShieldCheck, Phone, Mail } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export default function TopBar() {
  return (
    <div className="bg-[#061121] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Market Timings & Non-Advisory Notice */}
        <div className="flex items-center gap-4 divide-x divide-slate-700">
          <div className="flex items-center gap-1.5 font-medium text-slate-200">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>BSE / NSE / MCX Research Desk</span>
          </div>
          <div className="pl-4 flex items-center gap-1 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Market Hours: Mon – Fri 9:15 AM – 3:30 PM IST</span>
          </div>
          <div className="pl-4 flex items-center gap-1 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Independent & Non-Advisory Research</span>
          </div>
        </div>

        {/* Quick Contact Placeholders */}
        <div className="flex items-center gap-4 text-slate-300">
          <a
            href={`mailto:${COMPANY_DATA.email}`}
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            title="Email our research desk"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>{COMPANY_DATA.email.split(" ")[0]}</span>
          </a>
          <span className="text-slate-600">|</span>
          <Link
            href="/disclaimer"
            className="hover:text-amber-400 transition-colors text-slate-400 underline underline-offset-2"
          >
            Compliance Disclaimer
          </Link>
        </div>
      </div>
    </div>
  );
}
