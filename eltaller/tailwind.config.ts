import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        eltaller: {
          "primary": "#d1a3ff",
          "primary-content": "#1a0030",
          "secondary": "#b8edc7",
          "secondary-content": "#0d2e18",
          "accent": "#f97316",
          "accent-content": "#ffffff",
          "neutral": "#1f1f1f",
          "neutral-content": "#f5f5f5",
          "base-100": "#ffffff",
          "base-200": "#f9f0ff",
          "base-300": "#ede9fe",
          "base-content": "#1a0030",
          "info": "#7dd3fc",
          "success": "#b8edc7",
          "warning": "#fde68a",
          "error": "#fca5a5",
        },
      },
      {
        eltallerdark: {
          "primary": "#d1a3ff",          // Mismo violeta pero resaltará sobre oscuro
          "primary-content": "#1a0030",
          "secondary": "#b8edc7",        // Mismo verde
          "secondary-content": "#0d2e18",
          "accent": "#fb923c",
          "accent-content": "#ffffff",
          "neutral": "#110e16",
          "neutral-content": "#d1d5db",
          "base-100": "#1a1625",         // Carbón con matiz violeta (calma)
          "base-200": "#13101c",         // Más oscuro para contraste
          "base-300": "#231f2e",         // Más claro para capas
          "base-content": "#e5e1f0",     // Blanco suave con matiz violeta
          "info": "#7dd3fc",
          "success": "#b8edc7",
          "warning": "#fde68a",
          "error": "#fca5a5",
          "--rounded-btn": "1.9rem",      // Mantener suavidad en bordes
        },
      },
    ],
    darkTheme: "eltallerdark",
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
};

export default config;
