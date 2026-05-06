import { getDictionary, type Locale } from "@/lib/getDictionary";
import SectionTitle from "@/components/ui/SectionTitle";
import { IconCalendar } from "@tabler/icons-react";
import type { Metadata } from "next";
import mockData from "@/data/mock.json";

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  return {
    title: dict.actividades.titulo,
    description: dict.actividades.descripcion,
  };
}

export default async function ActividadesPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);
  const { actividades } = mockData;

  return (
    <div className="section-padding container-max">
      <SectionTitle
        titulo={dict.actividades.titulo}
        subtitulo={dict.actividades.subtitulo}
        className="mb-4"
      />
      <p className="text-center text-base-content/60 max-w-2xl mx-auto mb-12">
        {dict.actividades.descripcion}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actividades.map((actividad) => {
          const actDict =
            dict.actividades.items[
              actividad.slug as keyof typeof dict.actividades.items
            ];
          const fecha = new Date(actividad.fecha);
          const fechaStr = fecha.toLocaleDateString(
            params.lang === "es" ? "es-AR" : "en-US",
            { year: "numeric", month: "long", day: "numeric" }
          );

          return (
            <div
              key={actividad.id}
              className={`card bg-base-100 shadow-md border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                actividad.destacada
                  ? "border-primary/40"
                  : "border-base-300"
              }`}
            >
              {actividad.destacada && (
                <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary rounded-t-2xl" />
              )}
              <div className="card-body gap-3">
                <div className="flex items-center gap-2 text-sm text-base-content/50 font-semibold">
                  <IconCalendar size={14} stroke={1.5} className="text-primary" />
                  {fechaStr}
                  {actividad.destacada && (
                    <span className="badge badge-primary badge-sm ml-auto">
                      {params.lang === "es" ? "Destacado" : "Featured"}
                    </span>
                  )}
                </div>
                <h3 className="card-title text-xl font-extrabold">
                  {actDict?.nombre ?? actividad.id}
                </h3>
                <p className="text-base-content/70 text-sm leading-relaxed">
                  {actDict?.descripcion ?? ""}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
