import { IconUser } from "@tabler/icons-react";

type Docente = {
  id: string;
  name: string;
  photo: string;
  specialties: string[];
};

type ClasesItemsDict = Record<string, { nombre: string; descripcion: string }>;

interface DocenteCardProps {
  docente: Docente;
  clasesItems: ClasesItemsDict;
}

export default function DocenteCard({ docente, clasesItems }: DocenteCardProps) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl border border-base-300 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 text-center">
      <div className="card-body items-center gap-3">
        {/* Avatar */}
        <div className="avatar placeholder">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-content ring-4 ring-primary/20">
            <IconUser size={36} stroke={1.5} className="m-auto mt-5" />
          </div>
        </div>

        <div>
          <h3 className="font-extrabold text-lg text-base-content">
            {docente.name}
          </h3>
          <p className="text-sm text-base-content/60 font-semibold mt-0.5">
            {docente.specialties
              .map((i) => clasesItems[i]?.nombre ?? i)
              .join(" · ")}
          </p>
        </div>

        <div className="flex flex-wrap gap-1 justify-center mt-1">
          {docente.specialties.map((inst) => (
            <span
              key={inst}
              className="badge badge-primary badge-outline text-xs font-semibold"
            >
              {clasesItems[inst]?.nombre ?? inst}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
