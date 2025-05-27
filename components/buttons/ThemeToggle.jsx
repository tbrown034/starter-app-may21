"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  try {
    const { theme, resolvedTheme, setTheme, mounted, isDark } = useTheme();

    if (!mounted) {
      return (
        <details className="relative">
          <summary className="w-[70px] p-2 border-2 border-black dark:border-white rounded-lg cursor-pointer list-none text-center bg-white dark:bg-gray-900 opacity-50">
            💻
          </summary>
        </details>
      );
    }

    const themeOptions = [
      { id: "light", label: "Light", icon: "☀️" },
      { id: "dark", label: "Dark", icon: "🌙" },
      { id: "system", label: "System", icon: "💻" },
    ];

    const currentTheme =
      themeOptions.find((t) => t.id === theme) || themeOptions[2];

    const handleThemeChange = (newTheme) => {
      console.log("🎨 ThemeToggle: User selected theme:", newTheme);

      try {
        setTheme(newTheme);
        if (document.activeElement) {
          document.activeElement.blur();
        }
      } catch (error) {
        console.error("🎨 ThemeToggle: Error changing theme:", error);
      }
    };

    return (
      <details className="relative">
        <summary
          className="w-[70px] p-2 border-2 border-black dark:border-white rounded-lg cursor-pointer list-none text-center bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          title={`Current theme: ${currentTheme.label}${
            theme === "system" ? ` (${resolvedTheme})` : ""
          }`}
        >
          <span className="block text-sm">{currentTheme.icon}</span>
        </summary>
        <div className="absolute right-0 mt-2 w-44 border-2 border-black dark:border-white bg-white dark:bg-gray-900 shadow-lg z-50 rounded-md overflow-hidden">
          <div className="py-1">
            {themeOptions.map((option) => {
              const isActive = theme === option.id;
              const showResolvedState = option.id === "system" && isActive;

              return (
                <button
                  key={option.id}
                  onClick={() => handleThemeChange(option.id)}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors flex items-center gap-3 ${
                    isActive
                      ? "bg-gray-100 dark:bg-gray-800 font-semibold"
                      : "font-normal"
                  }`}
                >
                  <span className="text-base">{option.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-900 dark:text-gray-100">
                        {option.label}
                      </span>
                      {isActive && (
                        <span className="text-xs text-green-600 dark:text-green-400">
                          ✓
                        </span>
                      )}
                    </div>
                    {showResolvedState && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        Currently: {resolvedTheme} {isDark ? "🌙" : "☀️"}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-2 bg-gray-50 dark:bg-gray-800">
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Active: {resolvedTheme} mode {isDark ? "🌙" : "☀️"}
            </div>
          </div>
        </div>
      </details>
    );
  } catch (error) {
    console.error("🎨 ThemeToggle: Error rendering component:", error);

    return (
      <div className="w-[70px] p-2 border-2 border-red-500 rounded-lg text-center bg-red-50 text-red-700">
        <span className="text-xs">Error</span>
      </div>
    );
  }
}
