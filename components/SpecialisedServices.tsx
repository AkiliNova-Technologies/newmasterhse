"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { specialisedServices } from "@/lib/specialised-services";

export default function SpecialisedServices() {
  const featured = specialisedServices.slice(0, 3);

  return (
    <section className="relative bg-navy py-16 diagonal-pattern overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-white/70 text-xs sm:text-sm font-medium tracking-wide mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
            Specialised Services
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            <span className="text-white block sm:inline">Support Where</span>{" "}
            <span className="text-orange-500 italic block sm:inline">Work Happens</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {featured.map((service) => (
            <article
              key={service.slug}
              className="bg-navy-light/50 rounded-2xl overflow-hidden border border-white/10 flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-orange-400 text-xs font-semibold mb-2">{service.category}</p>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <Link
                  href={`/specialised-services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm"
                >
                  View service details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/specialised-services"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base"
          >
            View All Specialised Services
          </Link>
        </div>
      </div>
    </section>
  );
}
