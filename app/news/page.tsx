import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
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
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News" },
        ]}
      />
      <NewsGrid />
      <Newsletter />
      <Footer />
    </main>
  );
}
