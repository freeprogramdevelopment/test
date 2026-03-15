import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ParallaxSection from "./components/ParallaxSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative mt-[-4rem] flex min-h-[85vh] flex-col items-center justify-center px-4 pt-24 pb-20 sm:px-6 lg:px-8">
          <Image
            src="/image.png"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" aria-hidden />
          <div className="content-width relative z-10 flex max-w-2xl flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Fotografija, video, tehničko crtanje i 3D printanje
            </h1>
            <p className="mt-4 text-lg text-white/90 sm:text-xl">
              Jedno mjesto za sve vizualne potrebe.
            </p>
            <a
              href="#usluge"
              className="mt-10 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
            >
              Naše usluge
            </a>
          </div>
        </section>

        {/* Usluge uvod */}
        <section id="usluge" className="border-t border-zinc-200 bg-zinc-50/50 py-16 sm:py-20">
          <div className="content-width max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Što radimo
            </h2>
            <p className="mt-4 text-zinc-600">
              Od snimanja do tiska — pružamo cjelovite usluge za brendove, proizvode i projekte.
            </p>
          </div>
        </section>

        {/* Fotografija – fotografija kao pozadina + parallax */}
        <ParallaxSection
          id="fotografija"
          className="relative scroll-mt-20 overflow-hidden border-t border-zinc-800 py-16 text-white sm:py-20"
          imagePosition="object-left-top"
        >
          <div className="content-width section-in section-in-1 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl lg:block" aria-hidden />
              <div className="rounded-2xl border border-white/10 bg-black/60 p-8 shadow-sm backdrop-blur-sm lg:p-10">
                <span
                  className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]"
                >
                  Usluga
                </span>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Fotografija
                </h2>
                <p className="mt-4 text-zinc-200">
                  Profesionalna fotografija proizvoda, portreta, događaja i korporativnih sadržaja.
                  Kvalitetna postprodukcija i konzistentan vizualni identitet za vaš brend.
                </p>
                <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  Uključeno
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-zinc-200">
                  <li>Proizvodna fotografija</li>
                  <li>Portreti i headshot</li>
                  <li>Događaji i reportaža</li>
                  <li>Korporativni sadržaj</li>
                </ul>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* Video – fotografija kao pozadina + parallax */}
        <ParallaxSection
          id="video"
          className="relative scroll-mt-20 overflow-hidden border-t border-zinc-800 py-16 text-white sm:py-20"
          imagePosition="object-left-bottom"
        >
          <div className="content-width section-in section-in-2 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
              <div
                className="order-1 rounded-2xl border border-white/10 bg-black/60 p-8 shadow-sm backdrop-blur-sm lg:order-1 lg:p-10"
                style={{ borderLeftColor: "var(--accent)" }}
              >
                <span
                  className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]"
                >
                  Usluga
                </span>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Video
                </h2>
                <p className="mt-4 text-zinc-200">
                  Snimanje reklama, promotivnih spotova, dokumentaraca i sadržaja za društvene mreže.
                  Montaža i osnovna color korekcija uključeni.
                </p>
                <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  Uključeno
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-zinc-200">
                  <li>Reklamni i promotivni spotovi</li>
                  <li>Sadržaj za društvene mreže</li>
                  <li>Dokumentarci i intervjui</li>
                  <li>Montaža i postprodukcija</li>
                </ul>
              </div>
              <div className="order-2 relative aspect-[4/3] rounded-2xl lg:block" aria-hidden />
            </div>
          </div>
        </ParallaxSection>

        {/* Tehničko crtanje – fotografija kao pozadina + parallax */}
        <ParallaxSection
          id="tehnicko-crtanje"
          className="relative scroll-mt-20 overflow-hidden border-t border-zinc-800 py-16 text-white sm:py-20"
          imagePosition="object-right-top"
        >
          <div className="content-width section-in section-in-3 relative z-10">
            <div className="flex flex-col gap-10">
              <div className="relative aspect-[21/9] rounded-2xl lg:block" aria-hidden />
              <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-black/60 p-8 shadow-sm backdrop-blur-sm sm:p-10">
                <span
                  className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]"
                >
                  Usluga
                </span>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Tehničko crtanje
                </h2>
                <p className="mt-4 text-zinc-200">
                  CAD crteži, tehnička dokumentacija i vizualizacije za industriju, arhitekturu i
                  proizvodnju. Precizno i prema normama.
                </p>
                <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  Uključeno
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-zinc-200">
                  <li>2D i 3D CAD crteži</li>
                  <li>Tehnička dokumentacija</li>
                  <li>Vizualizacije proizvoda</li>
                  <li>Prilagodbe prema normama</li>
                </ul>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* 3D print – fotografija kao pozadina + parallax */}
        <ParallaxSection
          id="3d-print"
          className="relative scroll-mt-20 overflow-hidden border-t border-zinc-800 py-16 text-white sm:py-20"
          imagePosition="object-right-bottom"
        >
          <div className="content-width section-in section-in-4 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
              <div className="order-1 rounded-2xl bg-black/60 p-8 shadow-lg backdrop-blur-sm lg:order-1 lg:relative lg:z-10 lg:p-10">
                <span
                  className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]"
                >
                  Usluga
                </span>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  3D print
                </h2>
                <p className="mt-4 text-zinc-200">
                  Prototipovi, makete i male serije proizvodnje. Različiti materijali i tehnologije
                  za dizajn, edukaciju ili finalne proizvode.
                </p>
                <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  Uključeno
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-zinc-200">
                  <li>Prototipovi i makete</li>
                  <li>Male serije</li>
                  <li>Dizajn za 3D print</li>
                  <li>Različiti materijali</li>
                </ul>
              </div>
              <div className="order-2 relative aspect-[4/3] rounded-2xl lg:block" aria-hidden />
            </div>
          </div>
        </ParallaxSection>

        {/* CTA / Kontakt */}
        <section
          id="kontakt"
          className="scroll-mt-20 border-t border-zinc-200 bg-zinc-50 py-24 sm:py-28"
        >
          <div className="content-width max-w-2xl space-y-6 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Zainteresirani?
            </h2>
            <p className="text-zinc-600 sm:text-lg">
              Javite nam se za ponudu ili pitanja. Odgovaramo u roku 24 sata.
            </p>
            <p className="pt-4">
              <a
                href="mailto:info@lvstudio.com"
                className="inline-block rounded-full bg-zinc-900 px-10 py-4 text-sm font-medium text-white shadow-md transition-colors hover:bg-black hover:shadow-lg"
              >
                Kontakt
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
