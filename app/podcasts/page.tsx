import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
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
        description="Conversations on occupational medicine, safety leadership, compliance and worker wellbeing."
        image="/images/banners/podcasts-discussion.jpg"
        imageAlt="Professional microphone prepared for a workplace health and safety discussion"
        priority
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Podcasts" },
        ]}
      />
      <PodcastsGrid />
      <Footer />
    </main>
  );
}
