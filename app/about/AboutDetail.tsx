"use client";

import Image from "next/image";
import { Target, Eye, Heart, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We do what is right — operating with honesty, accountability, and professional responsibility in everything we do.",
  },
  {
    icon: Target,
    title: "Safety First",
    description: "Every decision prioritizes health and safety. We help organizations identify risks early and implement practical controls.",
  },
  {
    icon: Eye,
    title: "Professional Excellence",
    description: "We are committed to delivering evidence-based, high-quality services grounded in technical expertise and continuous learning.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We embrace technology, data, and digital tools that make occupational health and safety more effective and accessible.",
  },
];

const industries = [
  "Oil & Gas",
  "Construction",
  "Manufacturing",
  "Healthcare",
  "Mining",
  "Agriculture",
  "Hospitality",
  "Education",
  "Banking & Financial Services",
  "Government",
  "NGOs & Development Organizations",
];

export default function AboutDetail() {
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
        {/* Story Section - Responsive */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20 lg:mb-24">
          {/* Content */}
          <div className="w-full order-2 lg:order-1">
            <div className="section-label text-navy/70 text-sm sm:text-base mb-3 sm:mb-4">
              Who We Are
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4 sm:mb-6 leading-tight">
              Protecting People. Strengthening Organizations.
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
              <p>
                NewMaster Occupational Health & Safety was founded on a simple belief: every worker deserves a safe place to work, and every organization benefits when health and safety are integrated into everyday operations.
              </p>
              <p>
                We provide integrated occupational health, safety, environmental, and workplace wellbeing solutions for organizations seeking to protect their people while improving operational performance. Our approach combines professional occupational health services, workplace safety management, environmental and industrial hygiene assessments, employee wellbeing programs, emergency preparedness, regulatory compliance support, training, consulting, and digital solutions.
              </p>
              <p>
                We understand that every workplace has different risks, regulatory obligations, workforce characteristics, and operational requirements. For this reason, our services are adapted to the specific needs of each organization — whether they need to establish their health and safety systems, conduct a risk assessment, train employees, establish a health surveillance program, or improve regulatory compliance.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl w-full">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="NewMaster occupational health and safety professionals"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </div>
            {/* Experience Badge - Responsive */}
            <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-3 bg-orange-500 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">20+</div>
              <div className="text-xs sm:text-sm opacity-90">Organizations Supported</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 mb-16 sm:mb-20 lg:mb-24">
          {/* Mission Card - Navy */}
          <div className="bg-navy rounded-2xl p-6 sm:p-8 lg:p-10 text-white diagonal-pattern">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6">
              <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Mission</h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              To protect workers, strengthen organizations, and promote sustainable productivity by delivering evidence-based occupational health, safety, environmental, and wellbeing solutions through expert medical services, training, compliance support, and innovative technologies.
            </p>
          </div>

          {/* Vision Card - Gray */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-navy rounded-xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6">
              <Eye className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3 sm:mb-4">Our Vision</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              To be Africa&apos;s leading provider of innovative occupational health, safety, and wellbeing solutions — enabling people to work safely, remain healthy, and perform at their best.
            </p>
          </div>
        </div>

        {/* Core Goal Card */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="bg-orange-50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-orange-200">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3 sm:mb-4">Our Core Goal</h3>
              <p className="text-navy/80 text-sm sm:text-base leading-relaxed font-medium">
                To create safer, healthier, and more productive workplaces where people and businesses thrive together.
              </p>
            </div>
          </div>
        </div>

        {/* Values - Responsive */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <div className="section-label text-navy/70 text-sm sm:text-base justify-center mb-3 sm:mb-4">
              Our Core Values
            </div>
            <h2 className="flex flex-row gap-2 justify-center text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              <span className="text-navy block sm:inline">What We</span>{" "}
              <span className="text-orange-500 italic block sm:inline">
                Stand For
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center group">
                {/* Icon Container - Responsive */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-orange-500 transition-colors">
                  <value.icon className="w-8 h-8 sm:w-10 sm:h-10 text-navy group-hover:text-white transition-colors" />
                </div>
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 sm:mb-3">
                  {value.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm px-2">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries - Responsive */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="w-full order-2 lg:order-1">
              <div className="section-label text-navy/70 text-sm sm:text-base mb-3 sm:mb-4">
                Industries We Serve
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4 sm:mb-6 leading-tight">
                Safety Solutions Across Industries
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                Workplace risks differ significantly from one industry to another. Our services are adapted to the operational environment, workforce, hazards, and requirements of different sectors — from oil and gas to healthcare, construction, manufacturing, and beyond.
              </p>
              
              {/* Industry List - Responsive */}
              <div className="space-y-3 sm:space-y-4">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-navy">
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl w-full">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop"
                  alt="Industries served by NewMaster"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Decorative Elements */}
      {isMobile && (
        <>
          <div className="absolute left-0 top-1/3 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl -z-10" />
          <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-navy/5 rounded-full blur-2xl -z-10" />
        </>
      )}
    </section>
  );
}