import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import SpecialisedServicesGrid from "./SpecialisedServicesGrid";

export const metadata = {
  title: "Specialised Services",
  description:
    "On-site Medical Clinics, corporate health camps, remote site medical support, occupational hygiene and workplace wellness programmes from NewMaster Health and Safety.",
};

export default function SpecialisedServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageBanner
        title="Specialised Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Specialised Services" },
        ]}
      />
      <SpecialisedServicesGrid />
      <Footer />
    </main>
  );
}
