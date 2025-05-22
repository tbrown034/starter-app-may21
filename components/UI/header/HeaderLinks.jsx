export default function HeaderLinks() {
  return (
    <nav className="flex gap-4 text-sm text-gray-600 dark:text-gray-300">
      <a href="/about" className="hover:underline">
        About
      </a>
      <a href="/profile" className="hover:underline">
        Profile
      </a>
      <a href="/faq" className="hover:underline">
        FAQ
      </a>
    </nav>
  );
}
