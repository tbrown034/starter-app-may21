"use client";
import Link from "next/link";

export default function FooterSocials() {
  const socials = [
    { name: "Twitter", href: "https://twitter.com/yourhandle" },
    { name: "GitHub", href: "https://github.com/yourhandle" },
  ];

  return (
    <div className="flex gap-4 justify-center mt-2 text-sm text-gray-400">
      {socials.map(({ name, href }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-black dark:hover:text-white transition-colors cursor-pointer"
        >
          {name}
        </Link>
      ))}
    </div>
  );
}
