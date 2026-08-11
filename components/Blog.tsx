"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

const insights = [
  {
    category: "Workplace Safety",
    date: "[DATE]",
    title: "Building a Proactive Safety Culture: Where to Start",
    excerpt:
      "Practical steps organizations can take to move beyond compliance and build a workplace culture where safety is everyone's responsibility.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    slug: "building-proactive-safety-culture",
  },
  {
    category: "Occupational Health",
    date: "[DATE]",
    title: "Why Health Surveillance Matters: Protecting Your Workforce",
    excerpt:
      "Understanding the importance of systematic health monitoring for employees exposed to occupational hazards and how to implement effective programs.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop",
    slug: "health-surveillance-protecting-workforce",
  },
  {
    category: "Training & Development",
    date: "[DATE]",
    title: "The Role of Training in Strengthening Workplace Safety Competence",
    excerpt:
      "How structured training programs equip employees with the knowledge and practical skills needed to identify hazards and work safely.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    slug: "training-strengthening-safety-competence",
  },
];

export default function Blog() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Dotted Pattern Background - Preserved exactly */}
      <div className="absolute inset-0 dotted-pattern opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile optimized layout */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-14 lg:mb-16">
          <div className="space-y-3 sm:space-y-4 w-full sm:w-auto">
            {/* Section Label - Responsive text */}
            <div className="section-label text-navy/70 text-sm sm:text-base">
              Insights & Resources
            </div>

            {/* Heading - Responsive sizing and wrapping */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              <span className="text-navy block sm:inline">Workplace Health</span>{" "}
              <span className="text-orange-500 italic block sm:inline">
                & Safety Insights
              </span>
            </h2>
          </div>

          {/* CTA Buttons - Mobile optimized */}
          <div className="flex items-center gap-3 sm:gap-4 self-start sm:self-auto">
            <Link
              href="/insights"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              View All Insights
            </Link>
            <Link
              href="/insights"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-navy rounded-full flex items-center justify-center text-white hover:bg-navy-light transition-colors flex-shrink-0"
              aria-label="View all insights"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>

          {/* Decorative Hook - Hidden on mobile, preserved desktop */}
          {/* <div className="hidden xl:block absolute top-0 right-24">
            <Image
              src="/images/hook-decoration.png"
              alt="Decorative element"
              width={120}
              height={200}
              className="object-contain"
            />
          </div> */}
        </div>

        {/* Blog Grid - Responsive grid system */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {insights.map((post, index) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image Container - Responsive height */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading={index > 1 ? "lazy" : "eager"}
                />
                {/* Category Badge - Mobile optimized positioning and sizing */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-navy text-white text-[10px] sm:text-xs font-semibold rounded-full inline-block">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content - Flexible padding */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                {/* Date - Responsive sizing */}
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0" />
                  <span className="truncate">{post.date}</span>
                </div>

                {/* Title - Responsive typography */}
                <h3 className="text-base sm:text-lg font-bold text-navy mb-2 sm:mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt - Responsive text */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-2 flex-grow">
                  {post.excerpt}
                </p>

                {/* Read More Link - Mobile optimized touch target */}
                <Link
                  href={`/insights/${post.slug}`}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-orange-500 font-semibold hover:gap-3 transition-all py-2 sm:py-1 text-sm sm:text-base"
                >
                  Read More
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </div>

              {/* Bottom Border Accent - Preserved exactly */}
              <div
                className={`h-1 ${index === 0 ? "bg-transparent group-hover:bg-orange-500" : "bg-transparent group-hover:bg-orange-500"} transition-colors w-full`}
              />
            </article>
          ))}
        </div>

        {/* Mobile View All Link - For better UX on small screens */}
        <div className="flex sm:hidden justify-center mt-8">
          <Link
            href="/insights"
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm w-full max-w-xs"
          >
            View All Insights
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>

      {/* Mobile decorative elements - Subtle, preserves theme */}
      <div className="sm:hidden absolute left-2 bottom-10 opacity-10">
        <div className="text-navy text-4xl">✦</div>
      </div>
      <div className="sm:hidden absolute right-2 top-40 opacity-10">
        <div className="text-orange-500 text-4xl">✦</div>
      </div>
    </section>
  );
}