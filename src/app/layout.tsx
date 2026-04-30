import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Tracker from "@/components/Tracker";

export const metadata: Metadata = {
  title: "몽규 바이브 코딩 아카데미",
  description: "누구나 따라하면 웹앱을 만들고 배포할 수 있습니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
      <body className="flex min-h-screen bg-bg text-fg font-sans">
        <Tracker />
        <Sidebar />
        <main className="flex-1 max-w-5xl mx-auto px-6 py-12 md:px-12 w-full overflow-x-hidden min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
