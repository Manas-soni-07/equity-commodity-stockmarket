"use client";

import { useState } from "react";
import { UploadCloud, CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { CAREER_POSITIONS } from "@/data/careers";

export default function ResumeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "Research Analyst — Equity & Indices",
    portfolioUrl: "",
    message: "",
  });
  const [fileName, setFileName] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name and email.");
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "Research Analyst — Equity & Indices",
        portfolioUrl: "",
        message: "",
      });
      setFileName("");
    } catch {
      setStatus("error");
      setErrorMessage("Failed to submit application. Please try again or email careers directly.");
    }
  };

  return (
    <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/90 shadow-lg">
      <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
        Submit Your Profile / Resume
      </h3>
      <p className="text-sm text-slate-600 mb-6 leading-relaxed">
        Passionate about Indian capital markets, financial research, or digital outreach? Apply for an open position or submit your profile for upcoming roles.
      </p>

      {status === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm">Application Submitted!</h4>
            <p className="text-xs text-emerald-800 mt-1">
              Thank you for your interest in Equity & Commodity Market Research. Our talent desk will review your profile against relevant requirements.
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm">Submission Error</h4>
            <p className="text-xs text-red-800 mt-1">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Vikram Singh"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="vikram@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Position of Interest
            </label>
            <select
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white"
            >
              {CAREER_POSITIONS.map((pos) => (
                <option key={pos.id} value={pos.title}>
                  {pos.title} ({pos.status})
                </option>
              ))}
              <option value="General Financial Research Application">General Research Application</option>
            </select>
          </div>
        </div>

        {/* Resume upload */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Attach Resume (PDF / Word)
          </label>
          <div className="border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-xl p-5 text-center transition-colors">
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            <label htmlFor="resume" className="cursor-pointer flex flex-col items-center gap-1.5">
              <UploadCloud className="w-8 h-8 text-amber-500" />
              <span className="text-xs font-semibold text-[#0A192F]">
                {fileName ? fileName : "Click to select or drag and drop your resume file"}
              </span>
              <span className="text-[11px] text-slate-400">PDF, DOC, DOCX up to 5MB</span>
            </label>
          </div>
        </div>

        {/* Portfolio or LinkedIn Link */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            LinkedIn Profile or Portfolio Link
          </label>
          <input
            type="url"
            value={formData.portfolioUrl}
            onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
            placeholder="https://linkedin.com/in/yourprofile"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Brief Introduction / Why Financial Research?
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your background, areas of interest in Indian markets, and relevant experience..."
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm text-[#0A192F] bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-md shadow-amber-500/20 disabled:opacity-50 transition-all duration-200"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Uploading Application...</span>
            </>
          ) : (
            <>
              <span>Send Your Resume</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
