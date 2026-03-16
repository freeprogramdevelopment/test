import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import ContactCtaSection from "./components/ContactCtaSection";
import FeaturedProjectsSection from "./components/FeaturedProjectsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-zinc-100">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FeaturedProjectsSection />
        <ContactCtaSection />
      </main>
      <Footer />
    </>
  );
}
