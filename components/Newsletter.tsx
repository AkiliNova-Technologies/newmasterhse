"use client";

import { useState, useEffect } from "react";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
    
    // Optional: Show success message on mobile
    if (isMobile) {
      alert("Thank you for subscribing!");
    }
  };

  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Dotted Pattern Background - Preserved */}
      <div className="absolute inset-0 dotted-pattern opacity-30 pointer-events-none" />

      {/* Decorative Element - Left - Hidden on mobile/tablet, preserved on desktop */}
      <div className="hidden lg:block absolute left-0 top-0">
        <svg
          width="120"
          height="200"
          viewBox="0 0 120 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-80"
        >
          {/* Vertical line */}
          <rect x="55" y="0" width="4" height="120" fill="#1a2b4a" />
          {/* Hook circle */}
          <circle cx="57" cy="140" r="25" stroke="#1a2b4a" strokeWidth="4" fill="none" />
          {/* Inner hook detail */}
          <circle cx="57" cy="140" r="12" fill="#f97316" />
          {/* Small accent lines */}
          <rect x="45" y="50" width="24" height="3" fill="#f97316" />
          <rect x="45" y="60" width="16" height="3" fill="#1a2b4a" opacity="0.5" />
        </svg>
      </div>

      {/* Decorative Element - Right - Hidden on mobile/tablet, preserved on desktop */}
      <div className="hidden lg:block absolute right-0 bottom-0">
        <svg
          width="320"
          height="220"
          viewBox="0 0 320 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-90"
        >
          {/* Background shape */}
          <path
            d="M80 220 L80 120 L140 120 L140 80 L200 80 L200 40 L260 40 L260 0 L320 0 L320 220 Z"
            fill="#f97316"
            opacity="0.15"
          />
          {/* Rising bars */}
          <rect x="100" y="140" width="35" height="80" rx="4" fill="#1a2b4a" />
          <rect x="150" y="100" width="35" height="120" rx="4" fill="#1a2b4a" />
          <rect x="200" y="60" width="35" height="160" rx="4" fill="#f97316" />
          <rect x="250" y="30" width="35" height="190" rx="4" fill="#1a2b4a" />
          {/* Trend line */}
          <path
            d="M117 130 L167 90 L217 50 L267 20"
            stroke="#f97316"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Dots on trend line */}
          <circle cx="117" cy="130" r="6" fill="#f97316" />
          <circle cx="167" cy="90" r="6" fill="#f97316" />
          <circle cx="217" cy="50" r="6" fill="white" stroke="#f97316" strokeWidth="3" />
          <circle cx="267" cy="20" r="6" fill="#f97316" />
          {/* Small decorative elements */}
          <circle cx="300" cy="180" r="8" fill="#1a2b4a" opacity="0.3" />
          <circle cx="85" cy="200" r="5" fill="#f97316" opacity="0.5" />
        </svg>
      </div>

      {/* Additional floating decorative elements - Desktop only */}
      <div className="hidden lg:block absolute left-20 bottom-10">
        <div className="text-orange-500 opacity-60">
          <span className="text-2xl">✦</span>
        </div>
      </div>
      <div className="hidden lg:block absolute right-1/4 top-8">
        <div className="text-navy opacity-30">
          <span className="text-lg">✦</span>
        </div>
      </div>

      {/* Mobile decorative elements - Subtle, preserves theme */}
      {isMobile && (
        <>
          <div className="absolute left-0 top-1/3 w-16 h-16 bg-orange-500/5 rounded-full blur-2xl -z-10" />
          <div className="absolute right-0 bottom-1/3 w-20 h-20 bg-navy/5 rounded-full blur-2xl -z-10" />
          <div className="absolute left-4 bottom-4 text-orange-500/10 text-4xl">✦</div>
          <div className="absolute right-8 top-8 text-navy/10 text-3xl">✦</div>
        </>
      )}

      {/* Tablet decorative elements - Simplified */}
      {isTablet && (
        <>
          <div className="absolute left-0 top-1/2 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl -z-10" />
          <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-navy/5 rounded-full blur-2xl -z-10" />
        </>
      )}

      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Label - Responsive */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-navy/70 text-xs sm:text-sm font-medium tracking-wide mb-3 sm:mb-4">
          <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
          Stay Informed
          <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
        </div>

        {/* Heading - Responsive typography */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
          <span className="text-navy block sm:inline">Subscribe for Workplace</span>{" "}
          <span className="text-orange-500 italic block sm:inline">
            Health & Safety Insights
          </span>
        </h2>

        {/* Newsletter Form - Mobile optimized */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto w-full"
        >
          <div className="relative w-full">
            <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-navy rounded-full flex items-center justify-center">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={isMobile ? "Email address" : "Enter Email Address"}
              required
              className="w-full pl-14 sm:pl-16 pr-4 py-3.5 sm:py-4 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm sm:text-base"
              aria-label="Email address for newsletter"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 text-sm sm:text-base"
          >
            Subscribe
          </button>
        </form>

        {/* Privacy note - Mobile only */}
        {isMobile && (
          <p className="text-xs text-navy/50 mt-4">
            No spam, unsubscribe anytime.
          </p>
        )}

        {/* Success message placeholder (can be enhanced) */}
        <p className="text-xs text-navy/40 mt-4 sm:mt-6">
          Get the latest workplace health and safety updates delivered to your inbox
        </p>
      </div>
    </section>
  );
}