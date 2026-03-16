import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/usluge", label: "Usluge" },
  { href: "/projekti", label: "Projekti" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="content-width pt-12 pb-8 lg:pb-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-4">
            <Link href="/" className="shrink-0">
              <Image
                src="/logo2.png"
                alt="LV Studio"
                width={120}
                height={48}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="max-w-xs text-sm text-white">
              Fotografija, video, tehničko crtanje i 3D printanje. Jedno mjesto za sve vizualne potrebe.
            </p>
            <div className="flex gap-5">
              <a
                href="https://instagram.com/lvstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-1"
                aria-label="Instagram"
              >
                <span className="relative block h-5 w-5">
                  <svg className="h-5 w-5 text-white transition-opacity duration-200 group-hover:opacity-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.903 4.903 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.632zm0 5.25a5.625 5.625 0 100 11.25 5.625 5.625 0 000-11.25zm-4.5 5.25a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm9-3.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg className="absolute inset-0 h-5 w-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" viewBox="0 0 24 24" aria-hidden>
                    <defs>
                      <linearGradient id="igBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0040A1" />
                        <stop offset="55%" stopColor="#2D7CFF" />
                        <stop offset="100%" stopColor="#7CC4FF" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#igBlueGrad)"
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.903 4.903 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.632zm0 5.25a5.625 5.625 0 100 11.25 5.625 5.625 0 000-11.25zm-4.5 5.25a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm9-3.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="https://facebook.com/lvstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-1"
                aria-label="Facebook"
              >
                <span className="relative block h-5 w-5">
                  <svg className="h-5 w-5 text-white transition-opacity duration-200 group-hover:opacity-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <svg className="absolute inset-0 h-5 w-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" viewBox="0 0 24 24" aria-hidden>
                    <defs>
                      <linearGradient id="fbBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0040A1" />
                        <stop offset="55%" stopColor="#2D7CFF" />
                        <stop offset="100%" stopColor="#7CC4FF" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#fbBlueGrad)" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </span>
              </a>
              <a
                href="https://tiktok.com/@lvstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-1"
                aria-label="TikTok"
              >
                <span className="relative block h-5 w-5">
                  <svg className="h-5 w-5 text-white transition-opacity duration-200 group-hover:opacity-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.3V2h-3.19v12.4a2.9 2.9 0 1 1-2-2.77V8.37A6.09 6.09 0 1 0 15.82 14V7.67a8.1 8.1 0 0 0 4.77 1.56V6.69z" />
                  </svg>
                  <svg className="absolute inset-0 h-5 w-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" viewBox="0 0 24 24" aria-hidden>
                    <defs>
                      <linearGradient id="ttBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0040A1" />
                        <stop offset="55%" stopColor="#2D7CFF" />
                        <stop offset="100%" stopColor="#7CC4FF" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#ttBlueGrad)" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.3V2h-3.19v12.4a2.9 2.9 0 1 1-2-2.77V8.37A6.09 6.09 0 1 0 15.82 14V7.67a8.1 8.1 0 0 0 4.77 1.56V6.69z" />
                  </svg>
                </span>
              </a>
              <a
                href="https://youtube.com/@lvstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-1"
                aria-label="YouTube"
              >
                <span className="relative block h-5 w-5">
                  <svg className="h-5 w-5 text-white transition-opacity duration-200 group-hover:opacity-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.57A3.01 3.01 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3.01 3.01 0 0 0 2.12 2.13C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.57a3.01 3.01 0 0 0 2.12-2.13A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.5v-7l6.2 3.5-6.2 3.5z" />
                  </svg>
                  <svg className="absolute inset-0 h-5 w-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" viewBox="0 0 24 24" aria-hidden>
                    <defs>
                      <linearGradient id="ytBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0040A1" />
                        <stop offset="55%" stopColor="#2D7CFF" />
                        <stop offset="100%" stopColor="#7CC4FF" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#ytBlueGrad)" d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.57A3.01 3.01 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3.01 3.01 0 0 0 2.12 2.13C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.57a3.01 3.01 0 0 0 2.12-2.13A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.5v-7l6.2 3.5-6.2 3.5z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 sm:items-end">
            <nav className="flex flex-col gap-3" aria-label="Footer navigacija">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="brand-gradient-hover text-sm font-medium text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-6 text-center">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} LV Studio. Sva prava pridržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
