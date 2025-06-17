// components/ScrollToTopOnNext.tsx

import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType, NavigationType } from 'react-router-dom';

const ScrollToTopOnNext: React.FC = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const prevPathRef = useRef<string | null>(null);

  useEffect(() => {
    const prevPath = prevPathRef.current;
    const currentPath = location.pathname;

    // Scroll to top only on "PUSH" (next navigation), not "POP" (back)
    if (navigationType === 'PUSH' && prevPath !== currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    prevPathRef.current = currentPath;
  }, [location, navigationType]);

  return null;
};

export default ScrollToTopOnNext;
