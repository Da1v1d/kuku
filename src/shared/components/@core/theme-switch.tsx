"use client";
import { Button } from "@/shared/components/buttons";
import useClient from "@/shared/hooks/use-client";
import useTheme from "@/shared/hooks/use-theme";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const isClient = useClient();

  if (!isClient) {
    return null;
  }

  const Icon = theme === "dark" ? Moon : Sun;
  return (
    <Button color="default" isIconOnly onClick={toggleTheme}>
      <Icon />
    </Button>
  );
};

export default ThemeSwitcher;
