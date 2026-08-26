"use client";

import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CORE_GOAL, CORE_VALUES, MISSION, VISION } from "@/lib/site";
import { images } from "@/lib/images";

const missionStatements = [
  { title: "Our Mission", content: MISSION },
  { title: "Our Vision", content: VISION },
  { title: "Our Core Goal", content: CORE_GOAL },
  {
    title: "Our Core Values",
    content: CORE_VALUES.map((value) => `${value.title} — ${value.summary}`).join(" "),
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
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % missionStatements.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + missionStatements.length) % missionStatements.length,
    );
  };

  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20 xl:py-28 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-20 items-start">
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="section-label text-navy/70 text-sm sm:text-base">Who We Are</div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              <span className="text-orange-500 italic block sm:inline">Protecting People.</span>
              <span className="text-navy block sm:inline sm:ml-2">Strengthening Organisations.</span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              NewMaster Health and Safety provides integrated workplace health, safety,
              environmental, training, compliance and wellbeing solutions. We serve businesses
              and workers across Uganda and the wider African market with practical, evidence-based
              support that helps organisations protect people and remain productive.
            </p>

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
                aria-label="Learn more about NewMaster Health and Safety"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-end relative">
            <svg
              width="200"
              height="300"
              viewBox="0 0 200 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-90"
              aria-hidden
            >
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
            </svg>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group w-full">
            <Image
              src={images.aboutTeam}
              alt="African professionals collaborating on workplace health and safety"
              fill
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              priority={!isMobile}
            />
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-orange-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl">
              <div className="text-lg sm:text-xl font-bold">Uganda & Africa</div>
              <div className="text-xs sm:text-sm font-medium">Workplace health</div>
              <div className="text-[10px] sm:text-xs opacity-90">and safety support</div>
            </div>
          </div>

          <div className="bg-navy rounded-2xl p-6 sm:p-8 lg:p-10 text-white diagonal-pattern relative">
            <div className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/10 text-6xl sm:text-7xl lg:text-8xl font-serif">
              &ldquo;
            </div>

            <div className="min-h-[180px] sm:min-h-[200px] relative z-10">
              <p className="text-base sm:text-lg leading-relaxed opacity-90">
                {missionStatements[currentSlide].content}
              </p>
            </div>

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
    </section>
  );
}
