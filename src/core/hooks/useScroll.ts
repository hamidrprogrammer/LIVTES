import { useEffect, useState, RefObject, useCallback } from 'react';

/**
 * Custom hook to detect when an element is in the viewport.
 * @param ref - Ref object attached to the element to observe.
 * @param options - IntersectionObserver options (e.g., root, rootMargin, threshold).
 * @param once - If true, the observer will disconnect after the element comes into view once.
 * @returns `inView` - Boolean indicating if the element is in view.
 */
export const useIntersectionObserver = (
  ref: RefObject<Element>,
  options: IntersectionObserverInit = {},
  once: boolean = false
): boolean => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Ensure ref.current is available
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
      if (entry.isIntersecting && once) {
        observer.unobserve(element);
        observer.disconnect();
      }
    }, options);

    observer.observe(element);

    return () => {
      // Cleanup: unobserve and disconnect
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [ref, options, once]); // Dependencies for the effect

  return inView;
};

/**
 * Custom hook to handle scroll-triggered animations that should only run once.
 * @param ref - Ref object attached to the element to observe.
 * @param threshold - Percentage of element that needs to be visible to trigger (0 to 1).
 * @returns `isVisible` - Boolean indicating if element has become visible.
 */
export const useScrollAnimation = (
  ref: RefObject<Element>,
  threshold: number = 0.1
): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Stop observing once visible
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [ref, threshold]);

  return isVisible;
};

/**
 * Custom hook to get the current window scroll position (vertical).
 * @returns `scrollY` - Current vertical scroll position in pixels.
 */
export const useScrollPosition = (): number => {
  const [scrollY, setScrollY] = useState(0);

  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    setScrollY(window.pageYOffset); // Use pageYOffset for broader compatibility
  }, []);

  useEffect(() => {
    // Add event listener on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call handler once to set initial position
    handleScroll(); 
    // Remove event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return scrollY;
};
