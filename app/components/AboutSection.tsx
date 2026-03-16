import Image from "next/image";

const stats = [
  { value: "150+", label: "Završenih projekata" },
  { value: "5+", label: "Godina iskustva" },
  { value: "80+", label: "Zadovoljnih klijenata" },
];

export default function AboutSection() {
  return (
    <section id="o-nama" className="py-16 sm:py-24">
      <div className="content-width">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">

          {/* Image */}
          <div className="relative lg:w-[45%]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/slika3.jpg"
                alt="LV Studio tim na poslu"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              {/* Gradient overlay na dnu */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(9,9,11,0.4) 0%, transparent 60%)",
                }}
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xl sm:-right-6">
              <p
                className="text-3xl font-bold"
                style={{
                  backgroundImage: "linear-gradient(90deg, #0040a1, #2d7cff, #7cc4ff)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                }}
              >
                5+
              </p>
              <p className="mt-0.5 text-sm text-zinc-500">Godina iskustva</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-[55%]">
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
                O nama
              </p>
              <div
                className="mt-1.5 h-0.5 w-full rounded-full"
                style={{ background: "linear-gradient(90deg, #0040a1, #2d7cff, #7cc4ff)" }}
              />
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              Pretvaramo ideje<br className="hidden sm:block" /> u vizualnu stvarnost
            </h2>

            <p className="mt-6 text-base leading-relaxed text-zinc-500">
              LV Studio je vizualni produkcijski studio koji spaja fotografiju, video i tehničku preciznost. Radimo sve od reklamnih kampanja i aerial snimki do 3D printanja i tehničke dokumentacije — sve pod jednim krovom.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-500">
              Svaki projekt tretiramo ozbiljno, bez obzira na veličinu. Brzi smo, precizni i uvijek u roku. Naš cilj je jednostavan — da vam isporučimo materijal koji radi za vas.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-zinc-200 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-2xl font-bold sm:text-3xl"
                    style={{
                      backgroundImage: "linear-gradient(90deg, #0040a1, #2d7cff, #7cc4ff)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
