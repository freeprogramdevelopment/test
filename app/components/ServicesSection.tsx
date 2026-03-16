"use client";

import Link from "next/link";
import type { ReactNode } from "react";

function GradientIcon({ id, children }: { id: string; children: ReactNode }) {
  return (
    <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" stroke={`url(#gs-${id})`}>
      <defs>
        <linearGradient id={`gs-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0040a1" />
          <stop offset="50%" stopColor="#2d7cff" />
          <stop offset="100%" stopColor="#7cc4ff" />
        </linearGradient>
      </defs>
      {children}
    </svg>
  );
}

const services = [
  {
    title: "Fotografiranje",
    description: "Profesionalna fotografska dokumentacija za proizvode, događaje i lokacije.",
    icon: <GradientIcon id="cam"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></GradientIcon>,
  },
  {
    title: "Video produkcija",
    description: "Od snimanja do montaže — reklame, promovideos, korporativni sadržaj.",
    icon: <GradientIcon id="vid"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></GradientIcon>,
  },
  {
    title: "Snimanje dronom",
    description: "Aerijski snimci za promoviranje nekretnina, krajolika i događaja.",
    icon: <GradientIcon id="drn"><path d="M12 2v4m0 12v4M2 12h4m12 0h4" /><path d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" /><circle cx="12" cy="12" r="3" /></GradientIcon>,
  },
  {
    title: "Tehničko crtanje",
    description: "Precizni CAD crteži i tehnička dokumentacija za projekte.",
    icon: <GradientIcon id="drf"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></GradientIcon>,
  },
  {
    title: "3D modeliranje",
    description: "3D modeli za vizualizaciju, animaciju i pripremu za proizvodnju.",
    icon: <GradientIcon id="cub"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></GradientIcon>,
  },
  {
    title: "3D print",
    description: "Prototipovi i male serije — brza materializacija ideja u plastiku.",
    icon: <GradientIcon id="prt"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></GradientIcon>,
  },
];

export default function ServicesSection() {
  return (
    <section id="usluge" className="py-16 sm:py-24">
      <div className="content-width">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">

          {/* Left: heading + CTA */}
          <div className="lg:w-[38%] lg:sticky lg:top-24 lg:self-start">
            <div className="inline-block">
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
                Usluge
              </p>
              <div
                className="mt-1.5 h-0.5 w-full rounded-full"
                style={{ background: "linear-gradient(90deg, #0040a1, #2d7cff, #7cc4ff)" }}
              />
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              Što sve radimo
            </h2>
            <p className="mt-4 text-base text-zinc-500 leading-relaxed">
              Širok spektar vizualnih i tehničkih usluga — od fotografije i videa do tehničkog crtanja i 3D printanja.
            </p>
            {/* Desktop only button */}
            <Link
              href="/usluge"
              className="group relative mt-8 hidden items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 lg:inline-flex"
            >
              <span
                className="absolute inset-0"
                style={{ background: "linear-gradient(90deg, #0040a1, #2d7cff, #7cc4ff)" }}
                aria-hidden
              />
              <span
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "linear-gradient(90deg, #7cc4ff, #2d7cff, #0040a1)" }}
                aria-hidden
              />
              <span className="relative">Saznajte više →</span>
            </Link>
          </div>

          {/* Right: services list */}
          <div className="flex-1 divide-y divide-zinc-200">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex items-start gap-5 py-6 transition-colors duration-200 first:pt-0 last:pb-0"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 group-hover:border-[#2d7cff]/30 group-hover:shadow-[0_0_0_3px_rgba(45,124,255,0.08)]">
                  {service.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-zinc-900 transition-colors duration-200 group-hover:text-[#2d7cff]">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-500">{service.description}</p>
                </div>
              </div>
            ))}

            {/* Mobile only button */}
            <div className="pt-8 lg:hidden">
              <Link
                href="/usluge"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300"
              >
                <span
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(90deg, #0040a1, #2d7cff, #7cc4ff)" }}
                  aria-hidden
                />
                <span
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "linear-gradient(90deg, #7cc4ff, #2d7cff, #0040a1)" }}
                  aria-hidden
                />
                <span className="relative">Saznajte više →</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
