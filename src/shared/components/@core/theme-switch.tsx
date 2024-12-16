"use client";
import { Button } from "@/shared/components/buttons";
import useClient from "@/shared/hooks/use-client";
import useTheme from "@/shared/hooks/use-theme";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const isClient = useClient();

  if (!isClient) {
    return null;
  }

  return (
    <div>
      The current theme is: {theme}
      <Button isIconOnly onClick={toggleTheme}></Button>
    </div>
  );
};

export default ThemeSwitcher;
