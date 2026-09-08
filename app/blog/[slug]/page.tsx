import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOGS_DATA, BlogPost } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  CheckCircle2,
  BookOpen,
  Bookmark,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOGS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOGS_DATA.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Equity & Commodity Market Research",
    };
  }

  return {
    title: `${post.title} | Market Research Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.imageUrl }],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOGS_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOGS_DATA.filter((p) => post.relatedSlugs.includes(p.slug)).slice(0, 3);

  return (
    <div className="bg-white">
      {/* Top Breadcrumbs & Back Bar */}
      <div className="bg-slate-50 border-b border-slate-200 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Insights</span>
          </Link>
          <span className="text-xs font-mono font-medium text-slate-400">
            {post.category} Focus
          </span>
        </div>
      </div>

      {/* Article Header */}
      <header className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {/* Category Badge */}
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200/80">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-500 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-2 text-slate-800 font-medium">
              <div className="w-7 h-7 rounded-full bg-[#0A192F] text-amber-400 flex items-center justify-center font-bold text-xs">
                RD
              </div>
              <span>{post.author}</span>
              <span className="text-slate-400">({post.authorRole})</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative h-72 sm:h-[420px] w-full rounded-2xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200">
          <Image
            src={post.imageUrl}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed text-base sm:text-lg">
          {/* Intro highlight block */}
          <div className="p-6 rounded-2xl bg-amber-50/60 border-l-4 border-amber-500 text-slate-800 text-base sm:text-lg leading-relaxed font-normal">
            <p className="m-0 font-medium">{post.content.intro}</p>
          </div>

          {/* Sections */}
          {post.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-4 pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {section.heading}
              </h2>
              <p className="text-slate-700 leading-relaxed font-normal">
                {section.body}
              </p>

              {section.keyTakeaways && (
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/90 my-4 space-y-2.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-amber-600" />
                    <span>Key Takeaway Points:</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {section.keyTakeaways.map((takeaway, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}

          {/* Conclusion */}
          <div className="pt-6 border-t border-slate-200">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              Summary & Final Thoughts
            </h2>
            <p className="text-slate-700 leading-relaxed font-normal">
              {post.content.conclusion}
            </p>
          </div>

          {/* Educational Disclaimer for Article */}
          <div className="mt-8 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 leading-relaxed">
            <strong>Educational Note:</strong> This article is published exclusively for financial literacy and market educational purposes. It does not constitute investment advice or a solicitation to buy/sell securities or commodities.
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
                Explore Next
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Related Market Insights
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <BlogCard key={related.id} post={related} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection
        title="Looking for Structured Daily Research?"
        subtitle="Explore our comprehensive equity, index, and commodity subscription tiers."
      />

      {/* Compliance Banner */}
      <DisclaimerBanner />
    </div>
  );
}
