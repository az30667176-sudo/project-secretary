import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kurt Library",
  description: "Personal knowledge base",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body
        className="min-h-screen font-[family-name:var(--font-dm-sans)]"
        style={{ background: "var(--bg)", color: "var(--text-primary)" }}
      >
        <nav
          className="sticky top-0 z-50 border-b w-full"
          style={{
            background: "rgba(12, 12, 12, 0.85)",
            backdropFilter: "blur(12px)",
            borderColor: "var(--border)",
          }}
        >
          <div className="max-w-[1100px] mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="font-[family-name:var(--font-playfair)] text-xl font-semibold tracking-tight"
              style={{ color: "var(--accent)" }}
            >
              Kurt Library
            </Link>
            <div className="flex items-center gap-8">
              <Link
                href="/knowledge"
                className="text-base font-medium transition-colors hover:opacity-100"
                style={{ color: "var(--text-secondary)" }}
              >
                Articles
              </Link>
              <Link
                href="/synthesis"
                className="text-base font-medium transition-colors hover:opacity-100"
                style={{ color: "var(--text-secondary)" }}
              >
                Insights
              </Link>
            </div>
          </div>
        </nav>
        <main className="max-w-[1100px] mx-auto px-6 sm:px-10 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
