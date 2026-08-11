import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import CaseStudiesGrid from "./CaseStudiesGrid";

export const metadata = {
  title: "Case Studies | NovaCore Consulting",
  description:
    "Explore our completed consulting projects and see how we've helped organizations achieve measurable results.",
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageBanner
        title="Case Studies"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies" },
        ]}
      />
      <CaseStudiesGrid />
      <Newsletter />
      <Footer />
    </main>
  );
}