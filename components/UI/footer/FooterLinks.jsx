// components/UI/footer/FooterLinks.jsx

import Link from "next/link";
import { navLinks } from "../../utils/navLinks";

export default function FooterLinks() {
  return (
    <nav className="flex gap-4 text-xs text-gray-500">
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
