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
  title: "Knowledge Base",
  description: "Personal knowledge base viewer",
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
          className="sticky top-0 z-50 backdrop-blur-md border-b"
          style={{
            background: "color-mix(in srgb, var(--bg) 80%, transparent)",
            borderColor: "var(--border)",
          }}
        >
          <div className="max-w-[860px] mx-auto px-6 h-14 flex items-center gap-6">
            <span className="font-semibold text-sm tracking-wide uppercase" style={{ color: "var(--text-muted)" }}>
              KB
            </span>
            <Link
              href="/knowledge"
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              Articles
            </Link>
            <Link
              href="/synthesis"
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              Insights
            </Link>
          </div>
        </nav>
        <main className="max-w-[860px] mx-auto px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
