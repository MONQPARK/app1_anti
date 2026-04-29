'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Slide, slideSrc } from '@/lib/content';

export default function SlideViewer({ slides }: { slides: Slide[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  const nextSlide = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, slides.length]);

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    setImgError(false);
  }, [currentIndex]);

  if (!slides || slides.length === 0) return <div>슬라이드가 없습니다.</div>;

  const currentSlide = slides[currentIndex];

  return (
    <div className="flex flex-col items-center mt-8">
      {/* Slide Container */}
      <div className="relative w-full max-w-4xl aspect-[4/3] bg-panel border border-border rounded-md overflow-hidden shadow-sm">
        <Image
          src={imgError ? "/placeholder-slide.png" : slideSrc(currentSlide)}
          alt={`슬라이드 ${currentIndex + 1}`}
          fill
          priority={currentIndex === 0}
          loading={currentIndex === 0 ? "eager" : "lazy"}
          className="object-contain"
          onError={() => setImgError(true)}
        />
        
        {/* Navigation Overlays */}
        {currentIndex > 0 && (
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-0 bottom-0 w-1/6 hover:bg-bg/10 transition-colors flex items-center justify-start pl-4 group"
            aria-label="이전 슬라이드"
          >
            <div className="p-2 bg-panel/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
              <ChevronLeft className="w-6 h-6 text-fg" />
            </div>
          </button>
        )}
        
        {currentIndex < slides.length - 1 && (
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-0 bottom-0 w-1/6 hover:bg-bg/10 transition-colors flex items-center justify-end pr-4 group"
            aria-label="다음 슬라이드"
          >
            <div className="p-2 bg-panel/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
              <ChevronRight className="w-6 h-6 text-fg" />
            </div>
          </button>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-6 mt-4">
        <button 
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="p-2 text-muted hover:text-fg disabled:opacity-30 disabled:hover:text-muted transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <span className="font-mono text-sm text-muted">
          <span className="text-fg">{currentIndex + 1}</span> / {slides.length}
        </span>
        
        <button 
          onClick={nextSlide}
          disabled={currentIndex === slides.length - 1}
          className="p-2 text-muted hover:text-fg disabled:opacity-30 disabled:hover:text-muted transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      {currentSlide.caption && (
        <p className="mt-4 text-sm text-muted text-center max-w-2xl">
          {currentSlide.caption}
        </p>
      )}
    </div>
  );
}
