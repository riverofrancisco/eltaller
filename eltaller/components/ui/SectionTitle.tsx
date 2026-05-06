interface SectionTitleProps {
  titulo: string;
  subtitulo?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionTitle({
  titulo,
  subtitulo,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <div className={`${alignClass} ${className}`}>
      {subtitulo && (
        <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
          {subtitulo}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-base-content">
        {titulo}
      </h2>
      <div
        className={`mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary ${
          align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
        }`}
      />
    </div>
  );
}
