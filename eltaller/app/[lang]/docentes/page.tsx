import { getDictionary, type Locale } from "@/lib/getDictionary";
import SectionTitle from "@/components/ui/SectionTitle";
import DocenteCard from "@/components/ui/DocenteCard";
import type { Metadata } from "next";
import mockData from "@/data/mock.json";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as Locale);
  return {
    title: dict.docentes.titulo,
    description: dict.docentes.descripcion,
  };
}

export default async function DocentesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as Locale);
  const { docentes } = mockData;

  return (
    <div className="section-padding container-max">
      <SectionTitle
        titulo={dict.docentes.titulo}
        subtitulo={dict.docentes.subtitulo}
        className="mb-4"
      />
      <p className="text-center text-base-content/60 max-w-2xl mx-auto mb-12">
        {dict.docentes.descripcion}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {docentes.map((docente) => (
          <DocenteCard
            key={docente.id}
            docente={docente}
            clasesItems={dict.clases.items}
          />
        ))}
      </div>
    </div>
  );
}
