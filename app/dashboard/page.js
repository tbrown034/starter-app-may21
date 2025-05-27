import Link from "next/link";
import SignInButton from "@/components/buttons/SignInButton";

export default function Dashboard() {
  return (
    <div className="p-8">
      {/* Back Navigation */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Overview of your activity and quick access to key features
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Items
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                --
              </p>
            </div>
            <div className="text-blue-600 dark:text-blue-400 text-2xl">📊</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Active Lists
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                --
              </p>
            </div>
            <div className="text-green-600 dark:text-green-400 text-2xl">
              📋
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                This Month
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                --
              </p>
            </div>
            <div className="text-purple-600 dark:text-purple-400 text-2xl">
              📅
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Streak
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                --
              </p>
            </div>
            <div className="text-orange-600 dark:text-orange-400 text-2xl">
              🔥
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Recent Activity
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  📝
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">
                    No recent activity
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Sign in to see your activity
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  ⭐
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">
                    Placeholder activity item
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Template example
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  📊
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">
                    Another placeholder item
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Will show real data when connected
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                View All Activity
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button className="w-full p-3 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors border border-gray-200 dark:border-gray-600">
                📝 Create New Item
              </button>
              <button className="w-full p-3 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors border border-gray-200 dark:border-gray-600">
                📋 Manage Lists
              </button>
              <button className="w-full p-3 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors border border-gray-200 dark:border-gray-600">
                📊 View Analytics
              </button>
            </div>
          </div>

          {/* Status Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Account Status
            </h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                  👤
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Sign in to access your dashboard
                </p>
                <SignInButton />
              </div>
            </div>
          </div>

          {/* Template Info */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">
              Template Features
            </h4>
            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Responsive dashboard layout</li>
              <li>• Stats widget grid</li>
              <li>• Activity feed component</li>
              <li>• Quick action sidebar</li>
              <li>• Authentication placeholders</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
