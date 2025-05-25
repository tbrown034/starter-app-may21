"use client";

import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure hydration consistency
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Determine current theme: system or explicit
  const currentTheme = theme === "system" ? systemTheme : theme;
  const enabled = currentTheme === "dark";

  const toggleTheme = () => {
    setTheme(enabled ? "light" : "dark");
  };

  return (
    <Switch
      checked={enabled}
      onChange={toggleTheme}
      className={`${
        enabled ? "bg-black" : "bg-gray-200"
      } relative inline-flex h-7 w-14 items-center rounded-full transition-colors`}
    >
      <span
        className={`${
          enabled ? "translate-x-7" : "translate-x-1"
        } inline-block h-5 w-5 transform rounded-full bg-white transition-transform`}
      />
    </Switch>
  );
}
