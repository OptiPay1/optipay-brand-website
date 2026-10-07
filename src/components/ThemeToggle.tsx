"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center p-1 rounded-full bg-slate-200/70 dark:bg-slate-800/80 border border-slate-300/60 dark:border-white/10 h-9 w-36" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div
      role="group"
      aria-label="Theme mode switcher"
      className="flex items-center p-0.5 rounded-full bg-slate-200/80 dark:bg-white/10 border border-slate-300/70 dark:border-white/10 shadow-inner"
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
          !isDark
            ? "bg-white text-slate-900 shadow-sm"
            : "text-slate-500 hover:text-slate-200"
        }`}
        title="Switch to Light Mode"
      >
        <Sun className="w-3.5 h-3.5 text-amber-500" />
        <span>Light</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
          isDark
            ? "bg-slate-900 text-white dark:bg-sky-500 dark:text-white shadow-sm"
            : "text-slate-600 hover:text-slate-900"
        }`}
        title="Switch to Dark Mode"
      >
        <Moon className="w-3.5 h-3.5 text-sky-400" />
        <span>Dark</span>
      </button>
    </div>
  );
}
