import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface LessonNavProps {
  prev?: { chapterSlug: string; lessonSlug: string };
  next?: { chapterSlug: string; lessonSlug: string };
}

export default function LessonNav({ prev, next }: LessonNavProps) {
  return (
    <div className="flex items-center justify-between mt-12 pt-6 border-t border-border">
      {prev ? (
        <Link 
          href={`/chapters/${prev.chapterSlug}/${prev.lessonSlug}`}
          className="flex items-center px-4 py-2 rounded-md hover:bg-panel text-muted hover:text-fg transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>이전 레슨</span>
        </Link>
      ) : (
        <div></div>
      )}

      {next ? (
        <Link 
          href={`/chapters/${next.chapterSlug}/${next.lessonSlug}`}
          className="flex items-center px-4 py-2 rounded-md hover:bg-panel text-muted hover:text-fg transition-colors"
        >
          <span>다음 레슨</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      ) : (
        <div className="px-4 py-2 text-muted font-medium">끝!</div>
      )}
    </div>
  );
}
