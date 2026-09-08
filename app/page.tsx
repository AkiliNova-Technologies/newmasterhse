import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectsPreview from "@/components/ProjectsPreview";
import Process from "@/components/Process";
import InstitutePreview from "@/components/InstitutePreview";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <ProjectsPreview />
      <Process />
      <InstitutePreview />
      <Blog />
      <FAQ />
      <Footer />
    </main>
  );
}
