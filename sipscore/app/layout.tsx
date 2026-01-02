import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SipScore - Discover the Best Boba",
  description: "Rate and discover boba shops near you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧋</span>
                <span className="text-xl font-bold">SipScore</span>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                  Login
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        <main>{children}</main>
        
        <footer className="border-t mt-20 py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 text-sm">
            © 2024 SipScore. Discover the best boba near you.
          </div>
        </footer>
      </body>
    </html>
  );
}