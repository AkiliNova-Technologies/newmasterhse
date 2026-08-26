"use client";

import Image from "next/image";
import { CheckCircle2, Heart, Shield, GraduationCap } from "lucide-react";
import {
  serviceCategories
} from "@/lib/services";

const icons = [Heart, Shield, GraduationCap];

export default function ServicesDetail() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4 sm:mb-6 leading-tight">
            Integrated workplace health, safety and training solutions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg px-2">
            NewMaster Health and Safety provides occupational health services, safety and
            environmental consulting, and training through the NewMaster Institute of Health &
            Safety. Programmes are adapted to each organisation&apos;s workplace risks and
            operating environment.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {serviceCategories.map((service, index) => {
            const Icon = icons[index] ?? Shield;
            return (
              <div key={service.id} id={service.id} className="scroll-mt-24 sm:scroll-mt-28">
                <div
                  className={`flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`relative w-full ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl w-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-3 w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </div>

                  <div className={`w-full ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="section-label text-navy/70 text-sm sm:text-base mb-3 sm:mb-4">
                      Service {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy mb-3 sm:mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="bg-gray-50 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8">
                      <h4 className="font-bold text-navy text-base sm:text-lg mb-3 sm:mb-4">
                        What We Offer
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {service.includes.map((item) => (
                          <div key={item} className="flex items-start gap-1.5 sm:gap-2">
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-navy rounded-xl p-5 sm:p-6 text-white">
                      <h4 className="font-bold text-sm sm:text-base mb-1.5 sm:mb-2">
                        Why It Matters
                      </h4>
                      <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                        {service.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
