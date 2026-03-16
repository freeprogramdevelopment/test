import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative mt-[-4rem] flex min-h-[100dvh] flex-col items-center justify-center px-4 pt-24 pb-20 sm:px-6 lg:px-8">
      <Image
        src="/Banner.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0" aria-hidden />

      {/* Scroll indicator */}
      <a
        href="#o-nama"
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors duration-300 hover:text-white"
        aria-label="Skrolaj dolje"
      >
        <span className="text-xs font-medium uppercase tracking-[0.2em]">Scroll</span>
        <span className="relative flex h-10 w-6 items-start justify-center overflow-hidden rounded-full border border-white/30 p-1.5">
          <span
            className="h-1.5 w-1.5 rounded-full bg-white"
            style={{
              animation: "scrollDot 1.8s ease-in-out infinite",
            }}
          />
        </span>
        <style>{`
          @keyframes scrollDot {
            0%   { transform: translateY(0);    opacity: 1; }
            60%  { transform: translateY(18px); opacity: 0; }
            61%  { transform: translateY(0);    opacity: 0; }
            100% { transform: translateY(0);    opacity: 1; }
          }
        `}</style>
      </a>
    </section>
  );
}
