"use client";

import Link from "next/link";
import { ArrowRight, Heart, Shield, GraduationCap } from "lucide-react";
import Image from "next/image";
import { serviceCategories } from "@/lib/services";

const icons = [Heart, Shield, GraduationCap];

export default function Services() {
  return (
    <section className="relative bg-gray-light py-16 sm:py-16 lg:py-28 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mx-auto mb-12 sm:mb-14 lg:mb-16">
          <div className="flex items-center justify-start gap-2 sm:gap-3 text-navy/70 text-xs sm:text-sm font-medium tracking-wide mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
            Our Expertise
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            <span className="text-navy block sm:inline">Integrated Solutions for</span>
            <span className="text-orange-500 italic block sm:inline sm:ml-2">
              Safer Workplaces
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {serviceCategories.map((service, index) => {
            const Icon = icons[index] ?? Shield;
            return (
              <div
                key={service.id}
                className="relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group h-full flex flex-col"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-8 sm:bottom-10 left-4 sm:left-6 translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-navy rounded-full flex items-center justify-center text-white shadow-xl">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-10 sm:pt-12 flex-grow flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 sm:mb-3 leading-tight">
                    {service.shortTitle}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3 flex-grow">
                    {service.description}
                  </p>
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-orange-500 font-semibold hover:gap-3 transition-all py-2 text-sm sm:text-base mt-auto"
                  >
                    Explore Services
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Link>
                </div>
                <div className="h-1 absolute bottom-0 w-full bg-transparent group-hover:bg-orange-500 transition-colors" />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <div className="inline-flex flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/services"
              className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base"
            >
              View All Services
            </Link>
            <Link
              href="/services"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-navy rounded-full flex items-center justify-center text-white hover:bg-navy-light transition-colors"
              aria-label="View all services"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
