import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import ProgrammeDetail from "@/components/ProgrammeDetail";
import ProgrammeCTA from "@/components/ProgrammeCTA";
import { getProgramme } from "@/lib/programmes";

const programme = getProgramme("flavia");

export const metadata = {
  title: programme?.title,
  description:
    "Flavia is one of the programme areas operated by NewMaster Health and Safety. Programme details will be published here once confirmed.",
};

export default function FlaviaPage() {
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
          { label: "Flavia" },
        ]}
      />
      <ProgrammeDetail programme={programme} />
      <ProgrammeCTA programme={programme} />
      <Footer />
    </main>
  );
}