import { Star, Quote } from "lucide-react";
import { TestimonialItem } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-amber-400 shadow-sm hover:shadow-lg transition-all duration-300 relative">
      <div>
        {/* Header: Stars + Category Pill */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < testimonial.rating
                    ? "fill-amber-400 text-amber-400"
                    : "fill-slate-200 text-slate-200"
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
            {testimonial.category} Research
          </span>
        </div>

        {/* Quote Title */}
        <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
          &ldquo;{testimonial.quoteTitle}&rdquo;
        </h4>

        {/* Review Content */}
        <p className="text-sm text-slate-600 leading-relaxed italic mb-6">
          &ldquo;{testimonial.reviewText}&rdquo;
        </p>
      </div>

      {/* Author Details with Editable Sample Avatar */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div className="w-10 h-10 rounded-full bg-[#0A192F] text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
          {testimonial.initials}
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-slate-900 truncate">
            {testimonial.author}
          </div>
          <div className="text-xs text-slate-500 truncate">
            {testimonial.role} • {testimonial.location}
          </div>
        </div>
      </div>
    </div>
  );
}
