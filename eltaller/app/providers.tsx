"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
      attribute="data-theme" 
      defaultTheme="eltaller" 
      enableSystem={true}
      themes={["eltaller", "eltallerdark"]}
      disableTransitionOnChange
      enableColorScheme={false}
    >
      {children}
    </ThemeProvider>
  );
}
