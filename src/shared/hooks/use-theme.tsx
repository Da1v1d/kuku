import { useTheme as useNextTheme } from "next-themes";

const useTheme = () => {
  const { theme, setTheme } = useNextTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = theme === "dark";

  return { theme, toggleTheme, isDark };
};

export default useTheme;
