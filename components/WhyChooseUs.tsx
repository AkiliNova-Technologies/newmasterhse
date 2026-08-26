"use client";

import Link from "next/link";
import { ArrowRight, Puzzle, Users, Clock, TrendingUp } from "lucide-react";
import Image from "next/image";
import { images } from "@/lib/images";

const features = [
  {
    icon: Puzzle,
    title: "Integrated health and safety expertise",
    description:
      "Occupational health, safety, environmental consulting, training and wellbeing support sit together so organisations are not left stitching services together.",
  },
  {
    icon: Users,
    title: "Practical workplace solutions",
    description:
      "Recommendations are designed for real sites, shifts and operating constraints — not generic templates that stay on paper.",
  },
  {
    icon: TrendingUp,
    title: "Evidence-based approach",
    description:
      "Assessments, medical programmes and training are informed by workplace risk, professional judgement and applicable good practice.",
  },
  {
    icon: Clock,
    title: "Local understanding, wider standards",
    description:
      "We work with Ugandan and African workplace realities while remaining aware of internationally recognised health and safety practice.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 dotted-pattern opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-14 lg:mb-16">
          <div className="space-y-3 sm:space-y-4">
            <div className="section-label text-navy/70 text-sm sm:text-base">
              Why Work With Us
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              <span className="text-navy block sm:inline">More Than</span>
              <span className="text-orange-500 italic block sm:inline sm:ml-2">
                Compliance
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 self-start sm:self-auto">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              Why NewMaster
            </Link>
            <Link
              href="/about"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-navy rounded-full flex items-center justify-center text-white hover:bg-navy-light transition-colors flex-shrink-0"
              aria-label="Learn more about working with NewMaster"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="w-full order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full">
              <Image
                src={images.whyChooseUs}
                alt="African professionals collaborating in a workplace setting"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-navy rounded-2xl p-6 sm:p-8 lg:p-10 diagonal-pattern w-full order-1 lg:order-2">
            <div className="space-y-5 sm:space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy-light rounded-full flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-orange-500 transition-colors">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-orange-500 transition-colors" />
                  </div>
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
    </section>
  );
}
