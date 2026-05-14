import { getDictionary, type Locale } from "@/lib/getDictionary";
import SectionTitle from "@/components/ui/SectionTitle";
import ClaseCard from "@/components/ui/ClaseCard";
import DocenteCard from "@/components/ui/DocenteCard";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Link from "next/link";
import { IconArrowRight, IconStarFilled } from "@tabler/icons-react";
import mockData from "@/data/mock.json";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as Locale);
  const { site, classes: clases, teachers: docentes, reviews: testimonios } = mockData;

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-base-200 via-base-100 to-base-100">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/50 dark:bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-80 h-80 bg-secondary/30 dark:bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="container-max section-padding w-full relative z-10">
          <div className="max-w-2xl">
            <span className="badge badge-primary badge-outline font-bold tracking-widest text-xs uppercase mb-4">
              El Taller &quot;Espacio de Arte&quot;
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-base-content leading-tight mb-6">
              {dict.hero.titulo}
            </h1>
            <p className="text-lg md:text-xl text-base-content/70 mb-8 leading-relaxed">
              {dict.hero.subtitulo}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${resolvedParams.lang}/clases`}
                className="btn btn-primary rounded-full btn-lg font-bold shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200 gap-2"
              >
                {dict.hero.cta}
                <IconArrowRight size={18} stroke={1.5} />
              </Link>
              <WhatsAppButton
                phone={site.whatsapp}
                label={dict.hero.ctaContacto}
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CLASES DESTACADAS ──────────────────────────────────── */}
      <section className="section-padding bg-base-100">
        <div className="container-max">
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <SectionTitle
              titulo={dict.clases.titulo}
              subtitulo={dict.clases.subtitulo}
              align="left"
            />
            <Link
              href={`/${resolvedParams.lang}/clases`}
              className="btn btn-ghost btn-sm text-primary gap-1 font-bold"
            >
              {dict.learnMore} <IconArrowRight size={14} stroke={1.5} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clases.slice(0, 3).map((clase) => {
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
                  lang={resolvedParams.lang as Locale}
                />
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link
              href={`/${resolvedParams.lang}/clases`}
              className="btn btn-outline btn-primary rounded-full font-bold gap-2"
            >
              {dict.clases.titulo} <IconArrowRight size={16} stroke={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOBRE NOSOTROS TEASER ──────────────────────────────── */}
      <section className="section-padding bg-base-200">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                titulo={dict.sobreNosotros.titulo}
                subtitulo={dict.sobreNosotros.subtitulo}
                align="left"
              />
              <div className="mt-6 text-base-content/70 leading-relaxed space-y-4">
                {Array.isArray(dict.sobreNosotros.descripcion) ? (
                  <p>{dict.sobreNosotros.descripcion[0]}</p>
                ) : (
                  <p>{dict.sobreNosotros.descripcion}</p>
                )}
                <p className="font-semibold text-primary">
                  {dict.sobreNosotros.mision}
                </p>
              </div>
              <Link
                href={`/${resolvedParams.lang}/sobre-nosotros`}
                className="btn btn-primary rounded-full font-bold mt-6 gap-2"
              >
                {dict.learnMore} <IconArrowRight size={16} stroke={1.5} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {dict.sobreNosotros.valores.map((valor) => (
                <div
                  key={valor.titulo}
                  className="card bg-base-100 shadow-sm border border-base-300 hover:border-primary/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="card-body p-5 gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                    <h3 className="font-bold text-base-content">{valor.titulo}</h3>
                    <p className="text-sm text-base-content/60 leading-relaxed">
                      {valor.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DOCENTES TEASER ────────────────────────────────────── */}
      <section className="section-padding bg-base-100">
        <div className="container-max">
          <SectionTitle
            titulo={dict.docentes.titulo}
            subtitulo={dict.docentes.subtitulo}
            className="mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {docentes.map((docente) => (
              <DocenteCard
                key={docente.id}
                docente={docente}
                clasesItems={dict.clases.items}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href={`/${resolvedParams.lang}/docentes`}
              className="btn btn-outline btn-primary rounded-full font-bold gap-2"
            >
              {dict.docentes.titulo} <IconArrowRight size={16} stroke={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ────────────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-max">
          <SectionTitle
            titulo={resolvedParams.lang === "es" ? "Experiencias con nosotros" : "Experiences with us"}
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonios.map((t) => (
              <div
                key={t.id}
                className="card bg-base-100 shadow-sm border border-base-300"
              >
                <div className="card-body gap-3">
                  <div className="flex gap-1">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <IconStarFilled
                        key={i}
                        size={14}
                        className="text-warning fill-warning"
                      />
                    ))}
                  </div>
                  <p className="text-base-content/70 text-sm leading-relaxed italic">
                    "{t.text}"
                  </p>
                  <p className="font-bold text-sm text-primary">— {t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────── */}
      <section className="section-padding bg-neutral text-neutral-content text-center">
        <div className="container-max max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-primary">
            {resolvedParams.lang === "es"
              ? "¿Te gustaría empezar?"
              : "Ready to start?"}
          </h2>
          <p className="text-neutral-content/70 mb-8 text-lg">
            {resolvedParams.lang === "es"
              ? "Escribinos por WhatsApp y te contamos todo sobre nuestras clases."
              : "Message us on WhatsApp and we'll tell you everything about our classes."}
          </p>
          <WhatsAppButton
            phone={site.whatsapp}
            label={dict.hero.ctaContacto}
            size="lg"
          />
        </div>
      </section>
    </>
  );
}
