export default function FooterSocials() {
  return (
    <div className="flex gap-4 justify-center mt-4">
      <a
        href="https://twitter.com/yourhandle"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-sm text-gray-400"
      >
        Twitter
      </a>
      <a
        href="https://github.com/yourhandle"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-sm text-gray-400"
      >
        GitHub
      </a>
    </div>
  );
}
