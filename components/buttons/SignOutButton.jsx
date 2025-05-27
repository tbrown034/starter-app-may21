import { signOut } from "@/auth";

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        type="submit"
        className="p-2 border-2 border-black dark:border-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        Sign Out
      </button>
    </form>
  );
}
