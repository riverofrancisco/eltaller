import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eltallerespaciodearte.com.ar"),
  title: {
    default: "El Taller — Espacio de Arte",
    template: "%s | El Taller",
  },
  description:
    "El Taller es un espacio de arte y música en Buenos Aires. Clases de música, danza, teatro y más.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-theme="eltaller" className={nunito.className}>
      <body>{children}</body>
    </html>
  );
}
