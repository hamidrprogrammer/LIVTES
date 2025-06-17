// src/sections/WhatsInBox/WhatsInBox.tsx
import React, { useState } from 'react';
import {
  WhatsInBoxSectionContainer,
  SectionTitle,
  GalleryContainer,
  SlideImage,
  SlideTitle,
  GalleryControlsContainer,
  ArrowButtonWhatsInBox, // استایل فلش مخصوص این بخش
} from './WhatsInBox.styles';
import CarouselIndicator from '../../CarouselIndicator/CarouselIndicator';
import { whatsInBoxSlides } from './whatsInBoxData';
import useScrollAnimation from '@/core/hooks/useScrollAnimation';

const WhatsInBox: React.FC = () => {
  const [elementRef, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState<number | null>(null); // برای انیمیشن خروج اسلاید قبلی

  const totalSlides = whatsInBoxSlides.length;

  const handleSlideChange = (newIndex: number) => {
    setIsExiting(currentIndex); // اسلاید فعلی را برای انیمیشن خروج علامت بزن
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsExiting(null); // پاک کردن وضعیت خروج
    }, 250); // نصف مدت زمان انیمیشن خروج/ورود
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    handleSlideChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    handleSlideChange(newIndex);
  };

  const handleDotClick = (index: number) => {
    if (index !== currentIndex) {
      handleSlideChange(index);
    }
  };

  // اسلاید خودکار (اختیاری)
  // useEffect(() => {
  //   if (!isVisible) return; // فقط وقتی بخش قابل مشاهده است
  //   const timer = setTimeout(() => {
  //     handleNext();
  //   }, 5000); // هر 5 ثانیه
  //   return () => clearTimeout(timer);
  // }, [currentIndex, isVisible]);


  return (
    <WhatsInBoxSectionContainer ref={elementRef} $isVisible={isVisible}>
      <SectionTitle>What’s in the box</SectionTitle>
      
      <GalleryContainer>
        {whatsInBoxSlides.map((slide, index) => (
          <SlideImage
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            $isCurrent={index === currentIndex}
            $isExiting={index === isExiting}
          />
        ))}
        {totalSlides > 1 && (
          <>
            <ArrowButtonWhatsInBox direction="prev" onClick={handlePrev} aria-label="Previous item">
              {'<'}
            </ArrowButtonWhatsInBox>
            <ArrowButtonWhatsInBox direction="next" onClick={handleNext} aria-label="Next item">
              {'>'}
            </ArrowButtonWhatsInBox>
          </>
        )}
      </GalleryContainer>
      
      <GalleryControlsContainer>
        {totalSlides > 1 && (
          <CarouselIndicator
            count={totalSlides}
            activeIndex={currentIndex}
            onDotClick={handleDotClick}
          />
        )}
        {/* نمایش عنوان اسلاید فعلی */}
        <SlideTitle>{whatsInBoxSlides[currentIndex]?.title || ''}</SlideTitle>
      </GalleryControlsContainer>

    </WhatsInBoxSectionContainer>
  );
};

export default WhatsInBox;
