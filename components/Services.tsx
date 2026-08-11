"use client";

import Link from "next/link";
import { ArrowRight, Heart, Shield, Leaf } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const services = [
  {
    icon: Heart,
    title: "Occupational Health",
    description:
      "Protect employee health through medical examinations, health surveillance, fitness-to-work assessments, wellness programs, and comprehensive workplace health services.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
  },
  {
    icon: Shield,
    title: "Workplace Safety",
    description:
      "Identify hazards, assess risks, investigate incidents, strengthen safety management systems, and build a culture where safety is central to every operation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
  },
  {
    icon: Leaf,
    title: "Environmental Health & Industrial Hygiene",
    description:
      "Assess workplace exposures and environmental conditions including noise, dust, air quality, heat stress, chemicals, lighting, ventilation, and sanitation.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
  },
];

export default function Services() {
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
    <section className="relative bg-gray-light py-16 sm:py-16 lg:py-28 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Responsive */}
        <div className="text-left mx-auto mb-12 sm:mb-14 lg:mb-16">
          {/* Section Label */}
          <div className="flex items-center justify-start gap-2 sm:gap-3 text-navy/70 text-xs sm:text-sm font-medium tracking-wide mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
            Our Expertise
            {/* <span className="w-6 sm:w-8 h-0.5 bg-orange-500" /> */}
          </div>

          {/* Heading - Responsive typography */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            <span className="text-navy block sm:inline">Integrated Solutions for</span>
            <span className="text-orange-500 italic block sm:inline sm:ml-2">
              Safer Workplaces
            </span>
          </h2>
        </div>

        {/* Services Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group h-full flex flex-col"
            >
              {/* Image Container - Responsive height */}
              <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading={index > 0 ? "lazy" : "eager"}
                />
                
                {/* Icon Badge - Responsive sizing and positioning */}
                <div className="absolute bottom-8 sm:bottom-10 left-4 sm:left-6 translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-navy rounded-full flex items-center justify-center text-white shadow-xl">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
              </div>

              {/* Content - Responsive padding */}
              <div className="p-5 sm:p-6 pt-10 sm:pt-12 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 sm:mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-3 flex-grow">
                  {service.description}
                </p>
                
                {/* Learn More Link - Responsive touch target */}
                <Link
                  href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "")}`}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-orange-500 font-semibold hover:gap-3 transition-all py-2 text-sm sm:text-base mt-auto"
                >
                  Explore {service.title.includes("&") ? "Services" : service.title.split(" ").pop()}
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </div>

              {/* Bottom Border Accent - Preserved */}
              <div
                className={`h-1 absolute bottom-0 w-full ${
                  index === 0 
                    ? "bg-transparent group-hover:bg-orange-500" 
                    : "bg-transparent group-hover:bg-orange-500"
                } transition-colors`}
              />
            </div>
          ))}
        </div>

        {/* View All Button - Responsive */}
        <div className="text-center mt-10 sm:mt-12">
          <div className="inline-flex flex-row sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/services"
              className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base"
            >
              View All Services
            </Link>
            <Link
              href="/services"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-navy rounded-full flex items-center justify-center text-white hover:bg-navy-light transition-colors"
              aria-label="View all services"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Decorative Elements - Subtle, preserves theme */}
      <div className="sm:hidden absolute left-0 top-1/3 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl -z-10" />
      <div className="sm:hidden absolute right-0 bottom-1/4 w-32 h-32 bg-navy/5 rounded-full blur-2xl -z-10" />
    </section>
  );
}