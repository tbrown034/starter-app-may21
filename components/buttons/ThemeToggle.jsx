"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { setTheme, mounted, isDark } = useTheme();

  if (!mounted) {
    return (
      <button className="w-[70px] p-2 border-2 border-black dark:border-white rounded-lg cursor-pointer text-center bg-white dark:bg-gray-900 opacity-50">
        💻
      </button>
    );
  }

  // Determine what we'll switch TO (not what we currently are)
  const willSwitchTo = isDark ? "light" : "dark";
  const icon = willSwitchTo === "light" ? "☀️" : "🌙";
  const label = willSwitchTo === "light" ? "Light" : "Dark";

  const handleToggle = () => {
    console.log("🎨 ThemeToggle: Toggling to:", willSwitchTo);
    setTheme(willSwitchTo);
  };

  return (
    <button
      onClick={handleToggle}
      className="w-[70px] p-2 border-2 border-black dark:border-white rounded-lg cursor-pointer text-center bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      title={`Switch to ${label} mode`}
    >
      <span className="block text-sm">{icon}</span>
    </button>
  );
}
