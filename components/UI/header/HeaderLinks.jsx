"use client";
import Link from "next/link";

export default function HeaderLinks() {
  const links = [
    { title: "About", href: "/about" },
    { title: "Profile", href: "/profile" },
    { title: "FAQ", href: "/faq" },
  ];

  return (
    <nav className="flex gap-4 text-sm text-gray-700 dark:text-gray-300">
      {links.map(({ title, href }) => (
        <Link
          key={href}
          href={href}
          className="hover:underline hover:text-black dark:hover:text-white transition-colors cursor-pointer"
        >
          {title}
        </Link>
      ))}
    </nav>
  );
}
