import type { Metadata } from "next";
import { Marcellus, Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eltallerespaciodearte.com.ar"),
  title: {
    default: "El Taller — Espacio de Arte",
    template: "%s | El Taller",
  },
  description:
    "El Taller es un espacio de arte y música en Buenos Aires. Clases de canto, instrumento, teatro y más.",
  icons: {
    icon: "/favicon.ico",
  },
};

import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className={`${marcellus.variable} ${quicksand.variable} ${quicksand.className}`}>
      <body suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
