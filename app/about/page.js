import Link from "next/link";

export default function About() {
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
          About
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Learn more about this project and the technology behind it
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* About the Project */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              About TrevorStack
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                TrevorStack is a modern web development starter template built
                with the latest versions of industry-standard tools. This
                project serves as a foundation for building scalable, performant
                web applications with a focus on developer experience and best
                practices.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The template emphasizes clean code architecture, responsive
                design, and modern development patterns. It's designed to be
                both a learning resource and a production-ready starting point
                for new projects.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Originally created as a template for entertainment ranking
                applications, TrevorStack has evolved into a flexible foundation
                that can be adapted for various project types.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Project Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  Development
                </h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Modern React patterns</li>
                  <li>• Server-side rendering</li>
                  <li>• Component architecture</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  User Experience
                </h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Responsive design</li>
                  <li>• Dark mode support</li>
                  <li>• Accessibility focused</li>
                  <li>• Clean, intuitive UI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Tech Stack */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Tech Stack
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                    React 19
                  </span>
                  <span className="px-2 py-1 bg-black text-white rounded text-xs">
                    Next.js 15
                  </span>
                  <span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">
                    Tailwind CSS 4
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-600 text-white rounded text-xs">
                    PostgreSQL
                  </span>
                  <span className="px-2 py-1 bg-green-600 text-white rounded text-xs">
                    Neon
                  </span>
                  <span className="px-2 py-1 bg-gray-600 text-white rounded text-xs">
                    Prisma
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">
                  Deployment
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-black text-white rounded text-xs">
                    Vercel
                  </span>
                  <span className="px-2 py-1 bg-orange-600 text-white rounded text-xs">
                    Turbopack
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">
                  UI/UX
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-600 text-white rounded text-xs">
                    Headless UI
                  </span>
                  <span className="px-2 py-1 bg-gray-500 text-white rounded text-xs">
                    Heroicons
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Developer Info */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Developer
            </h3>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                TB
              </div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                Trevor Brown
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Junior Web Developer
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:trevorbrown.web@gmail.com"
                  className="block text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  trevorbrown.web@gmail.com
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Project Status */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">
              Current Status
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-600 dark:text-gray-400">
                  UI Components Complete
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="text-gray-600 dark:text-gray-400">
                  Authentication In Progress
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="text-gray-600 dark:text-gray-400">
                  Database Integration Planned
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
