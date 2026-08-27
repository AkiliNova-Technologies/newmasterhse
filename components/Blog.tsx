"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { newsArticles } from "@/lib/news";

export default function Blog() {
  const posts = newsArticles.slice(0, 3);

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 dotted-pattern opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-14 lg:mb-16">
          <div className="space-y-3 sm:space-y-4 w-full sm:w-auto">
            <div className="section-label text-navy/70 text-sm sm:text-base">
              News & Insights
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              <span className="text-navy block sm:inline">Workplace Health</span>{" "}
              <span className="text-orange-500 italic block sm:inline">
                & Safety News
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 self-start sm:self-auto">
            <Link
              href="/news"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              View All News
            </Link>
            <Link
              href="/news"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-navy rounded-full flex items-center justify-center text-white hover:bg-navy-light transition-colors flex-shrink-0"
              aria-label="View all news"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative w-full h-48 sm:h-52 overflow-hidden flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-navy text-white text-[10px] sm:text-xs font-semibold rounded-full inline-block">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-navy mb-2 sm:mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <Link
                  href={`/news/${post.slug}`}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-orange-500 font-semibold hover:gap-3 transition-all py-2 text-sm sm:text-base"
                >
                  Read More
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </div>
              <div className="h-1 bg-transparent group-hover:bg-orange-500 transition-colors w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
