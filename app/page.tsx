import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <CaseStudies />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <Blog />
      <FAQ />
      <Newsletter /> 
      <Footer />
    </main>
  );
}