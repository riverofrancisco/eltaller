"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
      attribute="data-theme" 
      defaultTheme="eltallerdark" 
      enableSystem={false}
      themes={["eltaller", "eltallerdark"]}
      disableTransitionOnChange
      enableColorScheme={false}
    >
      {children}
    </ThemeProvider>
  );
}
