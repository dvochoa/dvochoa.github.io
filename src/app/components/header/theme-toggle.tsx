"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const iconWidth = 20;
const iconHeight = 20;

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // Determining the theme requires being mounted client side so by rendering only on the client we can avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button onClick={() => (currentTheme == "dark" ? setTheme("light") : setTheme("dark"))}>
      <Image
        src={
          (currentTheme || "light") === "dark"
            ? "/images/dark-mode-icon.svg"
            : "/images/light-mode-icon.svg"
        }
        width={iconWidth}
        height={iconHeight}
        alt={(currentTheme || "light") === "dark" ? "Light mode icon" : "Dark mode icon"}
      />
    </button>
  );
}
