"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "../utils/navLinks";

export default function DropdownMenu() {
  const detailsRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event) {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        detailsRef.current.removeAttribute("open");
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape" && detailsRef.current?.hasAttribute("open")) {
        detailsRef.current.removeAttribute("open");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close menu when navigating to a new page
  useEffect(() => {
    if (detailsRef.current?.hasAttribute("open")) {
      detailsRef.current.removeAttribute("open");
    }
  }, [pathname]);

  return (
    <details ref={detailsRef} className="relative">
      <summary className="w-[70px] p-2 border-2 border-black dark:border-white rounded-lg cursor-pointer list-none text-center bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
        Menu
      </summary>
      <div className="absolute right-0 mt-2 w-40 border-2 border-black dark:border-white bg-white dark:bg-gray-900 shadow-lg z-50 rounded-md overflow-hidden">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.order}
              href={link.href}
              className={`flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer ${
                isActive
                  ? "bg-gray-100 dark:bg-gray-800 font-semibold"
                  : "font-normal"
              }`}
            >
              <span className="text-gray-900 dark:text-gray-100">
                {link.title}
              </span>
              {isActive && (
                <span className="text-blue-600 dark:text-blue-400 text-sm">
                  ●
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </details>
  );
}
