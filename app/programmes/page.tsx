import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { images } from "@/lib/images";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programmes } from "@/lib/programmes";

export const metadata = {
  title: "Programmes",
  description:
    "Explore NewMaster Health and Safety programmes — the Institute and St Atanansi Occupational Medical Clinic.",
};

export default function ProgrammesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageBanner
        title="Programmes"
        description="Training, medical services and safety solutions through our dedicated programme areas."
        image={images.bannerProgrammes}
        imageAlt="Ugandan adults taking part in a health and safety programme"
        priority
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes" },
        ]}
      />
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4 sm:mb-6 leading-tight">
              Dedicated areas of expertise
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              NewMaster Health and Safety operates through focused programme
              areas, each designed to deliver practical, specialist support
              for different aspects of workplace health, safety and wellbeing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {programmes.map((programme) => {
              const Icon = programme.icon;
              return (
                <Link
                  key={programme.id}
                  href={`/programmes/${programme.slug}`}
                  className="group bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-card transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 sm:mb-3 group-hover:text-orange-500 transition-colors">
                    {programme.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                    {programme.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all">
                    Explore programme
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
