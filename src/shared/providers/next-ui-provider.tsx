"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const UIProvider = ({ children }: Props) => {
  return (
    <main suppressHydrationWarning>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </main>
  );
};

export default UIProvider;
