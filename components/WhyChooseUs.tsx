"use client";

import Link from "next/link";
import { ArrowRight, Play, Puzzle, Users, Clock, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const features = [
  {
    icon: Puzzle,
    title: "Integrated Expertise",
    description:
      "We bring occupational health, safety, environmental, wellbeing, training, consulting, compliance, and technology services together under one roof.",
  },
  {
    icon: Users,
    title: "Practical Solutions",
    description:
      "Our objective is not simply to identify problems. We help organizations understand risks and implement practical, actionable improvements.",
  },
  {
    icon: Clock,
    title: "Long-Term Partnership",
    description:
      "Workplace safety is an ongoing process. We support organizations beyond individual audits, inspections, or training sessions.",
  },
  {
    icon: TrendingUp,
    title: "Evidence-Based Approach",
    description:
      "Our services are designed around professional knowledge, workplace data, assessment findings, and measurable outcomes.",
  },
];

export default function WhyChooseUs() {
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

      {/* Dotted Pattern Background - Preserved */}
      <div className="absolute inset-0 dotted-pattern opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Responsive */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-14 lg:mb-16">
          <div className="space-y-3 sm:space-y-4">
            {/* Section Label */}
            <div className="section-label text-navy/70 text-sm sm:text-base">
              Why Work With Us
            </div>

            {/* Heading - Responsive typography */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              <span className="text-navy block sm:inline">More Than</span>
              <span className="text-orange-500 italic block sm:inline sm:ml-2">
                Compliance
              </span>
            </h2>
          </div>

          {/* CTA Buttons - Mobile optimized */}
          <div className="flex items-center gap-3 sm:gap-4 self-start sm:self-auto">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              Learn More
            </Link>
            <Link
              href="/about"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-navy rounded-full flex items-center justify-center text-white hover:bg-navy-light transition-colors flex-shrink-0"
              aria-label="Learn more about working with NewMaster"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>

          {/* Decorative Hook - Preserved hidden */}
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

        {/* Content Grid - Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Video/Image Section - Full width on mobile */}
          <div className="w-full order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop"
                alt="NewMaster occupational health and safety team"
                fill
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Play Button - Responsive sizing */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-xl group"
                  aria-label="Play video"
                >
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-navy ml-0.5 sm:ml-1 group-hover:text-orange-500 transition-colors" fill="currentColor" />
                </button>
              </div>
            </div>
          </div>

          {/* Features List - Full width on mobile */}
          <div className="bg-navy rounded-2xl p-6 sm:p-8 lg:p-10 diagonal-pattern w-full order-1 lg:order-2">
            <div className="space-y-5 sm:space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 sm:gap-4 group"
                >
                  {/* Icon - Responsive sizing */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy-light rounded-full flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-orange-500 transition-colors">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-orange-500 transition-colors" />
                  </div>

                  {/* Content - Responsive text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-1.5 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Mobile decorative elements - Subtle, preserves theme */}
      <div className="lg:hidden absolute left-0 top-1/3 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl -z-10" />
      <div className="lg:hidden absolute right-0 bottom-1/4 w-32 h-32 bg-navy/5 rounded-full blur-2xl -z-10" />
    </section>
  );
}