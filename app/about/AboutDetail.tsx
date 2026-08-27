"use client";

import Image from "next/image";
import { Target, Eye, Flag, Heart } from "lucide-react";
import {
  CORE_GOAL,
  CORE_VALUES,
  INDUSTRIES,
  MISSION,
  VISION,
} from "@/lib/site";
import { images } from "@/lib/images";

export default function AboutDetail() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20 lg:mb-24">
          <div className="w-full order-2 lg:order-1">
            <div className="section-label text-navy/70 text-sm sm:text-base mb-3 sm:mb-4">
              Who We Are
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4 sm:mb-6 leading-tight">
              Protecting People. Strengthening Organisations.
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
              <p>
                NewMaster Health and Safety provides integrated workplace health, safety,
                environmental, training, compliance and wellbeing solutions. We work with
                businesses and workers across Uganda and the wider African market.
              </p>
              <p>
                Our work combines occupational health services, safety and environmental
                consulting, practical training and specialised on-site support. We focus on
                prevention, competence and systems that organisations can actually use.
              </p>
              <p>
                Every workplace has different risks, workforce characteristics and operating
                constraints. Services are therefore adapted to the organisation — whether the
                need is medical examinations, a safety audit, training, occupational hygiene or
                an on-site Medical Clinic.
              </p>
            </div>
          </div>

          <div className="relative w-full order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl w-full">
              <Image
                src={images.aboutTeam}
                alt="African professionals collaborating on workplace health and safety"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mb-16 sm:mb-20">
          <div className="bg-navy rounded-2xl p-6 sm:p-8 text-white diagonal-pattern">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-white/80 text-sm leading-relaxed">{VISION}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{MISSION}</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-6 sm:p-8">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
              <Flag className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Our Core Goal</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{CORE_GOAL}</p>
          </div>
        </div>

        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <div className="section-label text-navy/70 text-sm sm:text-base justify-center mb-3 sm:mb-4">
              Our Core Values
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              <span className="text-navy">What We </span>
              <span className="text-orange-500 italic">Stand For</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((value) => (
              <div key={value.title} className="bg-gray-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <Heart className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-1">{value.title}</h3>
                <p className="text-orange-500 text-sm font-medium mb-2">{value.summary}</p>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-navy rounded-2xl p-6 sm:p-8 lg:p-12 text-white mb-16 sm:mb-20 diagonal-pattern">
          <div className="section-label text-white/70 mb-4">Why NewMaster</div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Prevention-focused support for African workplaces
          </h2>
          <p className="text-white/80 max-w-3xl leading-relaxed mb-6">
            We combine medical competence, safety expertise and practical training. Programmes
            can be customised by industry, delivered at the workplace where needed, and designed
            to support compliance without losing sight of worker wellbeing. We do not publish
            invented client counts, awards or guarantees.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-white/80">
            <li>Integrated health and safety expertise</li>
            <li>Qualified professional support across disciplines</li>
            <li>Custom solutions for different industries</li>
            <li>Responsive client support</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="w-full order-2 lg:order-1">
              <div className="section-label text-navy/70 text-sm sm:text-base mb-3 sm:mb-4">
                Industries We Support
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4 sm:mb-6 leading-tight">
                Equipped to serve diverse workplaces
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                NewMaster Health and Safety is equipped to support organisations in the sectors
                below. This list describes industries we are prepared to serve; it is not a list
                of named clients.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INDUSTRIES.map((industry) => (
                  <div
                    key={industry}
                    className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                    <span className="text-sm font-medium text-navy">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl w-full">
                <Image
                  src={images.industries}
                  alt="Construction and industrial workplace safety in an African setting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
