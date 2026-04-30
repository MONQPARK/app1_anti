'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Tracker() {
  const pathname = usePathname();
  const trackedPath = useRef('');

  useEffect(() => {
    // Avoid double tracking the same path in dev strict mode
    if (trackedPath.current === pathname) return;
    
    // Ignore admin routes
    if (pathname.startsWith('/admin')) return;

    trackedPath.current = pathname;
    
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: pathname }),
    }).catch(() => {});
  }, [pathname]);

  return null;
}
