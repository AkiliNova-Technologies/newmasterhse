"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Minus, MessageCircle, Phone } from "lucide-react";

const faqs = [
  {
    question: "How often should medical examinations be conducted?",
    answer:
      "The appropriate frequency of occupational medical examinations depends on factors such as the employee's role, workplace hazards, exposure profile, organizational policies, and applicable requirements. NewMaster can help organizations determine an appropriate occupational health examination program based on their specific workplace risks.",
  },
  {
    question: "Is workplace risk assessment mandatory?",
    answer:
      "Organizations may have legal and regulatory obligations relating to workplace hazard identification and risk assessment. The specific requirements depend on the applicable legislation, industry, workplace, and activities. NewMaster can assess your workplace and advise on appropriate risk assessment and management measures.",
  },
  {
    question: "What industries require health surveillance?",
    answer:
      "Health surveillance may be appropriate where employees are exposed to occupational hazards that could affect their health. Examples include exposure to excessive noise, dust, chemicals, biological hazards, respiratory hazards, and other occupational exposures. The appropriate surveillance program depends on the specific workplace and exposure risks.",
  },
  {
    question: "Can NewMaster provide customized training?",
    answer:
      "Yes. Corporate training programs can be customized according to an organization's industry, workforce, hazards, policies, operational activities, and learning objectives. Training is delivered through the NewMaster Training Academy, which offers both scheduled courses and dedicated corporate programs.",
  },
  {
    question: "How can we book an audit or workplace assessment?",
    answer:
      "Organizations can request an audit or workplace assessment through our online booking form, by contacting our office directly, or by requesting a consultation. Our team will discuss your specific needs and arrange an appropriate assessment based on your operations and industry.",
  },
  {
    question: "Does NewMaster provide workplace safety equipment?",
    answer:
      "Yes. Flavia Safety Shop supplies selected workplace safety products including personal protective equipment (safety boots, helmets, gloves, respirators), fire extinguishers, first aid kits, safety signs, and gas detectors. You can contact the shop directly for product availability, quotations, and bulk orders.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gray-light py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Responsive */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 lg:mb-16">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-navy/70 text-xs sm:text-sm font-medium tracking-wide mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
            FAQs
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
          </div>

          {/* Heading - Responsive typography */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            <span className="text-navy block sm:inline">Frequently Asked</span>{" "}
            <span className="text-orange-500 italic block sm:inline">
              Questions
            </span>
          </h2>
        </div>

        {/* Content Grid - Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* FAQ Accordion - Full width on mobile */}
          <div className="lg:col-span-2 order-2 lg:order-1 space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "ring-2 ring-navy shadow-lg"
                    : "shadow-card hover:shadow-card-hover"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-start sm:items-center justify-between p-4 sm:p-6 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span
                    className={`font-bold text-base sm:text-lg ${
                      openIndex === index ? "text-navy" : "text-navy"
                    } pr-2 flex-1`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-2 sm:ml-4 transition-colors ${
                      openIndex === index
                        ? "bg-navy text-white"
                        : "bg-gray-100 text-navy"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    )}
                  </div>
                </button>
                
                {/* Expandable content with animation */}
                {openIndex === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <div className="border-t border-gray-100 pt-3 sm:pt-4">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar - Full width on mobile, appears first */}
          <div className="order-1 lg:order-2 space-y-4 sm:space-y-5 lg:space-y-6">
            {/* Contact Card - Responsive padding */}
            <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center diagonal-pattern">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                Still have questions?
              </h3>
              <p className="text-white/70 text-sm sm:text-base mb-5 sm:mb-6">
                Our team is ready to discuss your organization&apos;s occupational 
                health and safety needs. We ensure a prompt response.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>

            {/* Phone Card - Responsive layout */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-card">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm text-gray-500 truncate">
                    Safer Workplaces Start Here
                  </div>
                  <div className="text-base sm:text-lg font-bold text-navy truncate">
                    Get in Touch
                  </div>
                  <a
                    href="tel:[PLACEHOLDER]"
                    className="text-sm sm:text-base text-orange-500 font-medium hover:underline inline-block truncate"
                  >
                    [PLACEHOLDER — Phone]
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile-only: Additional CTA for easy contact */}
            {isMobile && (
              <div className="bg-white/50 rounded-2xl p-4 border border-orange-500/20">
                <p className="text-xs text-navy/70 text-center">
                  Need immediate assistance? Call or WhatsApp our team
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Decorative Elements - Subtle, preserves theme */}
        <div className="lg:hidden absolute left-0 top-1/4 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -z-10" />
        <div className="lg:hidden absolute right-0 bottom-1/4 w-40 h-40 bg-navy/5 rounded-full blur-2xl -z-10" />
      </div>
    </section>
  );
}