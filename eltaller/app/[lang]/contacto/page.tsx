import { getDictionary, type Locale } from "@/lib/getDictionary";
import SectionTitle from "@/components/ui/SectionTitle";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
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
    title: dict.contacto.titulo,
    description: dict.contacto.descripcion,
  };
}

export default async function ContactoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as Locale);
  const { site } = mockData;

  return (
    <div className="section-padding container-max">
      <SectionTitle
        titulo={dict.contacto.titulo}
        subtitulo={dict.contacto.subtitulo}
        className="mb-4"
      />
      <p className="text-center text-base-content/60 max-w-2xl mx-auto mb-12">
        {dict.contacto.descripcion}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Contact actions */}
        <div className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body gap-6">
            <h3 className="font-extrabold text-xl text-base-content">
              {resolvedParams.lang === "es" ? "Escribinos" : "Get in touch"}
            </h3>
            <div className="flex flex-col gap-4">
              <WhatsAppButton
                phone={site.whatsapp}
                label={dict.contacto.whatsappCta}
                size="md"
                className="w-full justify-center"
              />
              <a
                href={`mailto:${site.email}`}
                className="btn btn-outline btn-primary rounded-full w-full gap-2"
              >
                <IconMail size={16} stroke={1.5} />
                {dict.contacto.emailCta}
              </a>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="card bg-base-200 border border-base-300">
          <div className="card-body gap-5">
            <h3 className="font-extrabold text-xl text-base-content">
              {resolvedParams.lang === "es" ? "Información" : "Information"}
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <IconMapPin className="text-primary mt-1 shrink-0" size={18} stroke={1.5} />
                <div>
                  <p className="font-semibold text-sm text-base-content/50 uppercase tracking-wider">
                    {dict.contacto.direccion}
                  </p>
                  <p className="text-base-content">{site.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconPhone className="text-primary mt-1 shrink-0" size={18} stroke={1.5} />
                <div>
                  <p className="font-semibold text-sm text-base-content/50 uppercase tracking-wider">
                    {dict.contacto.telefono}
                  </p>
                  <a href={`tel:${site.phone}`} className="hover:text-primary transition-colors">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconMail className="text-primary mt-1 shrink-0" size={18} stroke={1.5} />
                <div>
                  <p className="font-semibold text-sm text-base-content/50 uppercase tracking-wider">
                    {dict.contacto.email}
                  </p>
                  <a href={`mailto:${site.email}`} className="hover:text-primary transition-colors break-all">
                    {site.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
