"use client";

import Link from "next/link";
import { MapPin, Target, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const caseStudies = [
  {
    slug: "project-title-one",
    title: "[PROJECT TITLE]",
    description:
      "[Brief description of the project — what challenge the client faced, what NewMaster did, and the outcome achieved.]",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    location: "[LOCATION]",
    industry: "[INDUSTRY]",
    duration: "[DURATION]",
    year: "[YEAR]",
    category: "Workplace Safety",
  },
  {
    slug: "project-title-two",
    title: "[PROJECT TITLE]",
    description:
      "[Brief description of the project — what challenge the client faced, what NewMaster did, and the outcome achieved.]",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    location: "[LOCATION]",
    industry: "[INDUSTRY]",
    duration: "[DURATION]",
    year: "[YEAR]",
    category: "Occupational Health",
  },
];

export default function CaseStudies() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative bg-navy py-16 diagonal-pattern overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 lg:mb-16">
          {/* Section Label - Responsive sizing */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-white/70 text-xs sm:text-sm font-medium tracking-wide mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
            Our Work
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
          </div>

          {/* Heading - Responsive typography */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            <span className="text-white block sm:inline">Client</span>{" "}
            <span className="text-orange-500 italic block sm:inline">
              Success Stories
            </span>
          </h2>
        </div>

        {/* Case Studies */}
        <div className="space-y-6 sm:space-y-7 lg:space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-navy-light/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
              <div
                className={`flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
                {/* Image - Full width on mobile */}
                <div
                  className={`relative w-full h-64 sm:h-72 lg:h-auto min-h-[250px] sm:min-h-[300px] lg:min-h-[300px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}>
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="w-full h-full object-cover absolute inset-0"
                    loading={index > 0 ? "lazy" : "eager"}
                  />
                  {/* Tags - Responsive positioning and sizing */}
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex flex-wrap gap-2 sm:gap-3">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-[10px] sm:text-xs lg:text-sm font-medium border border-white/20">
                      {study.year}
                    </span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-[10px] sm:text-xs lg:text-sm font-medium border border-white/20">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content - Responsive padding */}
                <div
                  className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}>
                  {/* Title - Responsive sizing */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Meta Info - Responsive layout */}
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {/* Location */}
                    <div className="flex items-center gap-2 sm:gap-3 text-white/80 text-sm sm:text-base">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span className="break-words">
                        Location: {study.location}
                      </span>
                    </div>

                    {/* Industry */}
                    <div className="flex items-center gap-2 sm:gap-3 text-white/80 text-sm sm:text-base">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span className="break-words">
                        Industry: {study.industry}
                      </span>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 sm:gap-3 text-white/80 text-sm sm:text-base">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span className="break-words">
                        Duration: {study.duration}
                      </span>
                    </div>
                  </div>

                  {/* Learn More Link - Responsive touch target */}
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-orange-500 font-semibold hover:gap-3 transition-all py-2 text-sm sm:text-base">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Responsive sizing */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base w-full sm:w-auto max-w-xs mx-auto">
            View All Projects
          </Link>
        </div>
      </div>

      {/* Mobile Decorative Elements - Subtle, preserves theme */}
      <div className="lg:hidden absolute left-0 top-1/4 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl" />
      <div className="lg:hidden absolute right-0 bottom-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
    </section>
  );
}
