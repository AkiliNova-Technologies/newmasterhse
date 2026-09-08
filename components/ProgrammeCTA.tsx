import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Programme } from "@/lib/programmes";

export default function ProgrammeCTA({ programme }: { programme: Programme }) {
  const { cta } = programme;

  return (
    <section className="relative bg-navy py-16 sm:py-20 diagonal-pattern overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              {cta.title}
            </h2>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed">
              {cta.description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:flex-shrink-0">
            {cta.primaryExternal ? (
              <a
                href={cta.primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base"
              >
                {cta.primaryLabel}
                <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
              </a>
            ) : (
              <Link
                href={cta.primaryHref}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base"
              >
                {cta.primaryLabel}
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
            )}
            {cta.secondaryLabel && cta.secondaryHref && (
              <Link
                href={cta.secondaryHref}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-colors text-sm sm:text-base"
              >
                {cta.secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}