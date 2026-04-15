import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chanditala BJP",
  description: "চণ্ডীতলা অঞ্চলের উন্নয়ন, স্বচ্ছ শাসন এবং জনগণের অধিকার প্রতিষ্ঠার লক্ষ্যে ভারতীয় জনতা পার্টির অঙ্গীকার। পরিবর্তনের পথে এগিয়ে চলুন আমাদের সঙ্গে।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
