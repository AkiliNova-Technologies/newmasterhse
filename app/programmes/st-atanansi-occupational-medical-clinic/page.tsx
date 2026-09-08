import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import ProgrammeDetail from "@/components/ProgrammeDetail";
import ProgrammeCTA from "@/components/ProgrammeCTA";
import { getProgramme } from "@/lib/programmes";

const programme = getProgramme("st-atanansi-occupational-medical-clinic");

export const metadata = {
  title: programme?.title,
  description:
    "St Atanansi Occupational Medical Clinic is a NewMaster Health and Safety programme delivering occupational medical services, workplace medical assessments, health screening and fitness-to-work support.",
};

export default function StAtanansiPage() {
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
          { label: "St Atanansi Occupational Medical Clinic" },
        ]}
      />
      <ProgrammeDetail programme={programme} />
      <ProgrammeCTA programme={programme} />
      <Footer />
    </main>
  );
}