"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import type { Locale } from "@/lib/getDictionary";

type NavDict = {
  inicio: string;
  sobreNosotros: string;
  clases: string;
  docentes: string;
  actividades: string;
  contacto: string;
};

interface NavbarProps {
  lang: Locale;
  dict: NavDict;
}

const navLinks = (lang: Locale, dict: NavDict) => [
  { href: `/${lang}`, label: dict.inicio },
  { href: `/${lang}/sobre-nosotros`, label: dict.sobreNosotros },
  { href: `/${lang}/clases`, label: dict.clases },
  { href: `/${lang}/docentes`, label: dict.docentes },
  { href: `/${lang}/actividades`, label: dict.actividades },
  { href: `/${lang}/contacto`, label: dict.contacto },
];

export default function Navbar({ lang, dict }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = navLinks(lang, dict);
  const otherLang: Locale = lang === "es" ? "en" : "es";

  return (
    <nav className="navbar bg-base-100/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-primary/20">
      <div className="container-max w-full flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="El Taller Logo"
            width={40}
            height={40}
            className="rounded-full shadow-sm border border-primary/20 bg-base-100"
          />
          <span className="text-2xl font-extrabold text-primary group-hover:text-black transition-colors duration-200">
            El Taller
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="btn btn-ghost btn-sm text-base-content hover:text-primary hover:bg-primary/10 rounded-full font-semibold transition-all"
            >
              {link.label}
            </Link>
          ))}
          {/* Language switcher */}
          <Link
            href={`/${otherLang}`}
            className="btn btn-outline btn-primary btn-sm rounded-full ml-2 font-bold uppercase"
          >
            {otherLang}
          </Link>
        </div>

        {/* Mobile: hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href={`/${otherLang}`}
            className="btn btn-outline btn-primary btn-xs rounded-full font-bold uppercase"
          >
            {otherLang}
          </Link>
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <IconX size={22} stroke={1.5} /> : <IconMenu2 size={22} stroke={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-base-100 shadow-lg border-t border-primary/20 z-50">
          <div className="flex flex-col p-4 gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="btn btn-ghost justify-start font-semibold text-base-content hover:text-primary hover:bg-primary/10"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
