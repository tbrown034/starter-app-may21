export default function FooterLinks() {
  return (
    <div className="flex gap-4 text-sm text-gray-500">
      <a href="/about" className="hover:underline">
        About
      </a>
      <a href="/privacy" className="hover:underline">
        Privacy
      </a>
      <a href="/terms" className="hover:underline">
        Terms
      </a>
    </div>
  );
}
