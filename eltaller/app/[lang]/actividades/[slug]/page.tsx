import { getDictionary, type Locale } from "@/lib/getDictionary";
import mockData from "@/data/mock.json";
import type { Metadata } from "next";
import Link from "next/link";
import {
  IconArrowLeft,
  IconCalendar,
  IconMusic,
  IconMicrophone2,
  IconBrandYoutube,
  IconPhoto,
  IconUser,
  IconUserHeart,
  IconUsers,
} from "@tabler/icons-react";
import { notFound } from "next/navigation";

type Cancion = {
  title: string;
  artist: string;
  students: string[];
  guests: string[];
};

type Alumno = {
  id: string;
  name: string;
  lastName: string;
};

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

/* ── metadata dinámica ─────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang as Locale);
  const actividad = (mockData.activities as Actividad[]).find(
    (a) => a.slug === slug
  );
  if (!actividad) return {};

  const itemKey = actividad.type === "presentacion"
    ? "presentacion-canto"
    : "karaoketon";
  const actDict =
    dict.actividades.items[itemKey as keyof typeof dict.actividades.items];

  return {
    title: actDict?.nombre ?? actividad.id,
    description: actDict?.descripcion ?? "",
  };
}

/* ── generateStaticParams ──────────────────────────────────────── */
export async function generateStaticParams() {
  const langs = ["es", "en"];
  return langs.flatMap((lang) =>
    (mockData.activities as Actividad[]).map((a) => ({ lang, slug: a.slug }))
  );
}

/* ── helpers ───────────────────────────────────────────────────── */
function formatFecha(fecha: string, lang: string) {
  return new Date(fecha).toLocaleDateString(
    lang === "es" ? "es-AR" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );
}

/* ── page ──────────────────────────────────────────────────────── */
export default async function ActividadDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang as Locale);
  const actividad = (mockData.activities as Actividad[]).find(
    (a) => a.slug === slug
  );

  if (!actividad) notFound();

  const esPresentacion = actividad.type === "presentacion";
  const itemKey = esPresentacion ? "presentacion-canto" : "karaoketon";
  const actDict =
    dict.actividades.items[itemKey as keyof typeof dict.actividades.items];

  const fechaStr = formatFecha(actividad.date, lang);
  const tipoLabel = esPresentacion
    ? dict.actividades.tipos.presentacion
    : dict.actividades.tipos.karaoketon;
  const frecuenciaLabel = esPresentacion
    ? dict.actividades.etiquetas.anual
    : dict.actividades.etiquetas.trimestral;

  const alumnosList = mockData.students as Alumno[];

  const cancionesConAlumnos = actividad.songs.filter((c) => c.students?.length > 0);
  const cancionesConInvitados = actividad.songs.filter((c) => c.guests?.length > 0);

  return (
    <div className="min-h-screen">
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <div
        className={`relative overflow-hidden py-20 px-4 ${
          esPresentacion
            ? "bg-gradient-to-br from-primary/20 via-base-200 to-secondary/10"
            : "bg-gradient-to-br from-secondary/20 via-base-200 to-primary/10"
        }`}
      >
        {/* Decoración de fondo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-16 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-max relative z-10">
          {/* Breadcrumb */}
          <Link
            href={`/${lang}/actividades`}
            className="inline-flex items-center gap-2 text-sm text-base-content/50 hover:text-primary transition-colors mb-8 font-semibold"
          >
            <IconArrowLeft size={16} stroke={1.5} />
            {dict.actividades.titulo}
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span
              className={`badge badge-lg font-bold ${
                esPresentacion ? "badge-primary" : "badge-secondary"
              }`}
            >
              {tipoLabel}
            </span>
            <span className="badge badge-ghost badge-lg font-semibold">
              {frecuenciaLabel}
            </span>
            {actividad.featured && (
              <span className="badge badge-warning badge-lg font-bold">
                {lang === "es" ? "⭐ Destacado" : "⭐ Featured"}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-base-content mb-4">
            {actDict?.nombre ?? tipoLabel}
          </h1>

          <div className="flex items-center gap-2 text-base-content/60 font-semibold mb-6">
            <IconCalendar size={16} stroke={1.5} className="text-primary" />
            {fechaStr}
          </div>

          <p className="text-base-content/70 max-w-2xl leading-relaxed text-lg">
            {actDict?.descripcion}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mt-8">
            {actividad.youtubeUrl && (
              <a
                href={actividad.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-error rounded-full font-bold gap-2 shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5 transition-all"
              >
                <IconBrandYoutube size={18} stroke={1.5} />
                {dict.actividades.verVideo}
              </a>
            )}
            {actividad.album.length > 0 && (
              <button className="btn btn-outline rounded-full font-bold gap-2">
                <IconPhoto size={18} stroke={1.5} />
                {dict.actividades.verAlbum}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── CONTENIDO PRINCIPAL ──────────────────────────────────── */}
      <div className="section-padding container-max">
        {actividad.songs.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ── COLUMNA IZQUIERDA: resumen ─────────────────────── */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              {/* Stat box */}
              <div className="card bg-base-200 border border-base-300">
                <div className="card-body gap-4">
                  <h2 className="font-extrabold text-base-content text-lg">
                    {lang === "es" ? "Resumen" : "Summary"}
                  </h2>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-base-content/60 flex items-center gap-2">
                        <IconMusic size={14} stroke={1.5} />
                        {lang === "es" ? "Total canciones" : "Total songs"}
                      </span>
                      <span className="font-extrabold text-primary text-xl">
                        {actividad.songs.length}
                      </span>
                    </div>
                    {cancionesConAlumnos.length > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-base-content/60 flex items-center gap-2">
                          <IconUser size={14} stroke={1.5} />
                          {lang === "es" ? "Canciones por Alumnos" : "Songs by Students"}
                        </span>
                        <span className="font-bold text-lg">
                          {cancionesConAlumnos.length}
                        </span>
                      </div>
                    )}
                    {cancionesConInvitados.length > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-base-content/60 flex items-center gap-2">
                          {esPresentacion ? (
                            <IconUsers size={14} stroke={1.5} />
                          ) : (
                            <IconUserHeart size={14} stroke={1.5} />
                          )}
                          {lang === "es" 
                            ? (esPresentacion ? "Canciones en Conjunto" : "Canciones por Invitados") 
                            : (esPresentacion ? "Group Songs" : "Songs by Guests")}
                        </span>
                        <span className="font-bold text-lg">
                          {cancionesConInvitados.length}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Tipo de evento info */}
              <div
                className={`card border ${
                  esPresentacion
                    ? "border-primary/30 bg-primary/5"
                    : "border-secondary/30 bg-secondary/5"
                }`}
              >
                <div className="card-body gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      esPresentacion ? "bg-primary/20" : "bg-secondary/20"
                    }`}
                  >
                    <IconMicrophone2
                      size={20}
                      stroke={1.5}
                      className={
                        esPresentacion ? "text-primary" : "text-secondary"
                      }
                    />
                  </div>
                  <h3 className="font-bold text-base-content">{tipoLabel}</h3>
                  <p className="text-xs text-base-content/60 leading-relaxed">
                    {esPresentacion
                      ? lang === "es"
                        ? "Presentación anual realizada cada diciembre."
                        : "Annual showcase held every December."
                      : lang === "es"
                      ? "Encuentro trimestral abierto a alumnos e invitados."
                      : "Quarterly gathering open to students and guests."}
                  </p>
                </div>
              </div>
            </div>

            {/* ── COLUMNA DERECHA: setlist ────────────────────────── */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-base-content mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <IconMusic size={16} className="text-primary" stroke={1.5} />
                </div>
                {lang === "es" ? "Repertorio" : "Setlist"}
              </h2>

              <div className="flex flex-col gap-3">
                {actividad.songs.map((cancion, i) => {
                  const tieneInvitados = cancion.guests?.length > 0;
                  const tieneAlumnos = cancion.students?.length > 0;
                  return (
                    <div
                      key={i}
                      className={`flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-2xl border transition-all duration-200 hover:shadow-md ${
                        tieneInvitados && !tieneAlumnos
                          ? "border-secondary/30 bg-secondary/5 hover:border-secondary/50"
                          : "border-base-300 bg-base-100 hover:border-primary/30"
                      }`}
                    >
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        {/* Número */}
                        <span className="text-2xl font-extrabold text-base-content/20 w-8 text-center select-none">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Info canción */}
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-base-content leading-tight truncate">
                            {cancion.title}
                          </p>
                          <p className="text-sm text-base-content/50 truncate">
                            {cancion.artist}
                          </p>
                        </div>
                      </div>

                      {/* Intérpretes */}
                      <div className="flex flex-wrap gap-2 md:justify-end pl-12 md:pl-0">
                        {/* Alumnos */}
                        {cancion.students?.map((alumnoId) => {
                          const alumno = alumnosList.find((a) => a.id === alumnoId);
                          if (!alumno) return null;
                          return (
                            <div key={alumno.id} className="badge badge-primary badge-outline h-auto py-1 px-3 text-xs font-semibold">
                              {alumno.name} {alumno.lastName}
                            </div>
                          );
                        })}
                        
                        {/* Invitados */}
                        {cancion.guests?.map((invitado, idx) => (
                          <div key={idx} className="badge badge-secondary h-auto py-1 px-3 font-semibold text-xs flex items-center h-full">
                            {esPresentacion ? (
                              <IconUsers size={12} stroke={2} className="mr-1" />
                            ) : (
                              <IconUserHeart size={12} stroke={2} className="mr-1" />
                            )}
                            {invitado}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── ÁLBUM DE FOTOS (placeholder si vacío) ───────────────── */}
        <div className="mt-16 pt-12 border-t border-base-300">
          <h2 className="text-2xl font-extrabold text-base-content mb-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <IconPhoto size={16} className="text-primary" stroke={1.5} />
            </div>
            {lang === "es" ? "Galería de fotos" : "Photo gallery"}
          </h2>

          {actividad.album.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {actividad.album.map((foto, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl overflow-hidden bg-base-200 border border-base-300"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={foto}
                    alt={`Foto ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 rounded-2xl border-2 border-dashed border-base-300 text-base-content/40 gap-3">
              <IconPhoto size={40} stroke={1} />
              <p className="font-semibold">
                {lang === "es"
                  ? "Las fotos estarán disponibles pronto"
                  : "Photos will be available soon"}
              </p>
            </div>
          )}
        </div>

        {/* ── BACK LINK ───────────────────────────────────────────── */}
        <div className="mt-12 text-center">
          <Link
            href={`/${lang}/actividades`}
            className="btn btn-ghost rounded-full font-bold gap-2 text-primary"
          >
            <IconArrowLeft size={16} stroke={1.5} />
            {lang === "es" ? "Ver todas las actividades" : "View all activities"}
          </Link>
        </div>
      </div>
    </div>
  );
}
