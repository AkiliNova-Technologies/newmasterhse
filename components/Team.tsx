"use client";

import Image from "next/image";
import { images } from "@/lib/images";

const disciplines = [
  {
    title: "Occupational Health Professionals",
    description:
      "Practitioners supporting medical examinations, fitness-to-work assessments, surveillance and occupational medical reporting.",
    image: images.medicalPros,
  },
  {
    title: "Safety & Environmental Consultants",
    description:
      "Advisers who assess workplace risk, support audits, inspections and environmental health practice.",
    image: images.consultants,
  },
  {
    title: "Medical Professionals",
    description:
      "Clinicians supporting workplace medical care, screening, vaccination programmes and on-site Medical Clinics.",
    image: images.occupationalHealth,
  },
  {
    title: "Training Facilitators",
    description:
      "Facilitators delivering practical programmes through the NewMaster Institute of Health & Safety.",
    image: images.trainers,
  },
];

export default function Team() {
  return (
    <section id="team" className="relative bg-white pb-16 sm:pb-16 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 dotted-pattern opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-14 lg:mb-16 space-y-4">
          <div className="section-label text-navy/70 text-sm sm:text-base">
            Our Professional Team
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            <span className="text-navy">Disciplines that work</span>{" "}
            <span className="text-orange-500 italic">together</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            NewMaster Health and Safety brings together professionals across occupational health,
            medical practice, safety and environmental consulting, and training. This
            multidisciplinary approach helps connect clinical, technical and practical workplace
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {disciplines.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-6 flex-grow">
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
