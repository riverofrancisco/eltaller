import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import type { Locale } from "@/lib/getDictionary";
import siteData from "@/data/mock.json";

type FooterDict = {
  derechos: string;
  descripcion: string;
};

type NavDict = {
  inicio: string;
  sobreNosotros: string;
  clases: string;
  docentes: string;
  actividades: string;
  contacto: string;
};

interface FooterProps {
  lang: Locale;
  dict: FooterDict;
  nav: NavDict;
}

export default function Footer({ lang, dict, nav }: FooterProps) {
  const { site } = siteData;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="text-2xl font-extrabold text-primary">
              El Taller
            </span>
            <p className="text-sm text-neutral-content/70 max-w-xs">
              {dict.descripcion}
            </p>
            <div className="flex gap-3 mt-2">
              {site.instagram && (
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-circle btn-ghost btn-sm hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              )}
              {site.facebook && (
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-circle btn-ghost btn-sm hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">
              {lang === "es" ? "Secciones" : "Sections"}
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-neutral-content/80">
              {[
                { href: `/${lang}`, label: nav.inicio },
                { href: `/${lang}/sobre-nosotros`, label: nav.sobreNosotros },
                { href: `/${lang}/clases`, label: nav.clases },
                { href: `/${lang}/docentes`, label: nav.docentes },
                { href: `/${lang}/actividades`, label: nav.actividades },
                { href: `/${lang}/contacto`, label: nav.contacto },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">
              {lang === "es" ? "Contacto" : "Contact"}
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-neutral-content/80">
              <li className="flex items-center gap-2">
                <MapPin size={15} className="text-primary shrink-0" />
                {site.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-primary shrink-0" />
                <a href={`tel:${site.phone}`} className="hover:text-primary transition-colors">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-primary shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-primary transition-colors">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-content/10 mt-10 pt-6 text-center text-xs text-neutral-content/50">
          © {year} El Taller — Espacio de Arte. {dict.derechos}.
        </div>
      </div>
    </footer>
  );
}
