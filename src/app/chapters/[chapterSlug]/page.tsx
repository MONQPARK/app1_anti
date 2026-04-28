import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getChapter, chapters } from '@/lib/content';

export function generateStaticParams() {
  return chapters.map((c) => ({ chapterSlug: c.slug }));
}

export default function ChapterPage({ params }: { params: { chapterSlug: string } }) {
  const chapter = getChapter(params.chapterSlug);
  
  if (!chapter) {
    notFound();
  }

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="text-sm text-muted mb-8">
        <Link href="/" className="hover:text-fg transition-colors">홈</Link>
        <span className="mx-2">/</span>
        <span className="text-fg">CHAPTER {chapter.number}</span>
      </div>

      <div className="space-y-4">
        <span className="font-mono text-xs tracking-wider text-accent bg-accent/10 px-2 py-1 rounded">
          CHAPTER {chapter.number}
        </span>
        <h1 className="text-3xl font-bold">{chapter.title}</h1>
        <p className="text-lg text-muted">{chapter.description}</p>
      </div>

      <div className="mt-12 space-y-3">
        {chapter.lessons.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/chapters/${chapter.slug}/${lesson.slug}`}
            className="flex items-center justify-between p-4 bg-panel border border-border rounded-md hover:border-accent transition-colors group"
          >
            <div className="flex items-center space-x-4">
              <span className="font-mono text-muted w-8">{lesson.number}.</span>
              <span className="font-semibold">{lesson.title}</span>
            </div>
            <div className="flex items-center space-x-4 text-muted text-sm">
              <span>{lesson.slides.length} 슬라이드</span>
              <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-border flex justify-end">
        {chapter.lessons.length > 0 && (
          <Link
            href={`/chapters/${chapter.slug}/${chapter.lessons[0].slug}`}
            className="inline-flex items-center px-6 py-3 bg-panel border border-border hover:bg-bg rounded-md text-sm font-medium transition-colors"
          >
            첫 레슨 시작하기 <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        )}
      </div>
    </div>
  );
}
