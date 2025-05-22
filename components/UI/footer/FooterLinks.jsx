"use client";
import Link from "next/link";

export default function FooterLinks() {
  const links = [
    { title: "Privacy", href: "/privacy" },
    { title: "Terms", href: "/terms" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex gap-4 text-xs text-gray-500">
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
