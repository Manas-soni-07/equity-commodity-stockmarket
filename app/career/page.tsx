import { Metadata } from "next";
import { CAREER_POSITIONS } from "@/data/careers";
import ResumeForm from "@/components/ResumeForm";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import {
  Briefcase,
  CheckCircle2,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Equity & Commodity Market Research",
  description:
    "Build your career with Equity & Commodity Market Research. Explore open positions and internship opportunities in Indian financial market analysis.",
};

export default function CareerPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0A192F] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Briefcase className="w-4 h-4 text-amber-400" />
              <span>Join Our Research Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Build Your Career With Us
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mt-4 leading-relaxed font-normal">
              We are always interested in meeting people who are passionate about financial markets, research, technology and business.
            </p>
          </div>
        </div>
      </section>

      {/* Culture / Why Work With Us Section */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Meritocracy & Rigor</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Work alongside passionate analysts who value sound economic logic, verifiable data, and disciplined chart reading over hype.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Continuous Learning</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Gain hands-on exposure to corporate earnings, macroeconomic indicators, derivatives data (OI/PCR), and commodity cycles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Modern Work Culture</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Collaborative environments with hybrid flexibility, realistic targets, and deep respect for ethical compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Grid */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
              Current Openings
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
              Explore Available Roles
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Browse current open positions and upcoming openings across our research and outreach departments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CAREER_POSITIONS.map((pos) => {
              const isOpen = pos.status === "Open Position";
              return (
                <div
                  key={pos.id}
                  className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Header with status badge */}
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                          isOpen
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-slate-100 text-slate-600 border border-slate-200"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isOpen ? "bg-emerald-500 animate-pulse" : "bg-slate-400"
                          }`}
                        />
                        {pos.status}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        {pos.type}
                      </span>
                    </div>

                    {/* Title & Department */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {pos.title}
                      </h3>
                      <p className="text-xs text-amber-700 font-semibold mt-0.5">
                        {pos.department}
                      </p>
                    </div>

                    {/* Metadata pills */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {pos.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                        {pos.experienceRequired}
                      </span>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                      {pos.shortDescription}
                    </p>

                    {/* Key Responsibilities */}
                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-2">
                        Key Responsibilities:
                      </span>
                      <ul className="space-y-1.5">
                        {pos.responsibilities.slice(0, 3).map((resp, idx) => (
                          <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Apply prompt */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <a
                      href="#apply-form"
                      className={`inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-colors ${
                        isOpen
                          ? "bg-[#0A192F] hover:bg-slate-800 text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      <span>{isOpen ? "Apply for this Role" : "Express Interest for Future Openings"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resume Application Form Section */}
      <section id="apply-form" className="py-16 sm:py-20 bg-white scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResumeForm />
        </div>
      </section>

      {/* Compliance Disclaimer Banner */}
      <DisclaimerBanner />
    </div>
  );
}
