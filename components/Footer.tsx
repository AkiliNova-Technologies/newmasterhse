"use client";

import Link from "next/link";
import { Send } from "lucide-react";
import { useState } from "react";
import { CONTACT, FOOTER_BLURB, INSTITUTE_NAME } from "@/lib/site";

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Occupational Health", href: "/services#occupational-health" },
  {
    name: "Safety & Environmental Consulting",
    href: "/services#safety-environmental-consulting",
  },
  { name: "Training & Certification", href: "/services#training-certification" },
  { name: "Specialised Services", href: "/specialised-services" },
];

const resourceLinks = [
  { name: "News", href: "/news" },
  { name: "Podcasts", href: "/podcasts" },
  { name: "FAQs", href: "/#faqs" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("Please enter a valid email address.");
      return;
    }
    setStatus(
      "Thank you. Newsletter storage is not yet connected. Please use the contact page to reach NewMaster Health and Safety.",
    );
    setEmail("");
  };

  return (
    <footer className="bg-navy text-white overflow-hidden">
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
              Talk to Our Team
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16 diagonal-pattern">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-8">
          <div className="lg:col-span-2 text-left">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded-sm transform rotate-12" />
              </div>
              <span className="text-xl sm:text-2xl font-bold">
                New<span className="text-orange-500">Master</span>
              </span>
            </Link>

            <p className="text-white/70 mb-6 leading-relaxed text-sm sm:text-base max-w-md">
              {FOOTER_BLURB}
            </p>

          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-5 sm:mb-6">Company</h4>
            <ul className="space-y-3 sm:space-y-4">
              {companyLinks.map((link) => (
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

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-5 sm:mb-6">Services</h4>
            <ul className="space-y-3 sm:space-y-4">
              {serviceLinks.map((link) => (
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

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-5 sm:mb-6">Resources</h4>
            <ul className="space-y-3 sm:space-y-4">
              {resourceLinks.map((link) => (
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

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-5 sm:mb-6">Training</h4>
            <ul className="space-y-3 sm:space-y-4 mb-6">
              <li>
                <Link
                  href="/institute"
                  className="text-white/70 hover:text-orange-500 transition-colors text-sm sm:text-base inline-block py-1"
                >
                  {INSTITUTE_NAME}
                </Link>
              </li>
            </ul>
            <form onSubmit={handleSubmit} className="relative">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
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
                aria-label="Submit email"
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </form>
            {status && (
              <p className="text-white/70 text-xs mt-3 leading-relaxed">{status}</p>
            )}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/60">
          <p>
            {CONTACT.kampalaLabel}: {CONTACT.kampalaAddress}
          </p>
          <p>
            {CONTACT.mbararaLabel}: {CONTACT.mbararaAddress}
          </p>
        </div>
      </div>

      <div className="bg-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <p className="text-white text-center text-xs sm:text-sm">
            Copyright © {new Date().getFullYear()} NewMaster Health and Safety. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
