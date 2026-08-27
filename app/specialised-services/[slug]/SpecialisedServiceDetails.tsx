"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Target,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import type { SpecialisedService } from "@/lib/specialised-services";

export default function SpecialisedServiceDetails({
  service,
}: {
  service: SpecialisedService;
}) {
  return (
    <>
      <section className="relative bg-navy pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/85" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 dotted-pattern opacity-30 mix-blend-overlay" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/specialised-services"
            className="inline-flex items-center gap-2 text-white hover:text-white mb-6 sm:mb-8 group text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Specialised Services
          </Link>
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500 text-white text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
            {service.category}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-3xl">
            {service.title}
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </span>
                  Overview
                </h2>
                <p className="text-gray-600 leading-relaxed">{service.overview}</p>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </span>
                  What We Provide
                </h2>
                <div className="space-y-3">
                  {service.offerings.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </span>
                  How It Works
                </h2>
                <div className="space-y-4">
                  {service.howItWorks.map((step, index) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-orange-600 text-xs font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-600">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-bold text-navy mb-4">Who it supports</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.whoItSupports}</p>
              </div>
              <div className="bg-gradient-to-br from-navy to-navy/90 rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-lg font-bold mb-3">Discuss this service</h3>
                <p className="text-white/70 text-sm mb-6">
                  Tell us about your workplace, location and the support you need.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 w-full"
                >
                  Talk to Our Team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
