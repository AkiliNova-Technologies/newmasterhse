"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Heart, Shield, Leaf, Users } from "lucide-react";
import { useState, useEffect } from "react";

const services = [
  {
    id: "occupational-health",
    icon: Heart,
    title: "Occupational Health Services",
    description:
      "Protecting employee health at every stage of employment. We provide comprehensive occupational health services designed to help organizations assess employee fitness, identify health risks, monitor worker health, and support healthier workplaces.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    includes: [
      "Pre-employment medical examinations",
      "Periodic & annual medical examinations",
      "Fitness-to-work assessments",
      "Health surveillance programs",
      "Drug and alcohol testing",
      "Workplace ergonomic assessments",
    ],
    outcome:
      "Early identification of health risks, improved workforce health data, and stronger workplace health programs that support safer work practices.",
  },
  {
    id: "workplace-safety",
    icon: Shield,
    title: "Workplace Safety Services",
    description:
      "Building stronger safety systems that go beyond compliance. We help organizations identify hazards, evaluate risks, implement controls, investigate incidents, and continuously improve safety performance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    includes: [
      "Occupational safety & health audits",
      "Hazard identification & risk assessments (HIRA)",
      "Job safety analysis (JSA)",
      "Incident investigation & root cause analysis",
      "Safety management system development",
      "Behaviour-based safety programs",
    ],
    outcome:
      "Reduced workplace incidents, stronger safety systems, and a culture where safety is central to every operation.",
  },
  {
    id: "environmental-health",
    icon: Leaf,
    title: "Environmental Health & Industrial Hygiene",
    description:
      "Understanding and managing workplace exposures that may not always be immediately visible. We help organizations identify, evaluate, and control environmental and occupational exposure risks.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop",
    includes: [
      "Noise exposure assessments",
      "Indoor air quality assessments",
      "Dust monitoring & heat stress assessments",
      "Chemical exposure assessments",
      "Lighting & ventilation evaluations",
      "Hazardous substance management",
    ],
    outcome:
      "Clear understanding of workplace exposure conditions and practical measures to reduce or control associated risks.",
  },
  {
    id: "training-capacity-building",
    icon: Users,
    title: "Training & Capacity Building",
    description:
      "Equipping employees with the knowledge and practical skills required to work safely. Our certified and customized training programs are designed around your workforce, industry, and operational risks.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
    includes: [
      "First aid & CPR training",
      "Fire safety & extinguisher use",
      "Working at heights & confined space entry",
      "Manual handling & ergonomics",
      "Leadership in safety programs",
      "Customized corporate training",
    ],
    outcome:
      "A competent workforce with practical safety skills, improved hazard awareness, and stronger organizational safety competence.",
  },
];

export default function ServicesDetail() {
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
    <section className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section - Responsive */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4 sm:mb-6 leading-tight">
            Integrated Occupational Health & Safety Solutions for Modern Workplaces
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg px-2">
            NewMaster Occupational Health & Safety provides integrated services across the 
            occupational health and safety lifecycle. Our approach combines professional expertise, 
            evidence-based methods, practical training, medical services, workplace assessments, 
            consulting, and digital technologies tailored to each organization&apos;s operational reality.
          </p>
        </div>

        {/* Services - Responsive spacing */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24 sm:scroll-mt-28"
            >
              <div
                className={`flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image - Full width on mobile */}
                <div
                  className={`relative w-full ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading={index > 0 ? "lazy" : "eager"}
                    />
                  </div>
                  {/* Icon Badge - Responsive */}
                  <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-3 w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl">
                    <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>

                {/* Content - Full width on mobile */}
                <div className={`w-full ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {/* Service Number */}
                  <div className="section-label text-navy/70 text-sm sm:text-base mb-3 sm:mb-4">
                    Service {String(index + 1).padStart(2, "0")}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy mb-3 sm:mb-4 leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* What's Included - Responsive */}
                  <div className="bg-gray-50 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8">
                    <h4 className="font-bold text-navy text-base sm:text-lg mb-3 sm:mb-4">
                      What We Offer:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {service.includes.map((item) => (
                        <div key={item} className="flex items-start gap-1.5 sm:gap-2">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-600 break-words">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcome - Responsive */}
                  <div className="bg-navy rounded-xl p-5 sm:p-6 text-white">
                    <h4 className="font-bold text-sm sm:text-base mb-1.5 sm:mb-2">
                      Why It Matters:
                    </h4>
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                      {service.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Responsive */}
        <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
          <div className="bg-orange-50 rounded-2xl p-6 sm:p-8 lg:p-12 mx-2 sm:mx-0">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy mb-3 sm:mb-4 leading-tight">
              Ready to Strengthen Your Workplace?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Whether you need a workplace audit, occupational medical examination, staff training, 
              compliance assessment, wellness program, safety equipment, or a complete HSE solution, 
              let&apos;s discuss what your organization needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 text-sm sm:text-base w-full sm:w-auto"
            >
              Request a Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Decorative Elements - Subtle, preserves theme */}
      {isMobile && (
        <>
          <div className="absolute left-0 top-1/3 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl -z-10" />
          <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-navy/5 rounded-full blur-2xl -z-10" />
        </>
      )}
    </section>
  );
}