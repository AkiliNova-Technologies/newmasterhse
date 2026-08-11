"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const team = [
  {
    name: "[FULL NAME]",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "[FULL NAME]",
    role: "Medical Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "[FULL NAME]",
    role: "HSE Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

export default function Team() {
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
              Our Leadership
            </div>

            {/* Heading - Responsive typography */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              <span className="text-navy block sm:inline">Meet the Experts</span>
              <span className="text-orange-500 italic block sm:inline sm:ml-2">
                Behind NewMaster
              </span>
            </h2>
          </div>

          {/* CTA Buttons - Mobile optimized */}
          <div className="flex items-center gap-3 sm:gap-4 self-start sm:self-auto">
            <Link
              href="/about#team"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              View All
            </Link>
            <Link
              href="/about#team"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-navy rounded-full flex items-center justify-center text-white hover:bg-navy-light transition-colors flex-shrink-0"
              aria-label="View all team members"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>

          {/* Decorative Hook - Preserved hidden */}
          {/* <div className="hidden xl:block absolute top-0 right-24">
            <div className="w-24 h-40 bg-gradient-to-b from-gray-400 to-gray-500 rounded-lg opacity-50" />
          </div> */}
        </div>

        {/* Team Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {team.map((member, index) => (
            <div
              key={member.name && index}
              className="group relative w-full"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                {/* Image Container - Responsive height */}
                <div className="relative h-72 sm:h-80 overflow-hidden flex-shrink-0">
                  {/* Background Pattern - Preserved */}
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-navy diagonal-pattern" />
                  
                  {/* Member Image */}
                  <div className="absolute inset-0 flex items-end justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading={index > 0 ? "lazy" : "eager"}
                      />
                    </div>
                  </div>
                </div>

                {/* Content - Responsive padding */}
                <div className="p-5 sm:p-6 flex-grow">
                  {/* Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-navy mb-1 leading-tight">
                    {member.name}
                  </h3>
                  
                  {/* Role */}
                  <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-4 leading-relaxed">
                    {member.role}
                  </p>

                  {/* Social Links - Responsive sizing */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <a
                      href={member.socials.facebook}
                      className="w-7 h-7 sm:w-8 sm:h-8 bg-navy rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
                      aria-label="Facebook"
                    >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 36.6 36.6 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                      </svg>
                    </a>
                    <a
                      href={member.socials.twitter}
                      className="w-7 h-7 sm:w-8 sm:h-8 bg-navy rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
                      aria-label="Twitter"
                    >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href={member.socials.linkedin}
                      className="w-7 h-7 sm:w-8 sm:h-8 bg-navy rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Bottom Border Accent - Preserved */}
                <div
                  className={`h-1 ${index === 0 ? "bg-transparent group-hover:bg-orange-500" : "bg-transparent group-hover:bg-orange-500"} transition-colors w-full`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Mobile Decorative Elements - Subtle, preserves theme */}
      <div className="sm:hidden absolute left-0 top-1/3 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl -z-10" />
      <div className="sm:hidden absolute right-0 bottom-1/4 w-32 h-32 bg-navy/5 rounded-full blur-2xl -z-10" />
    </section>
  );
}