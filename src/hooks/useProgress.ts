import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'dingbat:solved-v1';

function read(): ReadonlySet<string> {
  if (typeof window === 'undefined') {
    return new Set();
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === null) {
      return new Set();
    }
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return new Set();
    }
    return new Set(parsed.filter((v): v is string => typeof v === 'string'));
  } catch {
    return new Set();
  }
}

function write(solved: ReadonlySet<string>): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...solved]));
  } catch {
    // ignore quota / privacy mode failures
  }
}

export interface ProgressApi {
  solved: ReadonlySet<string>;
  isSolved: (id: string) => boolean;
  markSolved: (id: string) => void;
  reset: () => void;
}

export function useProgress(): ProgressApi {
  const [solved, setSolved] = useState<ReadonlySet<string>>(() => read());

  useEffect(() => {
    function onStorage(e: StorageEvent): void {
      if (e.key === STORAGE_KEY) {
        setSolved(read());
      }
    }
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  const markSolved = useCallback((id: string) => {
    setSolved((prev) => {
      if (prev.has(id)) {
        return prev;
      }
      const next = new Set(prev);
      next.add(id);
      write(next);
      return next;
    });
  }, []);

  const isSolved = useCallback((id: string) => solved.has(id), [solved]);

  const reset = useCallback(() => {
    setSolved(new Set());
    write(new Set());
  }, []);

  return { solved, isSolved, markSolved, reset };
}
