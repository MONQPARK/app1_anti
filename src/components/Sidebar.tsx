'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { chapters } from '@/lib/content';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Open the chapter that matches the current pathname
    const match = pathname.match(/\/chapters\/([^/]+)/);
    if (match) {
      setOpenChapters(prev => ({ ...prev, [match[1]]: true }));
    } else {
      // If home page, maybe open none or first
    }
  }, [pathname]);

  const toggleChapter = (slug: string) => {
    setOpenChapters(prev => ({ ...prev, [slug]: !prev[slug] }));
  };

  return (
    <aside className="w-[300px] h-screen sticky top-0 bg-panel border-r border-border overflow-y-auto flex-shrink-0 hidden md:block">
      <div className="p-6">
        <Link href="/" className="flex flex-col mb-8">
          <span className="text-xl font-bold tracking-tight text-fg">바이브코딩 아카데미</span>
          <span className="text-xs text-muted font-mono mt-1 px-2 py-0.5 bg-codebg rounded w-fit">v1.0</span>
        </Link>

        <nav className="space-y-6">
          {chapters.map((chapter) => (
            <div key={chapter.slug}>
              <button
                onClick={() => toggleChapter(chapter.slug)}
                className="flex items-center w-full text-left font-semibold text-sm text-muted hover:text-fg transition-colors mb-2"
              >
                {openChapters[chapter.slug] ? (
                  <ChevronDown className="w-4 h-4 mr-1" />
                ) : (
                  <ChevronRight className="w-4 h-4 mr-1" />
                )}
                CHAPTER {chapter.number}
              </button>
              
              {openChapters[chapter.slug] && (
                <ul className="space-y-1 ml-2">
                  {chapter.lessons.map((lesson) => {
                    const href = `/chapters/${chapter.slug}/${lesson.slug}`;
                    const isActive = pathname === href;
                    
                    return (
                      <li key={lesson.slug}>
                        <Link
                          href={href}
                          className={`block py-2 px-3 rounded-md text-sm transition-colors border-l-4 ${
                            isActive 
                              ? 'border-accent bg-bg text-fg font-medium' 
                              : 'border-transparent text-muted hover:text-fg hover:bg-bg/50'
                          }`}
                        >
                          <span className="font-mono text-xs opacity-70 mr-1">{lesson.number}.</span>
                          {lesson.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
