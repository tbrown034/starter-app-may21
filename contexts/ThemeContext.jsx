"use client";

import { createContext, use, useState, useEffect } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log("🎨 ThemeProvider: Initializing theme system...");

    const initializeTheme = () => {
      try {
        const savedTheme = localStorage.getItem("theme") || "system";
        console.log("🎨 ThemeProvider: Found saved theme:", savedTheme);

        setThemeState(savedTheme);
        applyTheme(savedTheme);
        setMounted(true);

        console.log("🎨 ThemeProvider: Theme system initialized successfully");
      } catch (error) {
        console.error("🎨 ThemeProvider: Error initializing theme:", error);
        setThemeState("system");
        applyTheme("system");
        setMounted(true);
      }
    };

    initializeTheme();
  }, []);

  useEffect(() => {
    if (!mounted) return;

    console.log(
      "🎨 ThemeProvider: Setting up system theme listener for theme:",
      theme
    );

    try {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleSystemThemeChange = (e) => {
        console.log(
          "🎨 ThemeProvider: System theme changed to:",
          e.matches ? "dark" : "light"
        );

        if (theme === "system") {
          console.log(
            "🎨 ThemeProvider: User is in system mode, applying system preference"
          );
          document.documentElement.classList.toggle("dark", e.matches);
        } else {
          console.log(
            "🎨 ThemeProvider: User has manual override, ignoring system change"
          );
        }
      };

      mediaQuery.addEventListener("change", handleSystemThemeChange);
      console.log("🎨 ThemeProvider: System theme listener added");

      return () => {
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
        console.log("🎨 ThemeProvider: System theme listener removed");
      };
    } catch (error) {
      console.error(
        "🎨 ThemeProvider: Error setting up system theme listener:",
        error
      );
    }
  }, [theme, mounted]);

  const applyTheme = (newTheme) => {
    if (typeof window === "undefined") {
      console.warn("🎨 ThemeProvider: applyTheme called on server, skipping");
      return;
    }

    console.log("🎨 ThemeProvider: Applying theme:", newTheme);

    try {
      if (newTheme === "light") {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        console.log("🎨 ThemeProvider: Light theme applied");
      } else if (newTheme === "dark") {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        console.log("🎨 ThemeProvider: Dark theme applied");
      } else {
        localStorage.removeItem("theme");
        document.documentElement.classList.remove("light", "dark");

        const isDarkSystem = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        document.documentElement.classList.toggle("dark", isDarkSystem);
        console.log(
          "🎨 ThemeProvider: System theme applied, resolved to:",
          isDarkSystem ? "dark" : "light"
        );
      }
    } catch (error) {
      console.error("🎨 ThemeProvider: Error applying theme:", error);
      try {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        console.log("🎨 ThemeProvider: Fallback to light mode applied");
      } catch (fallbackError) {
        console.error("🎨 ThemeProvider: Even fallback failed:", fallbackError);
      }
    }
  };

  const setTheme = (newTheme) => {
    console.log("🎨 ThemeProvider: setTheme called with:", newTheme);

    if (!["light", "dark", "system"].includes(newTheme)) {
      console.error("🎨 ThemeProvider: Invalid theme provided:", newTheme);
      return;
    }

    try {
      setThemeState(newTheme);
      applyTheme(newTheme);
    } catch (error) {
      console.error("🎨 ThemeProvider: Error in setTheme:", error);
    }
  };

  const getResolvedTheme = () => {
    if (typeof window === "undefined") return "light";

    try {
      if (theme === "system") {
        const resolved = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
        return resolved;
      }
      return theme;
    } catch (error) {
      console.error("🎨 ThemeProvider: Error getting resolved theme:", error);
      return "light";
    }
  };

  const isDark = () => {
    if (typeof window === "undefined") return false;

    try {
      return document.documentElement.classList.contains("dark");
    } catch (error) {
      console.error("🎨 ThemeProvider: Error checking isDark:", error);
      return false;
    }
  };

  const value = {
    theme,
    resolvedTheme: getResolvedTheme(),
    setTheme,
    mounted,
    isDark: isDark(),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  try {
    const context = use(ThemeContext);
    if (!context) {
      const error = new Error("useTheme must be used within a ThemeProvider");
      console.error("🎨 useTheme:", error.message);
      throw error;
    }
    return context;
  } catch (error) {
    console.error("🎨 useTheme: Error accessing theme context:", error);
    throw error;
  }
}

export { ThemeContext };
