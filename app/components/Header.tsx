"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Početna" },
  { href: "/usluge", label: "Usluge" },
  { href: "/projekti", label: "Projekti" },
  { href: "/kontakt", label: "Kontakt" },
];

const SCROLL_THRESHOLD = 48;

export default function Header({ forceWhite = false }: { forceWhite?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isWhite = forceWhite || scrolled || mobileOpen;

  const navBg = isWhite
    ? "bg-white border-white/40"
    : "bg-transparent border-transparent";
  const linkClass = isWhite ? "text-zinc-800" : "text-white/90";
  const mobileLinkClass = isWhite ? "text-zinc-800" : "text-white/90";
  const menuBtnClass = isWhite
    ? "text-zinc-800 hover:bg-zinc-50"
    : "text-white/90 hover:bg-white/10";

  const normalizePath = (value: string) => {
    if (value.length > 1 && value.endsWith("/")) return value.slice(0, -1);
    return value;
  };

  const currentPath = normalizePath(pathname);

  const isLinkActive = (href: string) => {
    const targetPath = normalizePath(href);
    if (targetPath === "/") return currentPath === "/";
    return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
  };

  return (
    <header
      className={`sticky -top-px z-50 transition-[background-color,border-color] duration-300 ease-out ${isWhite ? "border-b border-white/40 bg-white" : "border-b border-transparent bg-transparent"}`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo2.png"
            alt="LV Studio"
            width={120}
            height={48}
            className={`h-10 w-auto transition-[filter] duration-300 ${!isWhite ? "brightness-0 invert" : ""}`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Glavna navigacija">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link brand-gradient-hover text-sm font-medium transition-colors duration-300 ${linkClass} ${isLinkActive(href) ? "nav-link-active brand-gradient-active" : ""}`}
            >
              {label}
            </Link>
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

      {/* Mobile nav panel — absolute, floats over page */}
      <div
        className={`absolute left-0 right-0 top-full overflow-hidden border-t transition-[max-height,opacity] duration-300 ease-out md:hidden ${isWhite ? "border-zinc-100 bg-white" : "border-white/10 bg-zinc-900/95 backdrop-blur-md"} ${mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col py-4" aria-label="Mobilna navigacija">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`brand-gradient-hover border-l-2 py-3 pl-6 text-sm font-medium transition-colors duration-300 ${isLinkActive(href) ? "border-[#2d7cff] brand-gradient-active" : "border-transparent hover:border-[#2d7cff]"} ${mobileLinkClass}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
