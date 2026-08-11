"use client";

import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const missionStatements = [
  {
    title: "Our Mission",
    content:
      "To protect workers, strengthen organizations, and promote sustainable productivity by delivering evidence-based occupational health, safety, environmental, and wellbeing solutions through expert medical services, training, compliance support, and innovative technologies.",
  },
  {
    title: "Our Vision",
    content:
      "To be Africa's leading provider of innovative occupational health, safety, and wellbeing solutions — enabling people to work safely, remain healthy, and perform at their best.",
  },
  {
    title: "Our Core Values",
    content:
      "Integrity, Safety First, Professional Excellence, Innovation, Respect, Collaboration, and Continuous Improvement. We do what is right, prioritize health and safety in every decision, and continuously seek better ways to protect people and strengthen organizations.",
  },
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % missionStatements.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + missionStatements.length) % missionStatements.length
    );
  };

  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20 xl:py-28 overflow-hidden">
      {/* Top Navy Bar with Diagonal Pattern - Hidden on mobile due to spacing issues, preserved desktop */}
      {/* <div className="absolute top-0 left-0 right-0 h-20 bg-navy diagonal-pattern" /> */}

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {/* Section Label */}
            <div className="section-label text-navy/70 text-sm sm:text-base">Who We Are</div>

            {/* Heading - Responsive text sizes */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              <span className="text-orange-500 italic block sm:inline">Protecting People.</span>
              <span className="text-navy block sm:inline sm:ml-2">Strengthening Organizations.</span>
            </h2>

            {/* Description - Responsive text */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              NewMaster Occupational Health & Safety provides integrated occupational health, safety, 
              environmental, and workplace wellbeing solutions. Our approach combines professional 
              expertise, evidence-based methods, practical training, medical services, and innovative 
              technologies to help organizations create safer, healthier, and more productive working environments.
            </p>

            {/* CTA Buttons - Mobile optimized */}
            <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base"
              >
                Learn More About Us
              </Link>
              <Link
                href="/about"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-navy rounded-full flex items-center justify-center text-white hover:bg-navy-light transition-colors"
                aria-label="Learn more about NewMaster"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>

          {/* Right Content - Decorative Element - Hidden on mobile, preserved desktop */}
          <div className="hidden lg:flex justify-end relative">
            {/* Abstract Compass/Target Decoration - represents direction & strategy */}
            <svg
              width="200"
              height="300"
              viewBox="0 0 200 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-90"
            >
              {/* SVG content preserved exactly as is */}
              <rect x="98" y="0" width="4" height="100" fill="#1a2b4a" />
              <circle cx="100" cy="160" r="55" stroke="#1a2b4a" strokeWidth="4" fill="none" />
              <circle cx="100" cy="160" r="40" stroke="#1a2b4a" strokeWidth="2" fill="none" opacity="0.4" />
              <path d="M100 105 L108 130 L100 125 L92 130 Z" fill="#f97316" />
              <path d="M100 215 L108 190 L100 195 L92 190 Z" fill="#1a2b4a" />
              <path d="M45 160 L70 152 L65 160 L70 168 Z" fill="#1a2b4a" opacity="0.6" />
              <path d="M155 160 L130 152 L135 160 L130 168 Z" fill="#1a2b4a" opacity="0.6" />
              <circle cx="100" cy="160" r="8" fill="#f97316" />
              <circle cx="100" cy="160" r="4" fill="white" />
              <circle cx="100" cy="250" r="12" fill="#1a2b4a" opacity="0.2" />
              <circle cx="100" cy="250" r="6" fill="#f97316" />
              <circle cx="60" cy="100" r="4" fill="#f97316" opacity="0.5" />
              <circle cx="150" cy="220" r="3" fill="#1a2b4a" opacity="0.3" />
              <text x="40" y="140" fill="#f97316" fontSize="16" opacity="0.7">✦</text>
              <text x="155" y="120" fill="#1a2b4a" fontSize="12" opacity="0.4">✦</text>
            </svg>
          </div>
        </div>

        {/* Cards Section - Stack on mobile, grid on desktop */}
        <div className="mt-12 sm:mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
          {/* Image Card - Full width on mobile */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group w-full">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="NewMaster occupational health and safety professionals"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              priority={!isMobile}
              loading={isMobile ? "lazy" : "eager"}
            />
            {/* Experience Badge - Responsive positioning and sizing */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-orange-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl">
              <div className="text-2xl sm:text-3xl font-bold">20+</div>
              <div className="text-xs sm:text-sm font-medium">Organizations</div>
              <div className="text-[10px] sm:text-xs opacity-90">Supported</div>
            </div>
          </div>

          {/* Mission Slider Card - Full width on mobile */}
          <div className="bg-navy rounded-2xl p-6 sm:p-8 lg:p-10 text-white diagonal-pattern relative">
            {/* Quote Mark Decoration - Responsive sizing */}
            <div className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/10 text-6xl sm:text-7xl lg:text-8xl font-serif">
              &ldquo;
            </div>
            
            {/* Content with responsive min-height */}
            <div className="min-h-[180px] sm:min-h-[200px] relative z-10">
              <p className="text-base sm:text-lg leading-relaxed opacity-90">
                {missionStatements[currentSlide].content}
              </p>
            </div>

            {/* Slider Controls - Mobile optimized */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/20 gap-4 sm:gap-0">
              <div className="text-orange-500 font-semibold text-base sm:text-lg order-2 sm:order-1">
                {missionStatements[currentSlide].title}
              </div>
              <div className="flex items-center gap-3 order-1 sm:order-2">
                <button
                  onClick={prevSlide}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements - Hidden on mobile, preserved desktop */}
      <div className="hidden lg:block absolute left-10 bottom-20">
        <div className="text-orange-500 opacity-40">
          <span className="text-xl">✦</span>
        </div>
      </div>
      <div className="hidden lg:block absolute right-20 top-32">
        <div className="text-navy opacity-20">
          <span className="text-2xl">✦</span>
        </div>
      </div>

      {/* Mobile decorative elements - Subtle, preserves theme */}
      <div className="lg:hidden absolute left-2 bottom-10 opacity-20">
        <div className="text-navy">
          <span className="text-lg">✦</span>
        </div>
      </div>
      <div className="lg:hidden absolute right-2 top-20 opacity-20">
        <div className="text-orange-500">
          <span className="text-lg">✦</span>
        </div>
      </div>
    </section>
  );
}