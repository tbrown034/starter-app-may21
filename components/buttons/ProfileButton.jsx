import Link from "next/link";

export default function ProfileButton() {
  return (
    <Link
      href="/profile"
      className="p-2 border-2 border-black rounded-lg hover:bg-gray-100 active:bg-gray-200 cursor-pointer transition"
    >
      Profile
    </Link>
  );
}
