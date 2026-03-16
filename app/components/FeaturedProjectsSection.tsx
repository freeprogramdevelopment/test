"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import projectsData from "../../data/projects.json";

type SizeKey = "big" | "wide" | "tall" | "small";

const sizeClasses: Record<SizeKey, string> = {
  big: "col-span-2 row-span-2",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  small: "col-span-1 row-span-1",
};

const sizePattern: SizeKey[] = ["big", "small", "tall", "small", "wide", "small", "small"];

export default function FeaturedProjectsSection() {
  const allImages = projectsData.featured;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const goPrev = () => {
    setActiveIndex((i) => (i === null ? null : i === 0 ? allImages.length - 1 : i - 1));
  };
  const goNext = () => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % allImages.length));
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <section id="projects" className="py-16">
      <div className="content-width">
        <div className="mb-12">
          <div className="inline-block">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Izdvojeni projekti
            </h2>
            <div
              className="mt-1.5 h-0.5 rounded-full"
              style={{
                background: "linear-gradient(90deg, #0040a1, #2d7cff, #7cc4ff)",
              }}
            />
          </div>
          <p className="mt-4 max-w-lg text-sm text-zinc-500 sm:text-base">
            Najbolji radovi — fotografija, video, crtanje.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 auto-rows-[140px] sm:grid-cols-4 sm:gap-3 sm:auto-rows-[180px]">
          {allImages.map((item, i) => {
            const size = sizePattern[i % sizePattern.length];
            return (
              <button
                key={`${item.sectionId}-${i}`}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`group relative overflow-hidden bg-zinc-200 ${sizeClasses[size]} text-left`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </button>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projekti"
            className="rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Vidi vise
          </Link>
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
          >
            Zatvori
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Prethodna slika"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Sljedeća slika"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="relative h-[85vh] w-full max-w-5xl px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allImages[activeIndex].src}
              alt={allImages[activeIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
