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
          // Base: cupcake-inspired but with El Taller brand colors
          "primary": "#d1a3ff",          // Violeta marca
          "primary-content": "#1a0030",  // Texto sobre violeta
          "secondary": "#b8edc7",        // Verde marca
          "secondary-content": "#0d2e18",// Texto sobre verde
          "accent": "#f97316",           // Naranja acento
          "accent-content": "#ffffff",
          "neutral": "#1f1f1f",          // Negro
          "neutral-content": "#f5f5f5",
          "base-100": "#ffffff",         // Blanco
          "base-200": "#f9f0ff",         // Violeta muy claro
          "base-300": "#ede9fe",
          "base-content": "#1a0030",
          "info": "#7dd3fc",
          "success": "#b8edc7",
          "warning": "#fde68a",
          "error": "#fca5a5",
        },
      },
    ],
    darkTheme: false,
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
};

export default config;
