import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * A custom hook that scrolls the window to the top on new navigations (PUSH actions).
 * It distinguishes between forward navigation (PUSH) and back/forward button usage (POP).
 */
const useScrollToTopOnNext = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only scroll to top on 'PUSH' actions, which indicate a new navigation.
    // This prevents scrolling to top when using browser back/forward buttons.
    if (navigationType === 'PUSH') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, navigationType]); // Depend on pathname to trigger on route changes, and navigationType
};

export default useScrollToTopOnNext;


