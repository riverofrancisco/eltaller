# El Taller — Espacio de Arte

Official website for **El Taller, Espacio de Arte** — an arts school based in Argentina, founded in 2005. The site showcases the school's courses, teachers, events, and contact information.

## ✨ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | Main framework (App Router) |
| [React 19](https://react.dev/) | UI |
| [TypeScript](https://www.typescriptlang.org/) | Static typing |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first styling |
| [DaisyUI 4](https://daisyui.com/) | UI components & theming |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark/light mode support |
| [react-image-gallery](https://github.com/xiaolin/react-image-gallery) | Event photo galleries |

## 🗂️ Project Structure

```
eltaller/
├── app/
│   ├── [lang]/               # Internationalized routes
│   │   ├── sobre-nosotros/
│   │   ├── clases/
│   │   ├── docentes/
│   │   ├── actividades/
│   │   └── contacto/
│   ├── layout.tsx
│   └── page.tsx
├── components/               # Reusable components
├── data/
│   └── mock.json             # Site data (teachers, events, setlists)
├── dictionaries/
│   └── es.json               # Spanish content strings
├── lib/
│   └── getDictionary.ts      # i18n utility
└── public/
    └── images/               # Site images and event photo galleries
```

## 🚀 Running Locally

### Requirements

- Node.js 18+
- npm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/riverofrancisco/eltaller.git
cd eltaller/eltaller

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Available Scripts

```bash
npm run dev        # Development server with Turbopack
npm run build      # Production build
npm run start      # Production server
npm run lint       # Lint with ESLint
npm run type-check # Type checking with TypeScript
```

## 🎨 Design System

The project uses a custom DaisyUI theme (`eltaller` / `eltallerdark`) with full light and dark mode support.

**Color Palette:**

| Token | Light | Dark |
|---|---|---|
| `primary` | `#d1a3ff` (violet) | `#d1a3ff` |
| `secondary` | `#b8edc7` (mint green) | `#b8edc7` |
| `accent` | `#f97316` (orange) | `#fb923c` |
| `base-100` | `#ffffff` | `#1a1625` |

**Typography:**
- Headings: **Marcellus** (serif)
- Body: **Quicksand** (sans-serif, 500 weight)

## 📄 License

© El Taller, Espacio de Arte. All rights reserved.
