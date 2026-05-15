import { getDictionary, type Locale } from "@/lib/getDictionary";
import SectionTitle from "@/components/ui/SectionTitle";
import { IconCalendar, IconMusic, IconArrowRight, IconMicrophone2 } from "@tabler/icons-react";
import type { Metadata } from "next";
import mockData from "@/data/mock.json";
import Link from "next/link";

type Cancion = { title: string; artist: string; students: string[]; guests: string[] };
type Actividad = {
  id: string;
  slug: string;
  type: string;
  date: string;
  image: string;
  album: string[];
  youtubeUrl?: string;
  featured: boolean;
  songs: Cancion[];
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as Locale);
  return {
    title: dict.actividades.titulo,
    description: dict.actividades.descripcion,
  };
}

export default async function ActividadesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as Locale);
  const { activities: actividades } = mockData as unknown as { activities: Actividad[] };
  const lang = resolvedParams.lang;

  /* Separar por tipo */
  const presentaciones = actividades.filter((a) => a.type === "presentacion");
  const karaoketones = actividades.filter((a) => a.type === "karaoketon");

  function ActividadCard({ actividad }: { actividad: Actividad }) {
    const esPresentacion = actividad.type === "presentacion";
    const itemKey = esPresentacion ? "presentacion-canto" : "karaoketon";
    const actDict =
      dict.actividades.items[itemKey as keyof typeof dict.actividades.items];
    const tipoLabel = esPresentacion
      ? dict.actividades.tipos.presentacion
      : dict.actividades.tipos.karaoketon;
    const frecuenciaLabel = esPresentacion
      ? dict.actividades.etiquetas.anual
      : dict.actividades.etiquetas.trimestral;
    const fechaStr = new Date(actividad.date).toLocaleDateString(
      lang === "es" ? "es-AR" : "en-US",
      { year: "numeric", month: "long", day: "numeric" }
    );

    return (
      <Link
        href={`/${lang}/actividades/${actividad.slug}`}
        className={`card bg-base-100 shadow-md border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group cursor-pointer ${actividad.featured ? "border-primary/40" : "border-base-300 hover:border-primary/30"
          }`}
      >
        {actividad.featured && (
          <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary rounded-t-2xl" />
        )}
        <div className="card-body gap-3">
          {/* Tipo + fecha */}
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`badge badge-sm font-bold ${esPresentacion ? "badge-primary" : "badge-secondary"
                }`}
            >
              {tipoLabel}
            </span>
            <span className="badge badge-ghost badge-sm font-semibold">
              {frecuenciaLabel}
            </span>
            {actividad.featured && (
              <span className="badge badge-warning badge-sm ml-auto">
                {lang === "es" ? "⭐ Destacado" : "⭐ Featured"}
              </span>
            )}
          </div>

          {/* Título */}
          <h3 className="card-title text-xl font-extrabold group-hover:text-primary transition-colors">
            {actDict?.nombre ?? actividad.id}
          </h3>

          {/* Fecha */}
          <div className="flex items-center gap-1.5 text-sm text-base-content/50 font-semibold">
            <IconCalendar size={13} stroke={1.5} className="text-primary" />
            {fechaStr}
          </div>

          {/* Descripción corta */}
          <p className="text-base-content/70 text-sm leading-relaxed line-clamp-2">
            {actDict?.descripcion ?? ""}
          </p>

          {/* Footer: canciones + arrow */}
          <div className="flex items-center justify-between mt-1 pt-3 border-t border-base-200">
            {actividad.songs?.length > 0 ? (
              <span className="flex items-center gap-1.5 text-xs text-base-content/50 font-semibold">
                <IconMusic size={12} stroke={1.5} />
                {actividad.songs.length}{" "}
                {lang === "es" ? "canciones" : "songs"}
              </span>
            ) : (
              <span />
            )}
            <span className="flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all">
              {dict.actividades.verMas}
              <IconArrowRight size={14} stroke={1.5} />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="section-padding container-max">
      <SectionTitle
        titulo={dict.actividades.titulo}
        subtitulo={dict.actividades.subtitulo}
        className="mb-4"
      />
      <p className="text-center text-base-content/60 max-w-2xl mx-auto mb-14">
        {dict.actividades.descripcion}
      </p>

      {/* ── PRESENTACIONES DE CANTO ─────────────────────────────── */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
            <IconMicrophone2 size={18} stroke={1.5} className="text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-base-content">
              {dict.actividades.tipos.presentacion}
            </h2>
            <p className="text-xs text-base-content/50 font-semibold">
              {dict.actividades.etiquetas.anual}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {presentaciones.map((a) => (
            <ActividadCard key={a.id} actividad={a} />
          ))}
        </div>
      </section>

      {/* ── KARAOKETONES ────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-xl bg-secondary/20 flex items-center justify-center">
            <IconMicrophone2 size={18} stroke={1.5} className="text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-base-content">
              {dict.actividades.tipos.karaoketon}
            </h2>
            <p className="text-xs text-base-content/50 font-semibold">
              {dict.actividades.etiquetas.trimestral}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {karaoketones.map((a) => (
            <ActividadCard key={a.id} actividad={a} />
          ))}
        </div>
      </section>
    </div>
  );
}

