import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import NewsGrid from "./NewsGrid";

export const metadata = {
  title: "News",
  description:
    "Workplace health and safety articles from NewMaster Health and Safety covering emergency preparedness, medical examinations, safety culture and risk assessment.",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageBanner
        title="News"
        description="Educational articles and practical guidance on occupational health, workplace safety and prevention."
        image="/images/banners/news-workplace-safety.jpg"
        imageAlt="Workplace safety and emergency preparedness equipment"
        priority
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News" },
        ]}
      />
      <NewsGrid />
      <Footer />
    </main>
  );
}
