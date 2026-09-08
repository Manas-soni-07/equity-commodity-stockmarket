import { Star } from "lucide-react";
import { TestimonialItem } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div
      className="h-full w-full flex flex-col justify-between bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-200/90 hover:border-amber-400/90 shadow-xs hover:shadow-md transition-all duration-300 relative select-none group"
      title={`"${testimonial.reviewText}" — ${testimonial.author}`}
    >
      <div>
        {/* Header: Stars + Category Pill */}
        <div className="flex items-center justify-between gap-1.5 mb-2.5 sm:mb-3">
          <div className="flex items-center gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < testimonial.rating
                    ? "fill-amber-400 text-amber-400"
                    : "fill-slate-200 text-slate-200"
                }`}
              />
            ))}
          </div>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-1.5 sm:px-2 py-0.5 rounded">
            {testimonial.category}
          </span>
        </div>

        {/* Quote Title */}
        <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5 leading-snug line-clamp-2 group-hover:text-amber-600 transition-colors">
          &ldquo;{testimonial.quoteTitle}&rdquo;
        </h4>

        {/* Review Content */}
        <p className="text-xs text-slate-600 leading-relaxed italic mb-3 line-clamp-4">
          &ldquo;{testimonial.reviewText}&rdquo;
        </p>
      </div>

      {/* Author Details with Initials Avatar */}
      <div className="flex items-center gap-2.5 pt-3 border-t border-slate-100 mt-auto">
        <div className="w-8 h-8 rounded-full bg-[#0A192F] text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
          {testimonial.initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-semibold text-slate-900 truncate">
            {testimonial.author}
          </div>
          <div className="text-[10px] sm:text-[11px] text-slate-500 truncate">
            {testimonial.role} • {testimonial.location}
          </div>
        </div>
      </div>
    </div>
  );
}

