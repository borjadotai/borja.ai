"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const inactiveStyles = "p-1 text-black-foreground";
const activeStyles =
  "p-1 border border-white-terciary dark:border-0 text-black dark:text-white bg-white-primary dark:bg-black-terciary rounded-xl";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10" />;
  }

  return (
    <div className="flex space-x-1 rounded-xl bg-white-secondary dark:bg-black-secondary p-1">
      <button
        onClick={() => setTheme("light")}
        className={isLight ? activeStyles : inactiveStyles}
      >
        <Sun />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={isLight ? inactiveStyles : activeStyles}
      >
        <Moon />
      </button>
    </div>
  );
};

export default ThemeSwitch;
