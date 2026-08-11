import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact Us | NewMaster Occupational Health & Safety",
  description:
    "Get in touch with NewMaster Occupational Health & Safety. Request a consultation, book a workplace audit, schedule medical examinations, or discuss your organization's health and safety needs.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageBanner
        title="Contact Us"
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