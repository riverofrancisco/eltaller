import { getDictionary, type Locale } from "@/lib/getDictionary";
import SectionTitle from "@/components/ui/SectionTitle";
import ClaseCard from "@/components/ui/ClaseCard";
import type { Metadata } from "next";
import mockData from "@/data/mock.json";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);
  return {
    title: dict.clases.titulo,
    description: dict.clases.descripcion,
  };
}

export default async function ClasesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);
  const { site, clases } = mockData;

  return (
    <div className="section-padding container-max">
      <SectionTitle
        titulo={dict.clases.titulo}
        subtitulo={dict.clases.subtitulo}
        className="mb-4"
      />
      <p className="text-center text-base-content/60 max-w-2xl mx-auto mb-12">
        {dict.clases.descripcion}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clases.map((clase) => {
          const claseDict =
            dict.clases.items[clase.id as keyof typeof dict.clases.items];
          if (!claseDict) return null;
          return (
            <ClaseCard
              key={clase.id}
              clase={clase}
              dict={claseDict}
              clasesDict={dict.clases}
              whatsapp={site.whatsapp}
              lang={resolvedParams.lang}
            />
          );
        })}
      </div>
    </div>
  );
}
