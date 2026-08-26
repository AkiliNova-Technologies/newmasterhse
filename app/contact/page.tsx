import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact NewMaster Health and Safety in Kampala/Kasangati or Mbarara to request a quotation, book occupational medical services, arrange training or discuss onsite medical support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageBanner
        title="Contact Us"
        description="Talk to our team about occupational health services, workplace training, safety audits or specialised support."
        image="/images/banners/contact-consultation.jpg"
        imageAlt="African professionals discussing workplace health and safety support"
        priority
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />
      <Contact />
      <Footer />
    </main>
  );
}
