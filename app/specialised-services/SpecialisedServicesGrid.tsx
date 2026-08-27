"use client";

import Image from "next/image";
import Link from "next/link";
import { Target, Layers, ArrowRight } from "lucide-react";
import { specialisedServices } from "@/lib/specialised-services";

export default function SpecialisedServicesGrid() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-navy/70 text-xs sm:text-sm font-medium tracking-wide mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
            Targeted Workplace Support
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            <span className="text-navy block sm:inline">Specialised</span>{" "}
            <span className="text-orange-500 italic block sm:inline">Services</span>
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-7 lg:space-y-8">
          {specialisedServices.map((service, index) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100"
            >
              <div
                className={`flex flex-col lg:grid lg:grid-cols-2 gap-0 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`relative w-full h-64 sm:h-72 lg:h-auto min-h-[300px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/90 backdrop-blur-sm rounded-full text-navy text-xs lg:text-sm font-medium shadow-lg">
                      {service.category}
                    </span>
                  </div>
                </div>

                <div
                  className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy mb-3 sm:mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <div className="flex items-center gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span>
                        <strong className="font-semibold text-navy">Setting:</strong>{" "}
                        {service.targetSector}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span>
                        <strong className="font-semibold text-navy">Format:</strong>{" "}
                        {service.serviceType}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/specialised-services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-orange-500 font-semibold hover:gap-3 transition-all py-2 text-sm sm:text-base w-fit"
                  >
                    View Service Details
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
