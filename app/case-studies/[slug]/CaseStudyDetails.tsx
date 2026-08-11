"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Briefcase,
  Clock,
  CheckCircle2,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";

interface Result {
  metric: string;
  label: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

interface Study {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  location: string;
  industry: string;
  duration: string;
  year: string;
  category: string;
  client: string;
  challenge: string;
  approach: string[];
  solution: string;
  results: Result[];
  testimonial: Testimonial;
  relatedServices: string[];
}

export default function CaseStudyDetails({ study }: { study: Study }) {
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
    <>
      {/* Hero Section - Responsive */}
      <section className="relative bg-navy pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Image with Overlay - Preserved */}
        <div className="absolute inset-0">
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* All 4 overlay layers preserved exactly */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/85" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 dotted-pattern opacity-30 mix-blend-overlay" />
          <div className="absolute inset-x-0 bottom-0 h-32 sm:h-48 lg:h-64 bg-gradient-to-t from-navy/90 to-transparent" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link - Responsive */}
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-white hover:text-white transition-colors mb-6 sm:mb-8 group text-sm sm:text-base"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Category Badge - Responsive */}
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500 text-white text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
                {study.category}
              </div>

              {/* Title - Responsive */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                {study.title}
              </h1>

              {/* Subtitle - Responsive */}
              <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                {study.subtitle}
              </p>

              {/* Key Info Grid - Responsive */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <div className="text-white/50 text-[10px] sm:text-xs mb-0.5 sm:mb-1">Client</div>
                  <div className="text-white font-semibold text-sm sm:text-base truncate">
                    {study.client}
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <div className="text-white/50 text-[10px] sm:text-xs mb-0.5 sm:mb-1">Location</div>
                  <div className="text-white font-semibold text-sm sm:text-base truncate">
                    {study.location}
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <div className="text-white/50 text-[10px] sm:text-xs mb-0.5 sm:mb-1">Duration</div>
                  <div className="text-white font-semibold text-sm sm:text-base">
                    {study.duration}
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <div className="text-white/50 text-[10px] sm:text-xs mb-0.5 sm:mb-1">Year</div>
                  <div className="text-white font-semibold text-sm sm:text-base">
                    {study.year}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Responsive */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-10 lg:space-y-12 order-2 lg:order-1">
              {/* Challenge */}
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </span>
                  The Challenge
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Approach */}
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </span>
                  Our Approach
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {study.approach.map((step, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-orange-600 text-[10px] sm:text-xs font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base flex-1">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </span>
                  The Solution
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {study.solution}
                </p>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </span>
                  Results Achieved
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {study.results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-5 sm:p-6 hover:bg-orange-50 transition-colors"
                    >
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 mb-1 sm:mb-2">
                        {result.metric}
                      </div>
                      <div className="text-sm sm:text-base text-navy font-medium">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1 space-y-6 lg:space-y-8 order-1 lg:order-2">
              {/* Project Details Card - Responsive */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-navy mb-4 sm:mb-6">
                  Project Details
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm text-gray-500">Industry</div>
                      <div className="text-sm sm:text-base font-medium text-navy break-words">
                        {study.industry}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm text-gray-500">Location</div>
                      <div className="text-sm sm:text-base font-medium text-navy break-words">
                        {study.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm text-gray-500">Duration</div>
                      <div className="text-sm sm:text-base font-medium text-navy">
                        {study.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm text-gray-500">Year</div>
                      <div className="text-sm sm:text-base font-medium text-navy">
                        {study.year}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Card - Responsive */}
              <div className="bg-navy rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white/10 text-6xl sm:text-8xl font-serif">
                  &ldquo;
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 ring-orange-500 flex-shrink-0">
                      <Image
                        src={study.testimonial.image}
                        alt={study.testimonial.author}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 48px, 64px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm sm:text-base font-bold text-white truncate">
                        {study.testimonial.author}
                      </div>
                      <div className="text-xs sm:text-sm text-white/60 truncate">
                        {study.testimonial.role}
                      </div>
                      <div className="text-[10px] sm:text-xs text-white/40 truncate">
                        {study.testimonial.company}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm sm:text-base italic leading-relaxed">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Related Services - Responsive */}
              <div className="bg-orange-50 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-navy mb-3 sm:mb-4">
                  Related Services
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {study.relatedServices.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services#${service.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-white rounded-xl hover:bg-orange-500 hover:text-white transition-colors group"
                    >
                      <span className="text-sm sm:text-base text-navy group-hover:text-white font-medium truncate pr-2">
                        {service}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 group-hover:text-white flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Card - Responsive */}
              <div className="bg-gradient-to-br from-navy to-navy/90 rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-tight">
                  Ready to strengthen your workplace?
                </h3>
                <p className="text-white/70 text-xs sm:text-sm mb-5 sm:mb-6">
                  Let&apos;s discuss how NewMaster can help your organization build a safer, healthier, and more productive working environment.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors w-full text-sm sm:text-base"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Decorative Elements */}
      {isMobile && (
        <>
          <div className="absolute left-0 top-1/3 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl -z-10" />
          <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-navy/5 rounded-full blur-2xl -z-10" />
        </>
      )}
    </>
  );
}