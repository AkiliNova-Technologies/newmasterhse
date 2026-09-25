"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function ProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <section className="relative bg-navy py-16 diagonal-pattern overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-white/70 text-xs sm:text-sm font-medium tracking-wide mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
            Our Projects
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            <span className="text-white block sm:inline">Safety in</span>{" "}
            <span className="text-orange-500 italic block sm:inline">
              Action
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project) => (
            <article
              key={project.id}
              className="bg-navy-light/50 rounded-2xl overflow-hidden border border-white/10 flex flex-col"
            >
              <div className="relative h-48 sm:h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.shortTitle ?? project.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <Link
                  href={`/projects#${project.id}`}
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}