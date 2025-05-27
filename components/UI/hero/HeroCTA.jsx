import ProfileButton from "@/components/buttons/ProfileButton";
import SignInButton from "@/components/buttons/SignInButton";
import SignOutButton from "@/components/buttons/SignOutButton";
import Link from "next/link";

export default function HeroCTA() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div>
        <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 mb-3">
          Account
        </h3>
        <div className="flex gap-4 flex-wrap justify-center">
          <SignInButton />
          <SignOutButton />
          <ProfileButton />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 mb-3">
          Explore
        </h3>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/dashboard"
            className="p-2 border-2 border-black rounded-lg dark:border-white hover:bg-gray-100 active:bg-gray-200 cursor-pointer transition dark:hover:bg-gray-700 dark:active:bg-gray-600"
          >
            Dashboard
          </Link>
          <Link
            href="/about"
            className="p-2 border-2 border-black rounded-lg dark:border-white hover:bg-gray-100 active:bg-gray-200 cursor-pointer transition dark:hover:bg-gray-700 dark:active:bg-gray-600"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
