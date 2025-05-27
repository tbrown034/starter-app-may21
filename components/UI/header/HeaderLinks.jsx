// components/UI/header/HeaderLinks.jsx
"use client";
import Link from "next/link";
import { navLinks } from "../../utils/navLinks";
import { usePathname } from "next/navigation";

export default function HeaderLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 text-sm text-gray-700 dark:text-gray-300">
      {navLinks.map(({ title, href, order }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={order}
            href={href}
            className={`hover:underline hover:text-black dark:hover:text-white transition-colors cursor-pointer ${
              isActive ? "underline font-semibold" : ""
            }`}
          >
            {title}
          </Link>
        );
      })}
    </nav>
  );
}
