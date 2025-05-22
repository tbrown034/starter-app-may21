import ProfileButton from "@/components/buttons/ProfileButton";
import SignInButton from "@/components/buttons/SignInButton";
import SignOutButton from "@/components/buttons/SignOutButton";

export default function HeroCTA() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div>
        <h3 className="text-sm font-semibold uppercase text-gray-500 mb-2">
          Account
        </h3>
        <div className="flex gap-4 flex-wrap justify-center">
          <SignInButton />
          <SignOutButton />
          <ProfileButton />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase text-gray-500 mb-2">
          Explore
        </h3>
        <div className="flex gap-4">
          <button className="p-2 border-2 border-black rounded-lg hover:bg-gray-100 active:bg-gray-200 cursor-pointer transition">
            Lists
          </button>
          <button className="p-2 border-2 border-black rounded-lg hover:bg-gray-100 active:bg-gray-200 cursor-pointer transition">
            Discover
          </button>
        </div>
      </div>
    </div>
  );
}
