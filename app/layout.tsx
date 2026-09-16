import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  // title: "My Blog",
  title: {
    default: "My Blog",
    template: "%s | My Blog",
  },
  description: "A simple blog built to learn Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="min-h-dvh bg-canvas text-ink">
          <div className="flex flex-col mx-auto min-h-dvh w-full max-w-275 bg-paper border-x border-border">
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
