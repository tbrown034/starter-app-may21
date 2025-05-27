"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global Error:", error);
  }, [error]);

  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto text-center py-16">
        {/* Error Visual */}
        <div className="mb-8">
          <div className="text-6xl mb-4">⚠️</div>
          <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
            Something went wrong
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Oops! An Error Occurred
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            We encountered an unexpected error. Don&apos;t worry, it&apos;s not
            your fault.
          </p>
        </div>

        {/* Error Details (Development) */}
        {process.env.NODE_ENV === "development" && error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8 text-left">
            <h3 className="font-medium text-red-800 dark:text-red-400 mb-2">
              Development Error Details:
            </h3>
            <code className="text-sm text-red-700 dark:text-red-300 break-all">
              {error.message}
            </code>
          </div>
        )}

        {/* Action Buttons */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            What would you like to do?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <button
              onClick={reset}
              className="p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-center group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                🔄
              </div>
              <div className="font-medium">Try Again</div>
              <div className="text-sm opacity-90">Refresh this page</div>
            </button>

            <Link
              href="/"
              className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-center group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                🏠
              </div>
              <div className="font-medium text-gray-900 dark:text-white">
                Go Home
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Back to safety
              </div>
            </Link>
          </div>

          {/* Quick Navigation */}
          <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Or try these pages:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link
                href="/profile"
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Profile
              </Link>
              <Link
                href="/dashboard"
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/about"
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <p>
            If this problem persists, please{" "}
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
