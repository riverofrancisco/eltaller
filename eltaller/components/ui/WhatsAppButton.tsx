import Link from "next/link";
import { IconBrandWhatsapp } from "@tabler/icons-react";

interface WhatsAppButtonProps {
  phone: string;
  label: string;
  message?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function WhatsAppButton({
  phone,
  label,
  message = "",
  className = "",
  size = "md",
}: WhatsAppButtonProps) {
  const encodedMsg = encodeURIComponent(message);
  const href = `https://wa.me/${phone}${encodedMsg ? `?text=${encodedMsg}` : ""}`;

  const sizeClass = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg",
  }[size];

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`btn btn-success gap-2 rounded-full font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 ${sizeClass} ${className}`}
    >
      <IconBrandWhatsapp size={18} stroke={1.5} />
      {label}
    </a>
  );
}
