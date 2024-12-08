"use client";

import Client from "@/shared/components/client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const UIProvider = ({ children }: Props) => {
  const router = useRouter();
  return (
    <Client>
      <NextThemesProvider defaultTheme="dark" attribute="class">
        <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
      </NextThemesProvider>
    </Client>
  );
};

export default UIProvider;
