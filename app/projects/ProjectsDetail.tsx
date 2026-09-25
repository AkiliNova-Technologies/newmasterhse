"use client";

import Image from "next/image";
import { CheckCircle2, Flame, School, HeartHandshake, Route, Shield } from "lucide-react";
import { projects } from "@/lib/projects";

const icons = [Flame, School, HeartHandshake, Route];

export default function ProjectsDetail() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4 sm:mb-6 leading-tight">
            Building safer environments through practical action
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg px-2">
            NewMaster Health and Safety develops focused projects that address
            real-world health, safety, emergency preparedness, and risk
            management challenges. Each initiative combines assessment,
            practical intervention, education, and continuous improvement.
          </p>
        </div>
      </div>

      {projects.map((project, index) => {
        const Icon = icons[index] ?? Shield;
        const banded = index % 2 === 1;
        const coversBoxClass = banded
          ? "bg-white border border-gray-100"
          : "bg-gray-50";

        return (
          <div
            key={project.id}
            id={project.id}
            className={`scroll-mt-24 sm:scroll-mt-28 ${
              banded ? "bg-gray-light" : "bg-white"
            }`}
          >
            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
              <div
                className={`flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`relative w-full ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-3 w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl">
                    <Icon
                      className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div
                  className={`w-full ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy mb-3 sm:mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div
                    className={`rounded-xl p-5 sm:p-6 mb-6 sm:mb-8 ${coversBoxClass}`}
                  >
                    <h4 className="font-bold text-navy text-base sm:text-lg mb-3 sm:mb-4">
                      What the project covers
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 list-none">
                      {project.areas.slice(0,6).map((item) => (
                        <li key={item} className="flex items-start gap-1.5 sm:gap-2">
                          <CheckCircle2
                            className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="text-xs sm:text-sm text-gray-600">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-navy rounded-xl p-5 sm:p-6 text-white">
                    <h4 className="font-bold text-sm sm:text-base mb-1.5 sm:mb-2">
                      Project Impact
                    </h4>
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}