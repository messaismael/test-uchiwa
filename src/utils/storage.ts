export const storage = {
  set: (key: string, value: any): void => {
    if (typeof window == 'undefined') return;
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: <T>(key: string): T | null => {
    if (typeof window == 'undefined') return null;
    return JSON.parse(localStorage.getItem(key) ?? 'null');
  },
  remove: (key: string): void => {
    if (typeof window == 'undefined') return;
    localStorage.removeItem(key);
  },
};
