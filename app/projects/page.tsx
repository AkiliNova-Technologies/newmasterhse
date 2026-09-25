import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { images } from "@/lib/images";
import ProjectsDetail from "./ProjectsDetail";

export const metadata = {
  title: "Our Projects",
  description:
    "Explore FireSafe, School Safety, HeSDeP and Travel Safe — practical health and safety initiatives from NewMaster Health and Safety that prevent risks and strengthen preparedness.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageBanner
        title="Our Projects"
        description="Practical health and safety initiatives designed to prevent risks, strengthen preparedness, and create safer communities, workplaces, schools, and journeys."
        image={images.bannerProjects}
        imageAlt="Ugandan project team delivering a community health and safety programme"
        priority
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
      />
      <ProjectsDetail />
      <Footer />
    </main>
  );
}