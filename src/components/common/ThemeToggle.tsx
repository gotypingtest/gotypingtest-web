"use client";

import { useTheme } from "@/context/ThemeContext";
import mainHeaderCss from "./headerfooter.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={mainHeaderCss.themeToggleBtn}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      <i
        className={
          theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon"
        }
      />
    </button>
  );
}
