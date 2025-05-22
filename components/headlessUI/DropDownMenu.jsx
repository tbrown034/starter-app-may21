// components/headlessUI/DropDownMenu.jsx

"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import { navLinks } from "../utils/navLinks";

export default function DropdownMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="p-2 border-2 border-black rounded-lg hover:bg-gray-100 active:bg-gray-200 cursor-pointer">
        Menu
      </MenuButton>

      <MenuItems
        anchor="bottom end"
        className="absolute mt-2 w-40 origin-top-right rounded-md border-2 border-black bg-white shadow-lg focus:outline-none z-50"
      >
        {navLinks.map((link) => (
          <MenuItem key={link.order} as="div">
            {({ focus }) => (
              <Link
                href={link.href}
                className={`block px-4 py-2 ${
                  focus ? "bg-gray-100" : ""
                } hover:underline cursor-pointer`}
              >
                {link.title}
              </Link>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
