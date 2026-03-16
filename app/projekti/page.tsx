import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCtaSection from "../components/ContactCtaSection";
import PageHeaderHero from "../components/PageHeaderHero";
import ProjectsGallery from "./ProjectsGallery";

export default function ProjektiPage() {
  return (
    <>
      <Header forceWhite />
      <main className="relative overflow-hidden bg-zinc-100">
        <PageHeaderHero
          label="Portfolio"
          title="Projekti koji govore sami za sebe"
          subtitle="Svaki projekt je priča — od arhitekture i nekretnina do interijera i brendova."
        />

        <section className="content-width py-8 sm:py-12">
          <ProjectsGallery />
        </section>

        <ContactCtaSection />
      </main>
      <Footer />
    </>
  );
}
