// src/lib/shared/components/ScrollToTopButton/ScrollToTopButton.tsx
import React, { useState, useEffect } from 'react';
// START: اصلاح ایمپورت و استفاده از هوک صحیح
import { useScrollPosition } from '../../../core/hooks/useScroll'; // <-- هوک صحیح از فایل شما ایمپورت شد
// END: اصلاح ایمپورت و استفاده از هوک صحیح
import * as S from './ScrollToTopButton.styles';

const ArrowUpIcon: React.FC = () => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
);

const ScrollToTopButton: React.FC = () => {
    // START: استفاده از هوک و متغیر صحیح
    const scrollY = useScrollPosition(); // <-- استفاده از هوک صحیح
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // دکمه بعد از 200 پیکسل اسکرول ظاهر می‌شود
        if (scrollY > 200) { // <-- استفاده از متغیر صحیح
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [scrollY]); // <-- وابستگی صحیح
    // END: استفاده از هوک و متغیر صحیح

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <S.ScrollButton
            onClick={scrollToTop}
            $isVisible={isVisible}
            aria-label="Scroll to top"
        >
            <ArrowUpIcon />
        </S.ScrollButton>
    );
};

export default ScrollToTopButton;