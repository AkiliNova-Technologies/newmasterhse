"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronsRight } from "lucide-react";
import { useState, useEffect } from "react";

const steps = [
  {
    number: "01",
    title: "Understand",
    subtitle: "& Assess",
    description:
      "We begin by understanding your operations, workforce, environment, and existing health and safety systems to identify hazards, risks, and opportunities.",
  },
  {
    number: "02",
    title: "Recommend",
    subtitle: "& Plan",
    description:
      "We develop practical, evidence-based recommendations aligned with identified risks and your organizational priorities.",
  },
  {
    number: "03",
    title: "Implement",
    subtitle: "& Support",
    description:
      "Where requested, we support implementation through training, policy development, medical services, consulting, and technology solutions.",
  },
  {
    number: "04",
    title: "Monitor",
    subtitle: "& Improve",
    description:
      "We help you track performance, review results, identify emerging risks, and continuously strengthen workplace health and safety systems.",
  },
];

export default function Process() {
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
    <section className="relative bg-white py-16 sm:py-16 lg:py-28 overflow-hidden">
      {/* Dotted Pattern Background - Preserved */}
      <div className="absolute inset-0 dotted-pattern opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Responsive */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-14 lg:mb-16">
          <div className="space-y-3 sm:space-y-4">
            {/* Section Label */}
            <div className="section-label text-navy/70 text-sm sm:text-base">
              Our Service Process
            </div>

            {/* Heading - Responsive typography */}
            <h2 className="flex gap-2 text-2xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              <span className="text-navy block sm:inline">From Risk Identification to</span>{" "}
              <span className="text-orange-500 italic block sm:inline">
                Continuous Improvement
              </span>
            </h2>
          </div>

          {/* CTA Buttons - Mobile optimized */}
          <div className="flex items-center gap-3 sm:gap-4 self-start sm:self-auto">
            <Link
              href="/about#approach"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              Learn More
            </Link>
            <Link
              href="/about#approach"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-navy rounded-full flex items-center justify-center text-white hover:bg-navy-light transition-colors flex-shrink-0"
              aria-label="Learn more about our service process"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile, preserved on desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200">
            <div className="absolute top-0 left-0 h-full bg-orange-500" style={{ width: "75%" }} />
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Step Number Badge with responsive sizing */}
                <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
                  <div className={`
                    px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold
                    ${index === 0 
                      ? "bg-navy text-white" 
                      : "bg-white text-navy border-2 border-gray-200"
                    }
                    transition-all duration-300 group-hover:scale-105
                  `}>
                    STEP {step.number}
                  </div>
                  
                  {/* Arrow icon - Hidden on mobile, visible on desktop */}
                  {index < steps.length - 1 && (
                    <ChevronsRight className="hidden lg:block w-5 xl:w-6 h-5 xl:h-6 text-orange-500 animate-pulse" />
                  )}
                </div>

                {/* Content - Responsive spacing */}
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold leading-tight">
                    <span className="text-navy block">{step.title}</span>
                    <span className="text-orange-500 block sm:inline">
                      {step.subtitle}
                    </span>
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile progress indicator - Visual connection between steps */}
                {/* {isMobile && index < steps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    </div>
                  </div>
                )} */}
              </div>
            ))}
          </div>

          {/* Tablet/Desktop vertical progress indicator alternative */}
          {isTablet && (
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2">
                {steps.map((_, index) => (
                  <div 
                    key={index}
                    className={`
                      w-2 h-2 rounded-full transition-all
                      ${index === 0 
                        ? "bg-orange-500 w-4" 
                        : index === 1 
                        ? "bg-orange-400/70" 
                        : index === 2
                        ? "bg-orange-300/50"
                        : "bg-gray-300"
                      }
                    `}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Decorative Image - Preserved but hidden on mobile */}
        {/* <div className="mt-16 flex justify-start">
          <div className="relative w-64 h-48">
            <Image
              src="/images/process-decoration.png"
              alt="Strategy illustration"
              fill
              className="object-contain"
            />
          </div>
        </div> */}

        {/* Mobile CTA - Duplicate for easier access */}
        {isMobile && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/about#approach"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm w-full max-w-xs"
            >
              Learn More About Our Process
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}
      </div>

      {/* Mobile decorative elements - Subtle, preserves theme */}
      <div className="sm:hidden absolute left-0 top-1/3 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl -z-10" />
      <div className="sm:hidden absolute right-0 bottom-1/4 w-32 h-32 bg-navy/5 rounded-full blur-2xl -z-10" />
    </section>
  );
}