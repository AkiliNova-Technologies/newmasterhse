import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import InsightsGrid from "./InsightsGrid";

export const metadata = {
  title: "Insights & Resources | NewMaster Occupational Health & Safety",
  description:
    "Explore our latest insights, articles, and resources on workplace health, safety, occupational wellness, regulatory compliance, and organizational wellbeing.",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PageBanner
        title="Insights & Resources"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insights" },
        ]}
      />
      <InsightsGrid />
      <Newsletter />
      <Footer />
    </main>
  );
}