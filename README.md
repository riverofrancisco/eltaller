# El Taller | Espacio de Arte

Bienvenido a la web de El Taller, desarrollada con Next.js, Supabase y Material-UI.

## Descripción

Este proyecto utiliza Next.js para el renderizado del lado del servidor y la generación de sitios estáticos, Supabase para la gestión de la base de datos y autenticación, y Material-UI para el diseño de la interfaz de usuario.

## Características

- Renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG) con Next.js.
- Autenticación y gestión de base de datos con Supabase.
- Diseño de interfaz de usuario con Material-UI.

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior) o yarn

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/riverofrancisco/eltaller.git
   cd eltaller
   ```
2. Instala las dependencias:

  ```bash
  npm install
  # o
  yarn install
  ```

3. Configura las variables de entorno:
Crea un archivo .env.local en la raíz del proyecto.
Añade tus variables de entorno para Supabase.

  ```
  NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
  NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
  ```

## Ejecución

Para ejecutar el proyecto en modo de desarrollo:

  ```bash
  npm run dev
  # o
  yarn dev
  ```
Abre http://localhost:3000 en tu navegador para ver la aplicación en funcionamiento.
