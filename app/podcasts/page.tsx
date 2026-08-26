import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import PodcastsGrid from "./PodcastsGrid";

export const metadata = {
  title: "Podcasts",
  description:
    "NewMaster Health and Safety podcast episodes on workplace health, safety leadership, occupational medicine and wellbeing. Listening coming soon.",
};

export default function PodcastsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageBanner
        title="Podcasts"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Podcasts" },
        ]}
      />
      <PodcastsGrid />
      <Newsletter />
      <Footer />
    </main>
  );
}
