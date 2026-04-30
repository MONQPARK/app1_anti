'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, password }),
    });

    if (res.ok) {
      router.push('/admin');
      router.refresh();
    } else {
      setError('아이디 또는 비밀번호가 틀렸습니다.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-panel border border-border p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-center">관리자 로그인</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-muted mb-1">아이디</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full bg-bg border border-border rounded-md px-4 py-2 focus:outline-none focus:border-accent text-fg"
            placeholder="admin"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted mb-1">비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-bg border border-border rounded-md px-4 py-2 focus:outline-none focus:border-accent text-fg"
            placeholder="1234"
            required
          />
        </div>
        
        {error && <p className="text-red-400 text-sm font-medium">{error}</p>}
        
        <button
          type="submit"
          className="w-full bg-accent text-white font-bold py-2 px-4 rounded-md hover:bg-accent-hover transition-colors mt-4"
        >
          로그인
        </button>
      </form>
    </div>
  );
}
