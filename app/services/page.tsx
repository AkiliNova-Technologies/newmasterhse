import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ServicesDetail from "./ServicesDetail";

export const metadata = {
  title: "Our Services | NewMaster Occupational Health & Safety",
  description:
    "Explore our integrated occupational health, safety, environmental, training, compliance, wellbeing, consulting, and digital solutions for safer, healthier workplaces.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageBanner
        title="Our Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServicesDetail />
      <Newsletter />
      <Footer />
    </main>
  );
}