// src/hooks/useDebounce.ts
import { useCallback, useEffect, useRef, useState } from 'react';

/* ----------------------------------------------------------------
   Debounce a primitive/value (for inputs, search terms, etc.)
   ---------------------------------------------------------------- */
export function useDebouncedValue<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}

/* ----------------------------------------------------------------
   Debounce a callback (handy for expensive handlers, API calls, etc.)
   Provides .cancel() and .flush() helpers.
   ---------------------------------------------------------------- */
export interface UseDebounceOptions {
  delay?: number;      // ms
  leading?: boolean;   // fire on the leading edge
  trailing?: boolean;  // fire on the trailing edge (default true)
}

type WithHelpers<F extends (...a: any) => any> = F & {
  cancel: () => void;
  flush: () => ReturnType<F> | undefined;
};

export function useDebounce<F extends (...args: any[]) => any>(
  fn: F,
  {
    delay = 300,
    leading = false,
    trailing = true,
  }: UseDebounceOptions = {}
): WithHelpers<F> {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastArgs = useRef<Parameters<F>>();
  const lastResult = useRef<ReturnType<F>>();

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const debounced = useCallback((...args: Parameters<F>) => {
    lastArgs.current = args;

    if (leading && !timeoutRef.current) {
      lastResult.current = fn(...args);
    }

    clearTimer();

    timeoutRef.current = setTimeout(() => {
      if (trailing && lastArgs.current) {
        lastResult.current = fn(...lastArgs.current);
      }
      timeoutRef.current = null;
    }, delay);

    return lastResult.current as ReturnType<F>;
  }, [fn, delay, leading, trailing]) as WithHelpers<F>;

  debounced.cancel = clearTimer;

  debounced.flush = () => {
    if (timeoutRef.current) {
      clearTimer();
      if (lastArgs.current) {
        lastResult.current = fn(...lastArgs.current);
      }
    }
    return lastResult.current;
  };

  // clean‑up on unmount
  useEffect(() => debounced.cancel, []);

  return debounced;
}
