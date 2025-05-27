import Link from "next/link";

export default function SignOutButton() {
  return (
    <Link
      href="/api/auth/signout"
      className="p-2 border-2 border-black rounded-lg dark:border-white  hover:bg-gray-100 active:bg-gray-200 cursor-pointer dark:hover:bg-gray-700 dark:active:bg-gray-600 transition"
    >
      Sign Out
    </Link>
  );
}
