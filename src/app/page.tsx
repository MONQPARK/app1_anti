import { chapters } from '@/lib/content';
import ChapterCard from '@/components/ChapterCard';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="space-y-6 pt-10 pb-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-fg">
          몽규 바이브 코딩 아카데미
        </h1>
        <p className="text-xl font-medium text-muted max-w-2xl">
          Claude → Antigravity → GitHub → Vercel
        </p>
        <p className="text-lg text-fg/80 max-w-2xl leading-relaxed">
          누구나 따라하면 웹앱을 만들고 배포할 수 있습니다.
        </p>
        <div className="pt-4">
          <Link
            href="/chapters/setup/gmail-account"
            className="inline-flex items-center justify-center rounded-md text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent bg-accent text-white hover:bg-accent-hover h-12 px-8 shadow-md"
          >
            시작하기
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <span className="w-1.5 h-6 bg-accent rounded-full mr-3"></span>
          커리큘럼
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chapters.map((chapter) => (
            <ChapterCard key={chapter.slug} chapter={chapter} />
          ))}
        </div>
      </section>
    </div>
  );
}
