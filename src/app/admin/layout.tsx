import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "관리자 대시보드 - 바이브코딩",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg text-fg font-sans flex flex-col">
      <header className="border-b border-border bg-panel px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl tracking-tight text-accent">관리자 모드</h1>
        <a href="/" className="text-sm text-muted hover:text-fg transition-colors">홈으로 돌아가기</a>
      </header>
      <main className="flex-1 p-6 md:p-12 max-w-5xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
