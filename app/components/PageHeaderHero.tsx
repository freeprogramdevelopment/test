type PageHeaderHeroProps = {
  label: string;
  title: string;
  subtitle?: string;
};

export default function PageHeaderHero({ label, title, subtitle }: PageHeaderHeroProps) {
  return (
    <section className="relative bg-zinc-900 py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(45, 124, 255, 0.25), transparent), radial-gradient(ellipse 60% 40% at 80% 0%, rgba(124, 196, 255, 0.12), transparent)",
        }}
        aria-hidden
      />
      <div className="content-width relative">
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
            {label}
          </p>
          <div
            className="mt-1.5 h-0.5 w-full rounded-full"
            style={{ background: "linear-gradient(90deg, #0040a1, #2d7cff, #7cc4ff)" }}
          />
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-xl text-lg text-zinc-400 sm:text-xl">{subtitle}</p>
        )}
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(244,244,245,0.02) 15%, rgba(244,244,245,0.07) 30%, rgba(244,244,245,0.15) 45%, rgba(244,244,245,0.32) 58%, rgba(244,244,245,0.55) 70%, rgba(244,244,245,0.75) 82%, rgba(244,244,245,0.92) 92%, #f4f4f5 100%)",
        }}
        aria-hidden
      />
    </section>
  );
}
