"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedService {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export default function RelatedSpecialisedServices({
  services,
}: {
  services: RelatedService[];
}) {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-3 leading-tight">
            Related{" "}
            <span className="text-orange-500 italic">Specialised Services</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/specialised-services/${service.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/90 rounded-full text-navy text-sm font-medium">
                    {service.category}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm">
                  View service
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
