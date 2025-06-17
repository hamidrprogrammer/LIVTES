import { useEffect, useState, useCallback } from 'react';

interface MousePosition {
  x: number; // Normalized from -1 (left) to 1 (right) relative to viewport center
  y: number; // Normalized from -1 (top) to 1 (bottom) relative to viewport center
  clientX: number; // Raw clientX relative to viewport
  clientY: number; // Raw clientY relative to viewport
}

/**
 * Custom hook to track mouse position, providing both raw and normalized values.
 * Normalized values are relative to the center of the viewport.
 * @returns `mousePosition` - Object containing mouse coordinates.
 */
export const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    clientX: 0,
    clientY: 0,
  });

  // Memoized mouse move handler
  const handleMouseMove = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;
    // Normalize mouse position from -1 to 1, with (0,0) at the center of the screen
    const normalizedX = (clientX / window.innerWidth) * 2 - 1;
    const normalizedY = (clientY / window.innerHeight) * 2 - 1;
    
    setMousePosition({ x: normalizedX, y: normalizedY, clientX, clientY });
  }, []);

  useEffect(() => {
    // Add event listener on mount
    window.addEventListener('mousemove', handleMouseMove);
    // Remove event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return mousePosition;
};
