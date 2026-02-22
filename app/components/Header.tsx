"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { href: "#fotografija", label: "Fotografija" },
  { href: "#video", label: "Video" },
  { href: "#tehnicko-crtanje", label: "Tehničko crtanje" },
  { href: "#3d-print", label: "3D print" },
  { href: "#kontakt", label: "Kontakt" },
];

const SCROLL_THRESHOLD = 48;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled
    ? "bg-white/80 backdrop-blur-md border-zinc-200/80"
    : "bg-transparent border-transparent";
  const linkClass = scrolled
    ? "text-zinc-600 hover:text-zinc-950"
    : "text-white/90 hover:text-white";
  const menuBtnClass = scrolled
    ? "text-zinc-600 hover:bg-zinc-100"
    : "text-white/90 hover:bg-white/10";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color] duration-300 ease-out ${navBg}`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="LV Studio"
            width={120}
            height={48}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Glavna navigacija">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors duration-300 ${linkClass}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md transition-colors duration-300 md:hidden ${menuBtnClass}`}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Zatvori izbornik" : "Otvori izbornik"}
        >
          <span
            className={`h-0.5 w-5 bg-current transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile nav panel */}
      <div
        className={`overflow-hidden border-t transition-[height,border-color,background-color] duration-300 ease-out md:hidden ${scrolled ? "border-zinc-200/80 bg-white/95 backdrop-blur-md" : "border-white/20 bg-black/30 backdrop-blur-md"} ${mobileOpen ? "h-[280px]" : "h-0"}`}
      >
        <nav className="flex flex-col py-4" aria-label="Mobilna navigacija">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`border-l-2 border-transparent py-3 pl-6 text-sm font-medium transition-colors duration-300 hover:border-[var(--accent)] ${scrolled ? "text-zinc-600 hover:text-zinc-950" : "text-white/90 hover:text-white"}`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
