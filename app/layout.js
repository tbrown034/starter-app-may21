import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/UI/footer/Footer";
import Header from "@/components/UI/header/Header";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TrevorStack",
  description:
    "Template using Nextjs, react, tailwind, authjs, neon, vercel, postgres with latest versions as of at least May 21, 2025.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚧</text></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                console.log('🎨 Theme Init Script: Starting theme initialization');

                try {
                  var theme = localStorage.getItem('theme');
                  var isDarkSystem = window.matchMedia('(prefers-color-scheme: dark)').matches;

                  console.log('🎨 Theme Init Script: Found saved theme:', theme);
                  console.log('🎨 Theme Init Script: System preference is dark:', isDarkSystem);

                  document.documentElement.classList.remove('light', 'dark');

                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                    console.log('🎨 Theme Init Script: Applied light theme');
                  } else if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    console.log('🎨 Theme Init Script: Applied dark theme');
                  } else {
                    if (isDarkSystem) {
                      document.documentElement.classList.add('dark');
                      console.log('🎨 Theme Init Script: Applied system dark theme');
                    } else {
                      document.documentElement.classList.add('light');
                      console.log('🎨 Theme Init Script: Applied system light theme');
                    }
                  }

                  console.log('🎨 Theme Init Script: Theme initialization completed successfully');
                } catch (e) {
                  console.error('🎨 Theme Init Script: Error during initialization:', e);
                  document.documentElement.classList.add('light');
                  console.log('🎨 Theme Init Script: Fallback to light mode applied');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-gray-900 flex flex-col items-center justify-between min-h-screen`}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
