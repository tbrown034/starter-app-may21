import Link from "next/link";
import { auth } from "@/auth";

export default async function ProfileStatusButton() {
  const session = await auth();

  return (
    <>
      {session?.user ? (
        <Link
          href="/profile"
          className="p-2  dark:border-white rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Signed in as {session.user.name}
        </Link>
      ) : (
        <div className="p-2dark:border-white rounded-lg text-sm">
          Status: Not signed in
        </div>
      )}
    </>
  );
}
