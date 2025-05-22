"use client";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-xl font-semibold cursor-pointer hover:underline hover:text-black dark:hover:text-white transition-colors"
    >
      <span>WhatNow</span>
      <span role="img" aria-label="Home">
        🏠
      </span>
    </Link>
  );
}
