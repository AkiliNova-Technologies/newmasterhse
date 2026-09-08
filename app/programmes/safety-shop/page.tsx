import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import ProgrammeDetail from "@/components/ProgrammeDetail";
import ProgrammeCTA from "@/components/ProgrammeCTA";
import { getProgramme } from "@/lib/programmes";

const programme = getProgramme("safety-shop");

export const metadata = {
  title: programme?.title,
  description:
    "Safety Shop is a NewMaster Health and Safety programme providing access to health and safety products, equipment and supplies — from PPE to first aid and fire safety equipment.",
};

export default function SafetyShopPage() {
  if (!programme) return null;

  return (
    <main className="min-h-screen">
      <Header />
      <PageBanner
        title={programme.bannerTitle}
        description={programme.bannerDescription}
        image={programme.bannerImage}
        imageAlt={programme.bannerImageAlt}
        priority
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes", href: "/programmes" },
          { label: "Safety Shop" },
        ]}
      />
      <ProgrammeDetail programme={programme} />
      <ProgrammeCTA programme={programme} />
      <Footer />
    </main>
  );
}