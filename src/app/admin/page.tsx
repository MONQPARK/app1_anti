import { getLogs } from '@/lib/logger';

export const dynamic = 'force-dynamic';

export default function AdminDashboard() {
  const logs = getLogs();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">접속 기록 (Access Logs)</h2>
        <p className="text-muted mt-2">
          최근 접속한 방문자의 기록입니다. (서버리스 환경 특성상 서버가 재시작되면 기록이 초기화될 수 있습니다.)
        </p>
      </div>

      <div className="bg-panel border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-bg text-muted border-b border-border uppercase">
              <tr>
                <th className="px-6 py-3 font-medium">시간</th>
                <th className="px-6 py-3 font-medium">IP 주소</th>
                <th className="px-6 py-3 font-medium">경로</th>
                <th className="px-6 py-3 font-medium">브라우저/기기</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {logs.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-muted">
                    아직 접속 기록이 없습니다.
                  </td>
                </tr>
              ) : (
                logs.map((log) => (
                  <tr key={log.id} className="hover:bg-bg/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-muted">
                      {new Date(log.time).toLocaleString('ko-KR')}
                    </td>
                    <td className="px-6 py-4 font-mono text-accent">
                      {log.ip}
                    </td>
                    <td className="px-6 py-4">
                      {log.path}
                    </td>
                    <td className="px-6 py-4 text-xs text-muted max-w-xs truncate" title={log.userAgent}>
                      {log.userAgent}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
