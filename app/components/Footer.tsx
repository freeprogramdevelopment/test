import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#fotografija", label: "Fotografija" },
  { href: "#video", label: "Video" },
  { href: "#tehnicko-crtanje", label: "Tehničko crtanje" },
  { href: "#3d-print", label: "3D print" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="content-width py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="LV Studio"
              width={100}
              height={40}
              className="h-8 w-auto opacity-90"
            />
          </Link>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1 sm:justify-end" aria-label="Podnožje">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} LV Studio. Sva prava pridržana.
        </div>
      </div>
    </footer>
  );
}
