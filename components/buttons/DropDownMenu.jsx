"use client";

import Link from "next/link";
import { navLinks } from "../utils/navLinks";

export default function DropdownMenu() {
  return (
    <details className="relative">
      <summary className="w-[70px] p-2 border-2 border-black rounded-lg cursor-pointer list-none text-center">
        Menu
      </summary>
      <div className="absolute right-0 mt-2 w-40 border-2 border-black bg-white shadow-lg z-50 rounded-md">
        {navLinks.map((link) => (
          <Link
            key={link.order}
            href={link.href}
            className="block px-4 py-2 hover:underline cursor-pointer"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </details>
  );
}
