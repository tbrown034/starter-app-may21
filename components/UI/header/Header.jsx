import HeaderLinks from "./HeaderLinks";
import HeaderLogo from "./HeaderLogo";
import HeaderMore from "./HeaderMore";

export default function Header() {
  return (
    <header className="w-full px-4 py-3 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between">
      <HeaderLogo />
      <HeaderLinks />
      <HeaderMore />
    </header>
  );
}
