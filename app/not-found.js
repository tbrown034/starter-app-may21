import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto text-center py-16">
        {/* 404 Visual */}
        <div className="mb-8">
          <div className="text-6xl font-bold text-gray-300 dark:text-gray-600 mb-4">
            404
          </div>
          <div className="text-4xl mb-4">🚧</div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>

        {/* Navigation Options */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Where would you like to go?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/"
              className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-center group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                🏠
              </div>
              <div className="font-medium text-gray-900 dark:text-white">
                Home
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Back to the main page
              </div>
            </Link>

            <Link
              href="/profile"
              className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-center group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                👤
              </div>
              <div className="font-medium text-gray-900 dark:text-white">
                Profile
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Manage your account
              </div>
            </Link>

            <Link
              href="/dashboard"
              className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-center group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                📊
              </div>
              <div className="font-medium text-gray-900 dark:text-white">
                Dashboard
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                View your overview
              </div>
            </Link>

            <Link
              href="/about"
              className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-center group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                ℹ️
              </div>
              <div className="font-medium text-gray-900 dark:text-white">
                About
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Learn more
              </div>
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <p>
            If you think this is a mistake, try refreshing the page or{" "}
            <a
              href="mailto:trevorbrown.web@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
