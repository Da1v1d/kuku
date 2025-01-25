"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const UIProvider = ({ children }: Props) => {
  return (
    <main suppressHydrationWarning>
      <HeroUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </HeroUIProvider>
    </main>
  );
};

export default UIProvider;
