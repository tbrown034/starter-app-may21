"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global Layout Error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-2xl mx-auto text-center">
            {/* Critical Error Visual */}
            <div className="mb-8">
              <div className="text-6xl mb-4">💥</div>
              <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
                Critical Error
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Application Error</h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                A critical error occurred that prevented the application from
                loading properly.
              </p>
            </div>

            {/* Error Details (Development) */}
            {process.env.NODE_ENV === "development" && error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8 text-left">
                <h3 className="font-medium text-red-800 dark:text-red-400 mb-2">
                  Critical Error Details:
                </h3>
                <code className="text-sm text-red-700 dark:text-red-300 break-all">
                  {error.message}
                </code>
                {error.stack && (
                  <details className="mt-2">
                    <summary className="cursor-pointer text-red-600 dark:text-red-400">
                      Stack Trace
                    </summary>
                    <pre className="text-xs text-red-600 dark:text-red-400 mt-2 whitespace-pre-wrap">
                      {error.stack}
                    </pre>
                  </details>
                )}
              </div>
            )}

            {/* Recovery Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Recovery Options</h2>

              <div className="space-y-4">
                <button
                  onClick={reset}
                  className="w-full p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <div className="text-2xl mb-2">🔄</div>
                  <div className="font-medium">Restart Application</div>
                  <div className="text-sm opacity-90">
                    Try to reload the entire app
                  </div>
                </button>

                <button
                  onClick={() => (window.location.href = "/")}
                  className="w-full p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="text-2xl mb-2">🏠</div>
                  <div className="font-medium">Go to Home</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Navigate to the homepage
                  </div>
                </button>

                <button
                  onClick={() => window.location.reload()}
                  className="w-full p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="text-2xl mb-2">🔥</div>
                  <div className="font-medium">Hard Refresh</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Reload the entire page
                  </div>
                </button>
              </div>
            </div>

            {/* Template Status */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8">
              <h3 className="font-medium text-yellow-800 dark:text-yellow-400 mb-2">
                ⚠️ Template Status
              </h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                This is a development template. Critical errors like this
                typically indicate configuration issues or missing dependencies.
              </p>
            </div>

            {/* Contact */}
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>
                Need help? Contact{" "}
                <a
                  href="mailto:trevorbrown.web@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  trevorbrown.web@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
