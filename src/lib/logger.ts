/* eslint-disable no-var */
export type AccessLog = {
  id: string;
  time: string;
  path: string;
  ip: string;
  userAgent: string;
};

declare global {
  var accessLogs: AccessLog[] | undefined;
}

if (!global.accessLogs) {
  global.accessLogs = [];
}

export const addLog = (log: Omit<AccessLog, 'id'>) => {
  if (!global.accessLogs) global.accessLogs = [];
  global.accessLogs.unshift({
    id: Math.random().toString(36).substring(2, 9),
    ...log,
  });
  // Keep only the latest 200 logs to prevent memory leak
  if (global.accessLogs.length > 200) {
    global.accessLogs.pop();
  }
};

export const getLogs = () => {
  return global.accessLogs || [];
};
