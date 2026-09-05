import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Blog Site",
  description: "A minimal blog app built with Next.js App Router.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="min-h-dvh bg-zinc-200 text-zinc-950">
          <div className="flex flex-col mx-auto min-h-dvh w-full max-w-275 bg-white border-x border-zinc-300">
            <Header />
            <main className="flex-1 px-4 py-8 sm:px-6 sm:py-10">
              {children}
            </main>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
