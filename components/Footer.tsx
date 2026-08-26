"use client";

import Link from "next/link";
import { FOOTER_BLURB, INSTITUTE_NAME } from "@/lib/site";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-8 sm:gap-10 lg:gap-8">
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

          <div className="lg:col-span-2">
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

          <div className="lg:col-span-2">
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
          </div>
        </div>
      </div>

      <div className="bg-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center sm:text-left">
            <p className="text-white text-xs sm:text-sm font-medium">
              Copyright © {new Date().getFullYear()} NewMaster Health and Safety. All Rights Reserved.
            </p>
            <p className="text-white/90 text-xs sm:text-sm">
              Developed by {" "}
              <Link
                href="https://albertwatbin.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline-offset-2 hover:underline"
              >
                Albert Watbin
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
