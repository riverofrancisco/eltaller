import Link from "next/link";
import { IconMusic, IconClock, IconUsers } from "@tabler/icons-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

type ClaseItem = {
  id: string;
  slug: string;
  image: string;
  levels: string[];
  duration: string;
  modality: string;
};

type ClaseDict = {
  nombre: string;
  descripcion: string;
};

type ClasesDict = {
  ctaInscripcion: string;
  niveles: Record<string, string>;
  modalidades: Record<string, string>;
};

interface ClaseCardProps {
  clase: ClaseItem;
  dict: ClaseDict;
  clasesDict: ClasesDict;
  whatsapp: string;
  lang: string;
}

export default function ClaseCard({
  clase,
  dict,
  clasesDict,
  whatsapp,
  lang,
}: ClaseCardProps) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl border border-base-300 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group">
      {/* Color top accent bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary rounded-t-2xl" />

      <div className="card-body gap-3">
        {/* Icon */}
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <IconMusic className="text-primary" size={22} stroke={1.5} />
        </div>

        {/* Title */}
        <h3 className="card-title text-xl font-extrabold text-base-content">
          {dict.nombre}
        </h3>

        {/* Description */}
        <p className="text-base-content/70 text-sm leading-relaxed">
          {dict.descripcion}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap gap-2 mt-1">
          <span className="badge badge-ghost gap-1 text-xs font-semibold">
            <IconClock size={11} stroke={1.5} />
            {clase.duration}
          </span>
          <span className="badge badge-ghost gap-1 text-xs font-semibold">
            <IconUsers size={11} stroke={1.5} />
            {clasesDict.modalidades[clase.modality]}
          </span>
          {clase.levels.map((n) => (
            <span
              key={n}
              className="badge badge-primary badge-outline text-xs font-semibold"
            >
              {clasesDict.niveles[n]}
            </span>
          ))}
        </div>

        <div className="card-actions mt-2">
          <WhatsAppButton
            phone={whatsapp}
            label={clasesDict.ctaInscripcion}
            message={`Hola! Quiero información sobre las clases de ${dict.nombre}.`}
            size="sm"
          />
        </div>
      </div>
    </div>
  );
}
