import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import SpecialisedServiceDetails from "./SpecialisedServiceDetails";
import RelatedSpecialisedServices from "@/components/RelatedSpecialisedServices";
import {
  getSpecialisedService,
  specialisedServices,
} from "@/lib/specialised-services";

export async function generateStaticParams() {
  return specialisedServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getSpecialisedService(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getSpecialisedService(slug);

  if (!service) {
    notFound();
  }

  const related = specialisedServices
    .filter((item) => item.slug !== slug)
    .slice(0, 2)
    .map((item) => ({
      slug: item.slug,
      title: item.title,
      description: item.description,
      image: item.image,
      category: item.category,
    }));

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SpecialisedServiceDetails service={service} />
      {related.length > 0 && <RelatedSpecialisedServices services={related} />}
      <Newsletter />
      <Footer />
    </main>
  );
}
