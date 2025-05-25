// components/UI/header/Header.jsx
import DropdownMenu from "@/components/buttons/DropDownMenu";
import HeaderLinks from "./HeaderLinks";
import HeaderLogo from "./HeaderLogo";

export default function Header() {
  return (
    <header className="w-full px-4 py-3 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between">
      <HeaderLogo />
      <HeaderLinks />
      <DropdownMenu />
    </header>
  );
}
