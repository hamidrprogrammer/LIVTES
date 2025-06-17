import { useEffect, useState, useCallback } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

/**
 * Custom hook to get the current window dimensions.
 * Updates on window resize.
 * @returns `windowSize` - Object containing current window width and height.
 */
export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  // Memoized resize handler
  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    // Add event listener on mount
    window.addEventListener('resize', handleResize);
    // Call handler once to set initial size
    handleResize();
    // Remove event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return windowSize;
};
