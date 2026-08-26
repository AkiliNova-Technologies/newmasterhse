"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

interface RelatedInsight {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

export default function RelatedInsights({ insights }: { insights: RelatedInsight[] }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Responsive */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-3 sm:mb-4 leading-tight">
            Related{" "}
            <span className="text-orange-500 italic block sm:inline">
              News
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base px-2">
            Continue exploring our latest thinking on workplace health, safety, and organizational wellbeing
          </p>
        </div>

        {/* Insights Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
          {insights.map((insight, index) => (
            <Link
              key={insight.slug}
              href={`/news/${insight.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col"
            >
              {/* Image Container - Responsive height */}
              <div className="relative w-full h-52 sm:h-56 overflow-hidden flex-shrink-0">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={index > 0 ? "lazy" : "eager"}
                />
                {/* Category Badge - Responsive */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-navy text-white text-[10px] sm:text-xs font-semibold rounded-full inline-block">
                    {insight.category}
                  </span>
                </div>
              </div>

              {/* Content - Responsive padding */}
              <div className="p-5 sm:p-6 flex-grow flex flex-col">
                {/* Date - Responsive */}
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500 text-[10px] sm:text-xs mb-2 sm:mb-3">
                  <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-500 flex-shrink-0" />
                  <span className="truncate">{insight.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 sm:mb-3 group-hover:text-orange-500 transition-colors line-clamp-2 leading-tight">
                  {insight.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-4 line-clamp-2 sm:line-clamp-2 flex-grow">
                  {insight.excerpt}
                </p>

                {/* Read Article Link - Responsive touch target */}
                <span className="inline-flex items-center gap-1.5 sm:gap-2 text-orange-500 font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all py-2 mt-auto">
                  Read Article
                  <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Link - For easy navigation */}
        {isMobile && insights.length >= 2 && (
          <div className="flex justify-center mt-8">
            <Link
              href="/news"
              className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-colors text-sm w-full max-w-xs"
            >
              View All News
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Decorative Elements - Subtle, preserves theme */}
      {isMobile && (
        <>
          <div className="absolute left-0 top-1/3 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl -z-10" />
          <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-navy/5 rounded-full blur-2xl -z-10" />
        </>
      )}
    </section>
  );
}
