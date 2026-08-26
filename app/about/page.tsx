import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import AboutDetail from "./AboutDetail";
import Team from "@/components/Team";

export const metadata = {
  title: "About Us",
  description:
    "Learn about NewMaster Health and Safety — our vision, mission, core goal, values and the industries we are equipped to support across Uganda and Africa.",
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
      <Footer />
    </main>
  );
}
