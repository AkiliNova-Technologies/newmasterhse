import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import ServicesDetail from "./ServicesDetail";

export const metadata = {
  title: "Our Services",
  description:
    "Explore occupational health services, safety and environmental consulting, and training from NewMaster Health and Safety.",
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
      <Footer />
    </main>
  );
}
