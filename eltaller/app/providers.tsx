"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Evitar errores de hidratación asegurándonos de que el componente esté montado
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider 
      attribute="data-theme" 
      defaultTheme="eltaller" 
      enableSystem={true}
      themes={["eltaller", "eltallerdark"]}
    >
      {children}
    </ThemeProvider>
  );
}
