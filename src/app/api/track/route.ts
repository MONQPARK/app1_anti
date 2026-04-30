import { addLog } from '@/lib/logger';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'Unknown IP';
    const userAgent = req.headers.get('user-agent') || 'Unknown Device';
    
    addLog({
      time: new Date().toISOString(),
      path: body.path || '/',
      ip,
      userAgent,
    });
    
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
