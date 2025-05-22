import Link from "next/link";

export default function SignOutButton() {
  return (
    <Link
      href="/api/auth/signout"
      className="p-2 border-2 border-black rounded-lg hover:bg-gray-100 active:bg-gray-200 cursor-pointer transition"
    >
      Sign Out
    </Link>
  );
}
