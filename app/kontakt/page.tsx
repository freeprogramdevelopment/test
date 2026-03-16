import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHeaderHero from "../components/PageHeaderHero";
import ContactForm from "./ContactForm";

const socialLinks = [
  { href: "https://instagram.com/lvstudio", label: "Instagram", path: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.903 4.903 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.632zm0 5.25a5.625 5.625 0 100 11.25 5.625 5.625 0 000-11.25zm-4.5 5.25a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm9-3.75a.75.75 0 100-1.5.75.75 0 000 1.5z" },
  { href: "https://facebook.com/lvstudio", label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { href: "https://tiktok.com/@lvstudio", label: "TikTok", path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.3V2h-3.19v12.4a2.9 2.9 0 1 1-2-2.77V8.37A6.09 6.09 0 1 0 15.82 14V7.67a8.1 8.1 0 0 0 4.77 1.56V6.69z" },
  { href: "https://youtube.com/@lvstudio", label: "YouTube", path: "M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.57A3.01 3.01 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3.01 3.01 0 0 0 2.12 2.13C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.57a3.01 3.01 0 0 0 2.12-2.13A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.5v-7l6.2 3.5-6.2 3.5z" },
];

const hours = [
  { day: "Pon – Pet", time: "09:00 – 17:00" },
  { day: "Subota", time: "Po dogovoru" },
  { day: "Nedjelja", time: "Zatvoreno" },
];

export default function KontaktPage() {
  return (
    <>
      <Header forceWhite />
      <main className="relative overflow-hidden bg-zinc-100">
        <PageHeaderHero
          label="Kontakt"
          title="Javite nam se"
          subtitle="Imate projekt na umu? Pišite nam — odgovorimo u najkraćem mogućem roku."
        />

        <section className="content-width pb-12 pt-12 sm:pt-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Forma — djelomično prelazi hero */}
            <div className="order-2 lg:-mt-24 lg:order-2 lg:col-span-3 lg:relative lg:z-10">
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm sm:p-8">
                <h2
                  className="text-lg font-semibold bg-[length:200%_auto] bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #0040a1, #2d7cff, #7cc4ff, #2d7cff)",
                  }}
                >
                  Pošaljite poruku
                </h2>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Informacije o firmi */}
            <div className="order-1 space-y-8 lg:order-1 lg:col-span-2">
              <div>
                <h3
                  className="text-sm font-medium uppercase tracking-wider bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #0040a1, #2d7cff)" }}
                >
                  Kontakt
                </h3>
                <div className="mt-4 space-y-3">
                  <a
                    href="tel:+385991234567"
                    className="block text-zinc-800 transition-colors hover:text-[#2d7cff]"
                  >
                    +385 99 123 4567
                  </a>
                  <a
                    href="mailto:info@lvstudio.hr"
                    className="block text-zinc-800 transition-colors hover:text-[#2d7cff]"
                  >
                    info@lvstudio.hr
                  </a>
                </div>
              </div>

              <div>
                <h3
                  className="text-sm font-medium uppercase tracking-wider bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #0040a1, #2d7cff)" }}
                >
                  Radno vrijeme
                </h3>
                <ul className="mt-4 space-y-2 text-zinc-700">
                  {hours.map(({ day, time }) => (
                    <li key={day} className="flex justify-between gap-4 text-sm">
                      <span>{day}</span>
                      <span className="text-zinc-500">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                  Pratite nas
                </h3>
                <div className="mt-4 flex gap-4">
                  {socialLinks.map(({ href, label, path }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group transition-opacity hover:opacity-80"
                      aria-label={label}
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
                        <defs>
                          <linearGradient id={`kontakt-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0040a1" />
                            <stop offset="55%" stopColor="#2d7cff" />
                            <stop offset="100%" stopColor="#7cc4ff" />
                          </linearGradient>
                        </defs>
                        <path fillRule="evenodd" fill={`url(#kontakt-${label})`} d={path} clipRule="evenodd" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
