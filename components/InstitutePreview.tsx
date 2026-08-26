"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { INSTITUTE_NAME } from "@/lib/site";
import { images } from "@/lib/images";

export default function InstitutePreview() {
  return (
    <section className="relative bg-gray-light py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
            <Image
              src={images.institute}
              alt="African employees attending practical workplace safety training"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="section-label text-navy/70 text-sm sm:text-base mb-4">
              Professional Training
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              <span className="text-navy">{INSTITUTE_NAME}</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              The Institute is NewMaster&apos;s professional training arm. We deliver practical
              health and safety programmes for workers, supervisors and organisations — from first
              aid and fire safety to HSE awareness, risk assessment and ISO management system
              awareness. We do not claim university-level accreditation.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/institute"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base"
              >
                Explore the Institute
              </Link>
              <Link
                href="/institute"
                className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white"
                aria-label="Explore the NewMaster Institute of Health and Safety"
              >
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
