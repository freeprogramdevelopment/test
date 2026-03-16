"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import projectsData from "../../data/projects.json";

type Project = {
  id: string;
  name: string;
  year: string;
  tags: string[];
  images: { src: string; alt: string }[];
};

export default function ProjectsGallery() {
  const projects = projectsData.projects as Project[];
  const [active, setActive] = useState<{ projectId: string; index: number } | null>(null);

  const activeProject = active ? projects.find((p) => p.id === active.projectId) : null;
  const images = activeProject?.images ?? [];
  const currentImage = active !== null ? images[active.index] : null;

  const goPrev = () => {
    if (active === null) return;
    setActive({ ...active, index: active.index === 0 ? images.length - 1 : active.index - 1 });
  };

  const goNext = () => {
    if (active === null) return;
    setActive({ ...active, index: (active.index + 1) % images.length });
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <>
      <div className="space-y-3">
        {projects.map((project, i) => {
          const isEven = i % 2 === 0;
          const cover = project.images[0];
          const second = project.images[1];

          return (
            <article
              key={project.id}
              className="group relative h-56 overflow-hidden rounded-2xl bg-zinc-900 cursor-pointer sm:h-72 lg:h-80"
              onClick={() => setActive({ projectId: project.id, index: 0 })}
            >
              {/* Background image */}
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 80vw"
              />
              {/* Overlay — darker on left for text readability */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, rgba(9,9,11,0.82) 0%, rgba(9,9,11,0.5) 55%, rgba(9,9,11,0.1) 100%)",
                }}
              />

              {/* Info */}
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-7 sm:p-10">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white/70 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2
                    className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
                    style={{
                      backgroundImage: "linear-gradient(90deg, #0040a1, #2d7cff, #7cc4ff)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {project.name}
                  </h2>
                </div>
                <div className="flex w-full items-center justify-between">
                  <span className="text-sm text-white/40">{project.year}</span>
                  <span className="relative overflow-hidden rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 group-hover:border-transparent group-hover:text-white">
                    <span
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: "linear-gradient(90deg, #0040a1, #2d7cff, #7cc4ff)" }}
                      aria-hidden
                    />
                    <span className="relative">Pogledaj galeriju →</span>
                  </span>
                </div>
              </div>

              {/* Photo count badge */}
              {project.images.length > 1 && (
                <div className="absolute right-4 top-4 z-10 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {project.images.length} foto
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* Lightbox */}
      {active !== null && currentImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
          >
            Zatvori
          </button>

          {activeProject && (
            <div className="absolute left-4 top-4 sm:left-8">
              <p className="text-sm font-semibold text-white">{activeProject.name}</p>
              <p className="text-xs text-white/50">{active.index + 1} / {images.length}</p>
            </div>
          )}

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Prethodna slika"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Sljedeća slika"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="relative h-[85vh] w-full max-w-5xl px-16 sm:px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Thumbnail strip */}
          <div
            className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActive((a) => a ? { ...a, index: idx } : null)}
                className={`relative h-12 w-12 overflow-hidden rounded-md transition-all duration-200 ${active.index === idx ? "ring-2 ring-white scale-110" : "opacity-50 hover:opacity-80"}`}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="48px" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
