"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  // Both icons are rendered and swapped with CSS so server and client markup
  // match before the theme is known.
  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={cn(
        "relative inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted",
        className
      )}
    >
      <Sun className="size-[18px] rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-[18px] rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100" />
    </button>
  );
}
