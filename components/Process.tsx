"use client";

import Link from "next/link";
import { ArrowRight, ChevronsRight } from "lucide-react";
import { processSteps } from "@/lib/process";

export default function Process() {
  return (
    <section id="approach" className="relative bg-white py-16 sm:py-16 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 dotted-pattern opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-14 lg:mb-16">
          <div className="space-y-3 sm:space-y-4">
            <div className="section-label text-navy/70 text-sm sm:text-base">
              How We Work
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              <span className="text-navy block sm:inline">A Clear Process from</span>{" "}
              <span className="text-orange-500 italic block sm:inline">
                Understanding to Improvement
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 self-start sm:self-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              Request Support
            </Link>
            <Link
              href="/contact"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-navy rounded-full flex items-center justify-center text-white hover:bg-navy-light transition-colors flex-shrink-0"
              aria-label="Request support from NewMaster"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200">
            <div className="absolute top-0 left-0 h-full bg-orange-500" style={{ width: "80%" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-7 lg:gap-6">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative group">
                <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
                  <div
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold ${
                      index === 0
                        ? "bg-navy text-white"
                        : "bg-white text-navy border-2 border-gray-200"
                    } transition-all duration-300 group-hover:scale-105`}
                  >
                    STEP {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <ChevronsRight className="hidden lg:block w-5 h-5 text-orange-500" />
                  )}
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold leading-tight">
                    <span className="text-navy block">{step.title}</span>
                    {step.subtitle ? (
                      <span className="text-orange-500 block">{step.subtitle}</span>
                    ) : null}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
