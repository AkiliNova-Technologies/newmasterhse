"use client";

import { JSX, useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Insights", href: "/insights" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "YouTube", href: "#", icon: "youtube" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isMobile]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-60 transition-all duration-500",
        isScrolled ? "bg-white shadow-lg py-0" : "bg-navy shadow-lg py-0",
      )}
    >
      {/* Main Navigation */}
      <nav className="relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - Responsive sizing */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <div
                className={cn(
                  "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors flex-shrink-0",
                  isScrolled
                    ? "bg-navy"
                    : "bg-white/10 backdrop-blur-sm border border-white/30",
                )}
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded-sm transform rotate-12" />
              </div>
              <span
                className={cn(
                  "text-xl sm:text-2xl font-bold transition-colors whitespace-nowrap",
                  isScrolled ? "text-navy" : "text-white",
                )}
              >
                New<span className="text-orange-500">Master</span>
              </span>
            </Link>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "font-medium transition-colors relative group text-sm xl:text-base whitespace-nowrap",
                    isScrolled
                      ? "text-navy hover:text-orange-500"
                      : "text-white/90 hover:text-white",
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full",
                      isScrolled ? "bg-orange-500" : "bg-white",
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center justify-center px-5 xl:px-6 py-2.5 xl:py-3 font-semibold rounded-full transition-all text-sm xl:text-base whitespace-nowrap",
                  isScrolled
                    ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30"
                    : "bg-white text-navy hover:bg-orange-500 hover:text-white shadow-lg",
                )}
              >
                Request a Consultation
              </Link>
            </div>

            {/* Mobile Menu Button - Responsive sizing */}
            <button
              className={cn(
                "lg:hidden p-1.5 sm:p-2 rounded-md transition-colors",
                isScrolled
                  ? "text-navy hover:bg-gray-100"
                  : "text-white hover:bg-white/10",
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Full screen overlay style for better UX */}
        <div
          className={cn(
            "lg:hidden fixed inset-x-0 top-16 sm:top-20 transition-all duration-300 ease-in-out z-50",
            isScrolled ? "bg-white  shadow-lg" : "bg-navy ",
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none",
          )}
        >
          <div className="max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-5 sm:space-y-6">
              {/* Navigation Links */}
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "block font-medium transition-colors py-2.5 sm:py-3 px-2 rounded-md text-base sm:text-lg",
                      isScrolled
                        ? "text-navy hover:text-orange-500 hover:bg-gray-50"
                        : "text-white/90 hover:text-white hover:bg-white/10",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <Link
                href="/contact"
                className={cn(
                  "block w-full text-center px-6 py-3.5 sm:py-4 font-semibold rounded-full transition-colors text-base sm:text-lg",
                  isScrolled
                    ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30"
                    : "bg-white text-navy hover:bg-orange-500 hover:text-white shadow-lg",
                )}
                onClick={() => setIsOpen(false)}
              >
                Request a Consultation
              </Link>

              {/* Mobile Contact Info - Optional, improves UX */}
              <div
                className={cn(
                  "pt-4 mt-4 border-t",
                  isScrolled ? "border-gray-200" : "border-white/20",
                )}
              >
                <div className="flex flex-col space-y-3">
                  <a
                    href="tel:[PLACEHOLDER]"
                    className={cn(
                      "flex items-center gap-3 transition-colors py-2 px-2 rounded-md text-sm sm:text-base",
                      isScrolled
                        ? "text-navy/70 hover:text-orange-500"
                        : "text-white/70 hover:text-white",
                    )}
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>[PLACEHOLDER — Phone]</span>
                  </a>
                  <a
                    href="mailto:[PLACEHOLDER]"
                    className={cn(
                      "flex items-center gap-3 transition-colors py-2 px-2 rounded-md text-sm sm:text-base break-all",
                      isScrolled
                        ? "text-navy/70 hover:text-orange-500"
                        : "text-white/70 hover:text-white",
                    )}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>[PLACEHOLDER — Email]</span>
                  </a>
                </div>

                {/* Mobile Social Links - Optional */}
                <div className="flex items-center gap-3 mt-5 px-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={cn(
                        "w-9 h-9 rounded-full flex items-center justify-center transition-colors",
                        isScrolled
                          ? "bg-gray-100 text-navy hover:bg-orange-500 hover:text-white"
                          : "bg-white/10 text-white hover:bg-orange-500",
                      )}
                      aria-label={social.name}
                      onClick={() => setIsOpen(false)}
                    >
                      <SocialIcon name={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    facebook: (
      <svg
        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 36.6 36.6 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
      </svg>
    ),
    twitter: (
      <svg
        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    linkedin: (
      <svg
        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    instagram: (
      <svg
        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    youtube: (
      <svg
        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  };

  return icons[name] || null;
}