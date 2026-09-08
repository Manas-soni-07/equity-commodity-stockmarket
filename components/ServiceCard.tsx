import Link from "next/link";
import {
  TrendingUp,
  BarChart3,
  Coins,
  LineChart,
  BellRing,
  PieChart,
  Target,
  FileSpreadsheet,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { ServiceItem } from "@/data/services";

interface ServiceCardProps {
  service: ServiceItem;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  BarChart3,
  Coins,
  LineChart,
  BellRing,
  PieChart,
  Target,
  FileSpreadsheet,
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.iconName] || TrendingUp;

  return (
    <div className="group flex flex-col justify-between bg-white rounded-xl border border-slate-200/90 hover:border-amber-400/80 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      {/* Accent top line on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Header Icon + Number */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#0A192F]/5 text-[#0A192F] group-hover:bg-[#0A192F] group-hover:text-amber-400 flex items-center justify-center transition-all duration-300 shadow-sm">
            <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
          </div>
          <span className="text-xs font-mono font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
            NSE / BSE / MCX
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0A192F] transition-colors mb-2.5">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5">
          {service.shortDescription}
        </p>

        {/* Bullet points summary */}
        <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
          {service.whatWeCover.slice(0, 3).map((item, idx) => (
            <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Action Link */}
      <div className="pt-2">
        <Link
          href={`/services#${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A192F] group-hover:text-amber-600 transition-colors w-full justify-between py-2 border-t border-slate-100 group/link"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
        </Link>
      </div>
    </div>
  );
}
