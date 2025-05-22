// components/UI/header/HeaderLinks.jsx

import Link from "next/link";
import { navLinks } from "../../utils/navLinks";

export default function HeaderLinks() {
  return (
    <nav className="flex gap-4 text-sm text-gray-700 dark:text-gray-300">
      {navLinks.map(({ title, href, order }) => (
        <Link
          key={order}
          href={href}
          className="hover:underline hover:text-black dark:hover:text-white transition-colors cursor-pointer"
        >
          {title}
        </Link>
      ))}
    </nav>
  );
}
