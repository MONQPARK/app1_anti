import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Chapter } from '@/lib/content';

export default function ChapterCard({ chapter }: { chapter: Chapter }) {
  return (
    <div className="bg-panel border border-border rounded-md p-6 hover:border-accent transition-colors flex flex-col h-full">
      <div className="mb-4">
        <span className="font-mono text-xs tracking-wider text-accent bg-accent/10 px-2 py-1 rounded">
          CHAPTER {chapter.number}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-1">{chapter.title}</h3>
      <p className="text-sm font-medium text-muted mb-3">{chapter.subtitle}</p>
      <p className="text-sm text-fg/80 mb-6 flex-grow">{chapter.description}</p>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
        <span className="text-xs text-muted">{chapter.lessons.length} 레슨</span>
        <Link 
          href={`/chapters/${chapter.slug}`}
          className="text-sm font-medium text-accent hover:text-accent-hover flex items-center"
        >
          시작하기 <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}
