import { getDictionary, type Locale } from "@/lib/getDictionary";
import SectionTitle from "@/components/ui/SectionTitle";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as Locale);
  return {
    title: dict.sobreNosotros.titulo,
    description: dict.sobreNosotros.descripcion,
  };
}

export default async function SobreNosotrosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as Locale);
  const { sobreNosotros } = dict;

  return (
    <div className="section-padding container-max">
      <SectionTitle
        titulo={sobreNosotros.titulo}
        subtitulo={sobreNosotros.subtitulo}
        className="mb-10"
      />

      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-lg text-base-content/70 leading-relaxed mb-6">
          {sobreNosotros.descripcion}
        </p>
        <p className="text-base-content/60 leading-relaxed italic border-l-4 border-primary pl-4 text-left">
          {sobreNosotros.mision}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sobreNosotros.valores.map((valor, i) => (
          <div
            key={valor.titulo}
            className="card bg-base-100 shadow-md border border-base-300 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="card-body gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-extrabold text-lg">
                {i + 1}
              </div>
              <h3 className="font-extrabold text-base-content text-lg">
                {valor.titulo}
              </h3>
              <p className="text-sm text-base-content/60 leading-relaxed">
                {valor.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
