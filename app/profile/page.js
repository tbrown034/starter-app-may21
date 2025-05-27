import Link from "next/link";
import SignInButton from "@/components/buttons/SignInButton";
import SignOutButton from "@/components/buttons/SignOutButton";

export default function Profile() {
  return (
    <div className=" p-8">
      {/* Back Navigation */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Profile
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Manage your account and preferences. Sign in to access your
          personalized content and settings.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <SignInButton />
          <SignOutButton />
        </div>

        {/* Status Message */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 max-w-md mx-auto">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">Status:</span> Authentication not
            configured yet
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
            This is a template placeholder for the profile page
          </p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Coming Soon
          </h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <li>• User authentication</li>
            <li>• Profile customization</li>
            <li>• Account settings</li>
            <li>• Activity history</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Template Features
          </h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <li>• Responsive design</li>
            <li>• Dark mode support</li>
            <li>• Clean navigation</li>
            <li>• Placeholder content</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
