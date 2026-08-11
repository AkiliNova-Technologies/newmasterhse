"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface PageBannerProps {
  title: string;
  breadcrumbs: {
    label: string;
    href?: string;
  }[];
}

export default function PageBanner({ title, breadcrumbs }: PageBannerProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-32 pt-24 overflow-hidden">
      {/* Dotted Pattern Background - Preserved */}
      <div className="absolute inset-0 dotted-pattern opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title - Responsive typography */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-4 sm:mb-5 lg:mb-6 leading-tight">
          {title}
        </h1>

        {/* Breadcrumbs - Responsive layout */}
        <nav className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm px-2">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-1.5 sm:gap-2">
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-navy hover:text-orange-500 transition-colors py-1 px-0.5 sm:py-0.5"
                >
                  {isMobile && crumb.label.length > 12 
                    ? crumb.label.substring(0, 10) + "..." 
                    : crumb.label}
                </Link>
              ) : (
                <span className="text-orange-500 font-medium whitespace-nowrap">
                  {isMobile && crumb.label.length > 15 
                    ? crumb.label.substring(0, 12) + "..." 
                    : crumb.label}
                </span>
              )}
              
              {/* Separator */}
              {index < breadcrumbs.length - 1 && (
                <span className="text-navy/70 text-xs sm:text-sm">/</span>
              )}
            </span>
          ))}
        </nav>

        {/* Mobile breadcrumbs alternative - For very long breadcrumb paths */}
        {isMobile && breadcrumbs.length > 3 && (
          <div className="mt-3 text-xs text-navy/50">
            <span className="inline-flex items-center gap-1">
              <span>←</span>
              <Link href={breadcrumbs[breadcrumbs.length - 2]?.href || "/"} className="hover:text-orange-500">
                Back
              </Link>
            </span>
          </div>
        )}
      </div>

      {/* Bottom Navy Bar - Responsive height */}
      <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-12 bg-navy diagonal-pattern" />
      
      {/* Mobile decorative element - Subtle, preserves theme */}
      {isMobile && (
        <div className="absolute top-1/4 left-0 w-16 h-16 bg-orange-500/5 rounded-full blur-2xl -z-10" />
      )}
    </section>
  );
}