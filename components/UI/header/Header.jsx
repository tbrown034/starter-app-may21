// components/UI/header/Header.jsx
import DropdownMenu from "@/components/buttons/DropDownMenu";
import HeaderLinks from "./HeaderLinks";
import HeaderLogo from "./HeaderLogo";
import ThemeToggle from "@/components/buttons/ThemeToggle";

export default function Header() {
  return (
    <header className="w-full px-4 py-3 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between bg-white dark:bg-gray-900 transition-colors">
      <HeaderLogo />

      {/* Hidden on small, shown from md and up */}
      <div className="hidden md:flex gap-6">
        <HeaderLinks />
      </div>

      {/* Always shown */}
      <div className="flex gap-2">
        <DropdownMenu />
        <ThemeToggle />
      </div>
    </header>
  );
}
