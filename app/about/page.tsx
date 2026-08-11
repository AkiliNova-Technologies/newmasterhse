import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import AboutDetail from "./AboutDetail";
import Team from "@/components/Team";

export const metadata = {
  title: "About Us | NewMaster Occupational Health & Safety",
  description:
    "Learn about NewMaster Occupational Health & Safety — our mission, vision, core values, and the experienced leadership team behind our integrated workplace health, safety, and wellbeing solutions.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageBanner
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutDetail />
      <Team />
      <Newsletter />
      <Footer />
    </main>
  );
}