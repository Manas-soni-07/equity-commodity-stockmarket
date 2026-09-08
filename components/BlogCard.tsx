import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blogs";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 hover:border-amber-400/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div>
        {/* Featured Image */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
          <Image
            src={post.imageUrl}
            alt={post.imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Category Pill Overlay */}
          <div className="absolute top-3.5 left-3.5">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#0A192F]/85 text-amber-300 backdrop-blur-sm border border-slate-700/60 shadow-sm">
              {post.category}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7">
          {/* Date & Read time */}
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.readTime}</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0A192F] transition-colors mb-2.5 line-clamp-2 leading-snug">
            <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-2">
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-slate-100">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A192F] group-hover:text-amber-600 transition-colors"
        >
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
