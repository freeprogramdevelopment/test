import Link from "next/link";

export default function ContactCtaSection() {
  return (
    <section id="contact" className="bg-zinc-100 pb-24 pt-4">
      <div className="content-width">
        <div className="relative overflow-hidden rounded-2xl bg-zinc-900">
          {/* Gradient glow */}
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, #2d7cff 0%, transparent 70%)" }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #7cc4ff 0%, transparent 70%)" }}
            aria-hidden
          />

          <div className="relative z-10 px-8 py-16 sm:px-14 sm:py-20">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

              {/* Left */}
              <div className="max-w-2xl">
                <div className="mb-3 inline-block">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.3em]"
                    style={{
                      backgroundImage: "linear-gradient(90deg, #0040a1, #2d7cff, #7cc4ff)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Kontakt
                  </p>
                  <div
                    className="mt-1.5 h-0.5 w-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #0040a1, #2d7cff, #7cc4ff)" }}
                  />
                </div>
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Imate projekt<br />na umu?
                </h2>
                <p className="mt-5 max-w-lg text-base text-zinc-400 sm:text-lg">
                  Javite nam se — dogovorimo ideju, termin i cijenu. Odgovorimo u roku 24h.
                </p>
              </div>

              {/* Right */}
              <div className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
                <Link
                  href="/kontakt"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 text-sm font-semibold text-white transition-all duration-300"
                >
                  <span
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{ background: "linear-gradient(90deg, #0040a1, #2d7cff, #7cc4ff)" }}
                    aria-hidden
                  />
                  <span
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "linear-gradient(90deg, #7cc4ff, #2d7cff, #0040a1)" }}
                    aria-hidden
                  />
                  <span className="relative">Pošaljite upit →</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
