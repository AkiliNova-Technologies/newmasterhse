"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

interface RelatedStudy {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export default function RelatedCaseStudies({ studies }: { studies: RelatedStudy[] }) {
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
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Responsive */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-3 sm:mb-4 leading-tight">
            Related{" "}
            <span className="text-orange-500 italic block sm:inline">
              Case Studies
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base px-2">
            Explore how we have helped organizations build safer, healthier, and more productive workplaces
          </p>
        </div>

        {/* Studies Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
          {studies.map((study, index) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col"
            >
              {/* Image Container - Responsive height */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden flex-shrink-0">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={index > 0 ? "lazy" : "eager"}
                />
                {/* Category Badge - Responsive */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/90 backdrop-blur-sm rounded-full text-navy text-xs sm:text-sm font-medium inline-block">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content - Responsive padding */}
              <div className="p-5 sm:p-6 lg:p-8 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 sm:mb-3 group-hover:text-orange-500 transition-colors leading-tight">
                  {study.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-4 line-clamp-2 sm:line-clamp-2 flex-grow">
                  {study.description}
                </p>
                
                {/* View Link - Responsive touch target */}
                <span className="inline-flex items-center gap-1.5 sm:gap-2 text-orange-500 font-semibold group-hover:gap-3 transition-all py-2 text-sm sm:text-base mt-auto">
                  View Case Study
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Link - If more studies exist */}
        {isMobile && studies.length >= 2 && (
          <div className="flex justify-center mt-8">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-colors text-sm w-full max-w-xs"
            >
              View All Case Studies
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