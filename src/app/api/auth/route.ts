import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { id, password } = await req.json();

  if (id === 'admin' && password === '1234') {
    const response = NextResponse.json({ success: true });
    response.cookies.set({
      name: 'admin-token',
      value: 'true',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });
    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
