import { useEffect, useState } from 'react';
import { css, keyframes } from 'styled-components';

// انیمیشن محو شدن و ظاهر شدن (Fade In)
export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// انیمیشن ظاهر شدن همراه با حرکت به بالا (Fade In Up)
export const fadeInUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px); // شروع از 20 پیکسل پایین‌تر
  }
  to {
    opacity: 1;
    transform: translateY(0); // حرکت به موقعیت اصلی
  }
`;
/**
 * Custom hook to detect when an element is in the viewport
 * @param options IntersectionObserver options
 * @returns [ref, inView] - ref to attach to the element and boolean indicating if element is in view
 */
export const useIntersectionObserver = (options = {}) => {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return [setRef, inView];
};

/**
 * Custom hook to handle scroll animations
 * @param threshold Percentage of element that needs to be visible to trigger animation
 * @returns [ref, isVisible] - ref to attach to the element and boolean indicating if element is visible
 */
export const useScrollAnimation = (threshold = 0.1) => {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return [setRef, isVisible];
};

/**
 * Custom hook to handle window scroll events
 * @returns scrollY - Current scroll position
 */
export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
};

/**
 * Custom hook to handle window resize events
 * @returns [width, height] - Current window dimensions
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

/**
 * Custom hook to handle mouse position for parallax effects
 * @returns [x, y] - Current mouse position normalized from -1 to 1
 */
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      // Normalize mouse position from -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
};








// استایل‌های کمکی برای اعمال انیمیشن‌ها
export const animatedStyles = (
  isVisible: boolean,
  animationType: 'fadeIn' | 'fadeInUp' = 'fadeInUp', // نوع انیمیشن پیش‌فرض
  duration: string = '0.6s', // مدت زمان انیمیشن پیش‌فرض
  delay: string = '0s' // تاخیر در شروع انیمیشن پیش‌فرض
) => css`
  // اگر عنصر قابل مشاهده نیست، شفافیت 0 باشد (برای شروع انیمیشن)
  // اگر قابل مشاهده است، انیمیشن اجرا شود
  opacity: ${isVisible ? 1 : 0};
  animation: ${isVisible
    ? (animationType === 'fadeInUp' ? fadeInUpAnimation : fadeInAnimation)
    : 'none'}
    ${duration}
    ease-out
    ${delay} // اعمال تاخیر
    forwards; // حفظ حالت پایانی انیمیشن

  // می‌توان از visibility نیز استفاده کرد، اما opacity برای transition نرم‌تر است
  /* visibility: ${isVisible ? 'visible' : 'hidden'}; */
`;
