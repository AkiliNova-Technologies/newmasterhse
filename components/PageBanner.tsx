import Image from "next/image";
import Link from "next/link";

interface PageBannerProps {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  priority?: boolean;
  breadcrumbs?: {
    label: string;
    href?: string;
  }[];
}

const DEFAULT_BANNER_IMAGE = "/images/banners/services-safety-professional.jpg";

export default function PageBanner({
  title,
  description,
  image = DEFAULT_BANNER_IMAGE,
  imageAlt = "",
  priority = false,
  breadcrumbs = [],
}: PageBannerProps) {
  return (
    <section className="relative isolate flex min-h-[300px] items-center overflow-hidden bg-navy pt-16 sm:min-h-[360px] sm:pt-20 lg:min-h-[420px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        className="-z-20 object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/65" />
      <div className="absolute inset-0 -z-10 bg-black/15" />
      <div className="absolute inset-0 -z-10 dotted-pattern opacity-20 mix-blend-overlay" />

      <div className="w-full max-w-7xl mx-auto px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          {breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-5 sm:mb-6">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/75 sm:text-sm">
                {breadcrumbs.map((crumb, index) => (
                  <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className="rounded-sm transition-colors hover:text-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="font-medium text-orange-300" aria-current="page">
                        {crumb.label}
                      </span>
                    )}
                    {index < breadcrumbs.length - 1 && (
                      <span className="text-white/45" aria-hidden="true">
                        /
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base lg:text-lg">
              {description}
            </p>
          )}
          <div className="mt-6 h-1 w-16 rounded-full bg-orange-500 sm:w-20" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
