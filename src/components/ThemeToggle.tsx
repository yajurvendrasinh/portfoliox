/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

function getStoredTheme(): "light" | "dark" {
  return localStorage.getItem("theme") === "dark" ? "dark" : "light";
}

// Self-contained theme toggle — manages .dark class, localStorage, meta tag, and
// dispatches a "themechange" CustomEvent so other components (e.g. particles.js) can react
export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getStoredTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#000000" : "#f9f9f9");
    window.dispatchEvent(new CustomEvent("themechange", { detail: theme }));
  }, [theme]);

  return (
    <button
      role="switch"
      aria-checked={theme === "dark"}
      aria-label="Toggle dark mode"
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      className="flex items-center justify-center w-8 h-8 text-ink-faint hover:text-ink transition-colors"
    >
      {theme === "dark" ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
    </button>
  );
}
