"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "General Research Inquiry",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in your Name, Email, and Message.");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Simulate reliable form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData(initialForm);
    } catch {
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please reach out via email or phone directly.");
    }
  };

  return (
    <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/90 shadow-lg">
      <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
        Send Us a Message
      </h3>
      <p className="text-sm text-slate-600 mb-6 leading-relaxed">
        Have questions regarding our equity, index, or commodity research services? Fill out the form below and our team will get back to you promptly.
      </p>

      {status === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm">Message Received Successfully!</h4>
            <p className="text-xs text-emerald-800 mt-1">
              Thank you for reaching out to Equity & Commodity Market Research. An analyst or client representative will respond to your query within 1 business day.
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm">Action Required</h4>
            <p className="text-xs text-red-800 mt-1">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ramesh Sharma"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="ramesh@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
            />
          </div>

          {/* Company / Organization */}
          <div>
            <label htmlFor="company" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Company / Individual
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Individual Investor / Enterprise"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Subject / Area of Interest
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors bg-white"
          >
            <option value="General Research Inquiry">General Research Inquiry</option>
            <option value="Equity Market Research">Equity Market Research</option>
            <option value="Index Research (Nifty/Bank Nifty)">Index Research (Nifty / Bank Nifty)</option>
            <option value="Commodity Research (MCX Gold/Silver)">Commodity Research (MCX Gold / Silver)</option>
            <option value="Technical Analysis Briefs">Technical Analysis Briefs</option>
            <option value="Custom Research Mandate">Custom Research Mandate</option>
            <option value="Subscription Plans">Subscription Plans</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Message / Specific Questions <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please detail your questions or the research requirements you would like to discuss..."
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
          />
        </div>

        {/* Non-Advisory Acknowledgement Checkbox */}
        <div className="flex items-start gap-2.5 pt-1">
          <input
            type="checkbox"
            id="disclaimerAgree"
            required
            className="mt-1 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
          />
          <label htmlFor="disclaimerAgree" className="text-xs text-slate-500 leading-snug">
            I understand that Equity & Commodity Market Research provides research and educational analysis only and does not offer guaranteed returns, investment advisory, or stock tips.
          </label>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm text-[#0A192F] bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-md shadow-amber-500/20 disabled:opacity-50 transition-all duration-200"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
