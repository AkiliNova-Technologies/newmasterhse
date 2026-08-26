"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { SITE_INTRO } from "@/lib/site";
import { images } from "@/lib/images";

const services = [
  "Occupational Health",
  "Workplace Safety",
  "Environmental Consulting",
  "Training & Certification",
];

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <section className="relative bg-navy overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={images.hero}
          alt="African occupational health professional supporting workers in a workplace setting"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/85" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 dotted-pattern opacity-30 mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-48 lg:h-64 bg-gradient-to-t from-navy/90 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 sm:pt-32 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:items-start justify-between gap-6 lg:gap-8 mb-6 sm:mb-8">
          <div className="max-w-3xl mt-10">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-white/20">
              Workplace Health, Safety, Environment and Training
            </div>

            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-white block">Safer Workplaces.</span>
              <span className="text-orange-400 italic relative inline-block mt-2 sm:mt-0">
                Healthier People. Stronger Organisations.
                <span className="absolute -bottom-2 left-0 w-16 sm:w-20 lg:w-24 h-1 bg-orange-400 rounded-full"></span>
              </span>
            </h1>
            <p className="mt-6 text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
              {SITE_INTRO}
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-8 mb-12 sm:mb-14 lg:mb-16">
          <div className="flex flex-wrap gap-2 sm:gap-3 max-w-xl">
            {services.map((service) => (
              <span
                key={service}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs sm:text-sm font-medium text-white shadow-lg"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-14 lg:mb-16">
          <Link
            href="/services"
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-400 transition-all flex items-center justify-center sm:justify-start gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform text-sm sm:text-base"
          >
            Explore Our Services
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all border border-white/30 text-sm sm:text-base text-center"
          >
            Talk to Our Team
          </Link>
        </div>

        {isMobile && (
          <div className="flex justify-center mt-10 lg:hidden">
            <div className="w-20 h-20 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href="/contact"
                  className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-400 transition-colors shadow-lg"
                  aria-label="Talk to our team"
                >
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <svg className="w-full h-full animate-spin-slow opacity-80" viewBox="0 0 100 100">
                <defs>
                  <path id="circlePathMobile" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text className="text-[10px] fill-white/70 font-medium tracking-widest uppercase">
                  <textPath href="#circlePathMobile">
                    • Get in Touch • Get in Touch •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
