"use client";

import Link from "next/link";
import { Send } from "lucide-react";
import { JSX, useState, useEffect } from "react";

const navigationLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Training Academy", href: "/training-academy" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "YouTube", href: "#", icon: "youtube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Footer newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-navy text-white overflow-hidden">
      {/* CTA Bar - Responsive */}
      <div className="border-b border-white/10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center sm:text-left leading-tight">
              <span className="italic">Let&apos;s Make</span>{" "}
              <span className="text-orange-500">Your Workplace</span>{" "}
              <span className="italic">Safer</span>
            </h3>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-colors text-sm sm:text-base w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer - Responsive grid */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16 diagonal-pattern">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand Column - Full width on mobile */}
          <div className="lg:col-span-1 text-left sm:text-left">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 mb-6 mx-auto sm:mx-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded-sm transform rotate-12" />
              </div>
              <span className="text-xl sm:text-2xl font-bold">
                New<span className="text-orange-500">Master</span>
              </span>
            </Link>

            <p className="text-white/70 mb-6 leading-relaxed text-sm sm:text-base max-w-md mx-auto sm:mx-0">
              Integrated occupational health, safety, environmental, training, 
              compliance, wellbeing, consulting, and digital solutions for 
              safer, healthier, and more productive workplaces.
            </p>

            {/* Social Links - Centered on mobile */}
            <div className="flex items-center justify-start sm:justify-start gap-2 sm:gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
                  aria-label={social.name}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="text-left sm:text-left">
            <h4 className="text-base sm:text-lg font-bold mb-5 sm:mb-6">Quick Links</h4>
            <ul className="space-y-3 sm:space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-orange-500 transition-colors text-sm sm:text-base inline-block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="text-left sm:text-left">
            <h4 className="text-base sm:text-lg font-bold mb-5 sm:mb-6">Contact</h4>
            <ul className="space-y-3 sm:space-y-4 text-white/70 text-sm sm:text-base">
              <li>
                <a
                  href="tel:[PLACEHOLDER]"
                  className="hover:text-orange-500 transition-colors inline-block py-1"
                >
                  [PLACEHOLDER — Phone]
                </a>
              </li>
              <li>
                <a
                  href="mailto:[PLACEHOLDER]"
                  className="hover:text-orange-500 transition-colors inline-block py-1 break-all"
                >
                  [PLACEHOLDER — Email]
                </a>
              </li>
              <li className="leading-relaxed">
                [PLACEHOLDER — Full Office Address]
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold mb-5 sm:mb-6">
              Stay Updated
            </h4>
            <form onSubmit={handleSubmit} className="relative max-w-md mx-auto sm:mx-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="w-full px-4 py-2.5 sm:py-3 pr-14 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm sm:text-base"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 sm:right-1 sm:top-1 w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </form>
            
            {/* Mobile hint text */}
            {isMobile && (
              <p className="text-white/50 text-xs mt-3">
                No spam, unsubscribe anytime.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Specialized Business Units Bar */}
      <div className="border-t border-white/10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/60">
            <span>Our Specialized Units:</span>
            <Link href="/training-academy" className="hover:text-orange-500 transition-colors">
              NewMaster Training Academy
            </Link>
            <span className="hidden sm:inline text-white/20">|</span>
            <Link href="/medical-centre" className="hover:text-orange-500 transition-colors">
              St Atananzio Occupational Medical Centre
            </Link>
            <span className="hidden sm:inline text-white/20">|</span>
            <Link href="/safety-shop" className="hover:text-orange-500 transition-colors">
              Flavia Safety Shop
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Bar - Responsive stacking */}
      <div className="bg-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs sm:text-sm">
            <p className="text-white text-center sm:text-left order-2 sm:order-1">
              Copyright © {new Date().getFullYear()} NewMaster Occupational Health & Safety. All Rights Reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 order-1 sm:order-2">
              <Link
                href="/terms"
                className="text-white hover:text-navy transition-colors py-1"
              >
                User Terms & Conditions
              </Link>
              <span className="text-white/50 hidden sm:inline">|</span>
              <span className="text-white/50 sm:hidden mx-1">•</span>
              <Link
                href="/privacy"
                className="text-white hover:text-navy transition-colors py-1"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Decorative Elements */}
      <div className="lg:hidden absolute left-0 bottom-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl -z-10" />
      <div className="lg:hidden absolute right-0 top-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl -z-10" />
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    facebook: (
      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 36.6 36.6 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
      </svg>
    ),
    twitter: (
      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    instagram: (
      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    youtube: (
      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  };

  return icons[name] || null;
}