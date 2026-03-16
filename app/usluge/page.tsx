import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCtaSection from "../components/ContactCtaSection";
import PageHeaderHero from "../components/PageHeaderHero";

export const metadata: Metadata = {
  title: "Usluge | LV Studio",
  description:
    "Fotografiranje, video produkcija, snimanje dronom, tehničko crtanje, 3D modeliranje i 3D print. Sve na jednom mjestu.",
};

function GradientIcon({ id, children }: { id: string; children: ReactNode }) {
  return (
    <svg className="h-10 w-10 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke={`url(#g-${id})`}>
      <defs>
        <linearGradient id={`g-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0040a1" />
          <stop offset="50%" stopColor="#2d7cff" />
          <stop offset="100%" stopColor="#7cc4ff" />
        </linearGradient>
      </defs>
      {children}
    </svg>
  );
}

const icons = {
  camera: (
    <GradientIcon id="camera">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </GradientIcon>
  ),
  video: (
    <GradientIcon id="video">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </GradientIcon>
  ),
  drone: (
    <GradientIcon id="drone">
      <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
      <path d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      <circle cx="12" cy="12" r="3" />
    </GradientIcon>
  ),
  draft: (
    <GradientIcon id="draft">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </GradientIcon>
  ),
  cube: (
    <GradientIcon id="cube">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </GradientIcon>
  ),
  printer: (
    <GradientIcon id="printer">
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </GradientIcon>
  ),
};

const services = [
  {
    title: "Fotografiranje",
    shortDescription: "Profesionalna fotografska dokumentacija",
    description:
      "Nudimo kompletnu fotografsku dokumentaciju — od produkcijske i reklamne fotografije za proizvode, interijere i arhitekturu, do dokumentacije događaja i korporativnih portreta. Osvjetljenje, kompozicija i postprodukcija prilagođeni su svakom projektu.",
    icon: icons.camera,
    featured: true,
  },
  {
    title: "Video produkcija",
    shortDescription: "Od snimanja do gotovog videa",
    description:
      "Kompletna video produkcija: snimanje, montaža, color grading i zvuk. Radimo reklame, promo videe, korporativne prezentacije, kratke dokumentarne filmove i sadržaj za društvene mreže. Organiziramo sve od lokacije do postprodukcije.",
    icon: icons.video,
    featured: false,
  },
  {
    title: "Snimanje dronom",
    shortDescription: "Aerijski snimci iz ptičje perspektive",
    description:
      "Aerijsko snimanje dronom za promoviranje nekretnina, gradevinskih projekata, krajolika i događaja. Dajemo vašem projektu novu dimenziju s jedinstvenim uglovima i panoramskim pogledima koji privlače pozornost.",
    icon: icons.drone,
    featured: false,
  },
  {
    title: "Tehničko crtanje",
    shortDescription: "Precizni CAD crteži i tehnička dokumentacija",
    description:
      "Izrađujemo tehničke crteže prema standardima: izometrijske projekcije, nacrti dijelova, montažni crteži i dokumentacija za proizvodnju. Koristimo CAD alate za preciznost i konzistentnost. Idealno za inženjerske projekte, patentiranje i proizvodni razvoj.",
    icon: icons.draft,
    featured: false,
  },
  {
    title: "3D modeliranje",
    shortDescription: "3D modeli za vizualizaciju i proizvodnju",
    description:
      "Stvaramo 3D modele za različite svrhe: vizualizaciju proizvoda ili arhitekture, animaciju, pripremu za 3D print ili CNC obrad. Od konceptualnog skice do finalnog modela spremnog za proizvodnju ili prezentaciju.",
    icon: icons.cube,
    featured: false,
  },
  {
    title: "3D print",
    shortDescription: "Prototipovi i male serije",
    description:
      "3D printanje prototipova, funkcionalnih dijelova i malih serija. Brza materializacija ideja — od prvog skice do fizičkog modela. Nudimo savjetovanje o materijalima, tehnologiji i optimizaciji za print.",
    icon: icons.printer,
    featured: false,
  },
];

export default function UslugePage() {
  return (
    <>
      <Header forceWhite />
      <main className="relative overflow-hidden bg-zinc-100">
        <PageHeaderHero
          label="Usluge"
          title="Što radimo"
          subtitle="Širok spektar vizualnih i tehničkih usluga — od fotografije i videa do tehničkog crtanja i 3D printanja."
        />

        {/* Services list */}
        <section className="content-width pt-8 sm:pt-12">
          <div className="divide-y divide-zinc-200">
            {services.map((service, i) => (
              <article
                key={service.title}
                className="group grid grid-cols-1 gap-x-12 py-10 md:grid-cols-[1fr_1.6fr] md:py-12"
              >
                {/* Left: icon + title + short desc */}
                <div className="flex flex-col items-center gap-3 text-center md:items-start md:gap-4 md:text-left">
                  {service.icon}
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-zinc-900 transition-colors duration-200 group-hover:text-[#2d7cff] sm:text-2xl">
                      {service.title}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-zinc-400">{service.shortDescription}</p>
                  </div>
                  {/* Description visible only on mobile */}
                  <p className="leading-relaxed text-zinc-600 md:hidden">{service.description}</p>
                </div>

                {/* Right: description — desktop only */}
                <p className="hidden self-center leading-relaxed text-zinc-500 md:block">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <ContactCtaSection />
      </main>
      <Footer />
    </>
  );
}
