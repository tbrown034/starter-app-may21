export default function FooterInfo() {
  return (
    <div className="text-xs text-gray-500 text-center py-6">
      <p>&copy; {new Date().getFullYear()} TrevorStack. All rights reserved.</p>
      <p className="mt-1">
        Built by Trevor Brown. Feedback?{" "}
        <a
          href="mailto:trevorbrown.web@gmail.com"
          className="underline hover:text-gray-700"
        >
          Email me
        </a>
      </p>
    </div>
  );
}
