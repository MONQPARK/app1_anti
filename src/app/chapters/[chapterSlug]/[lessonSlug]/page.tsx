import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { getLesson, getNextLesson, getPrevLesson, chapters } from '@/lib/content';
import SlideViewer from '@/components/SlideViewer';
import LessonNav from '@/components/LessonNav';

export function generateStaticParams() {
  const params: { chapterSlug: string; lessonSlug: string }[] = [];
  chapters.forEach((chapter) => {
    chapter.lessons.forEach((lesson) => {
      params.push({
        chapterSlug: chapter.slug,
        lessonSlug: lesson.slug,
      });
    });
  });
  return params;
}

export default function LessonPage({ params }: { params: { chapterSlug: string; lessonSlug: string } }) {
  const data = getLesson(params.chapterSlug, params.lessonSlug);
  
  if (!data) {
    notFound();
  }

  const { chapter, lesson } = data;
  const next = getNextLesson(chapter.slug, lesson.slug);
  const prev = getPrevLesson(chapter.slug, lesson.slug);

  return (
    <div className="pb-12">
      {/* Breadcrumb */}
      <div className="text-sm text-muted mb-8">
        <Link href="/" className="hover:text-fg transition-colors">홈</Link>
        <span className="mx-2">/</span>
        <Link href={`/chapters/${chapter.slug}`} className="hover:text-fg transition-colors">CHAPTER {chapter.number}</Link>
        <span className="mx-2">/</span>
        <span className="text-fg">LESSON {lesson.number}</span>
      </div>

      <div className="space-y-4 max-w-4xl">
        <span className="font-mono text-xs tracking-wider text-accent bg-accent/10 px-2 py-1 rounded-full">
          LESSON {lesson.number}
        </span>
        <h1 className="text-2xl font-bold">{lesson.title}</h1>
        <p className="text-base text-muted leading-relaxed">
          {lesson.description}
        </p>
      </div>

      {/* Main Slide Viewer */}
      <SlideViewer slides={lesson.slides} />

      {/* External Links */}
      {lesson.links && lesson.links.length > 0 && (
        <div className="max-w-4xl mx-auto mt-8 flex flex-wrap gap-4">
          {lesson.links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-panel border border-border hover:border-accent hover:bg-bg rounded-md text-sm font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2 text-accent" />
              {link.title}
            </a>
          ))}
        </div>
      )}

      {/* Navigation */}
      <div className="max-w-4xl mx-auto">
        <LessonNav prev={prev} next={next} />
      </div>
    </div>
  );
}
