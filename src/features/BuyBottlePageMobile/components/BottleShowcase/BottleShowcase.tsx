// src/sections/BottleShowcase/BottleShowcase.tsx
import React, { useState, useEffect } from 'react';
import {
  ShowcaseSectionContainer,
  SectionTitle,
  GalleryWrapper,
  BottleImage,
  GalleryControlsContainer,
  ArrowButton,
  DotsContainer,
} from './BottleShowcase.styles';
import CarouselIndicator from '../../components/CarouselIndicator/CarouselIndicator';
import { SlideData } from '@/core/types';
import useScrollAnimation from '@/core/hooks/useScrollAnimation';
// تایپ برای داده‌های اسلاید
import { ProductVariationsResponse } from '@/core/types/api/shop';
const Bottle_Shop_C_gold = "https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/Bottle_Shop_C_gold 1.avif";

// تصاویر نمونه برای گالری - در پروژه واقعی از CMS یا API دریافت می‌شوند
// یا به صورت محلی وارد می‌شوند.
const gallerySlides: SlideData[] = [
  { id: 'gold', src:Bottle_Shop_C_gold, alt: 'Gold LumiVitae Bottle' },
  { id: 'graphite', src: Bottle_Shop_C_gold, alt: 'Graphite LumiVitae Bottle' }, // تصویر نمونه
  { id: 'silver', src: Bottle_Shop_C_gold, alt: 'Silver LumiVitae Bottle' }, // تصویر نمونه
];
// نکته: مطمئن شوید که مسیر تصاویر صحیح است. اگر در پوشه public هستند، /نام_پوشه/نام_فایل.avif'
// اگر در src/assets وارد می‌کنید: import goldBottle from '../../assets/images/Bottle_Shop_C_gold.avif';


const BottleShowcase = ({ data }: { data?: ProductVariationsResponse }) => {
  const [elementRef, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // برای کنترل انیمیشن تصویر

  // وقتی isVisible تغییر می‌کند و true می‌شود، انیمیشن را فعال کن
  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
    }
  }, [isVisible]);

  // وقتی currentIndex تغییر می‌کند، انیمیشن را دوباره فعال کن
  useEffect(() => {
    if (isVisible) { // فقط اگر بخش قابل مشاهده است، انیمیشن را برای تغییر اسلاید اجرا کن
      setIsAnimating(false); // ابتدا انیمیشن را ریست کن
      const timer = setTimeout(() => setIsAnimating(true), 50); // سپس با کمی تاخیر فعال کن تا انیمیشن اجرا شود
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isVisible]);


  const handlePrev = () => {
    // setCurrentIndex((prevIndex) =>
    //   prevIndex === 0 ? gallerySlides.length - 1 : prevIndex - 1
    // );
  };

  const handleNext = () => {
    // setCurrentIndex((prevIndex) =>
    //   prevIndex === gallerySlides.length - 1 ? 0 : prevIndex + 1
    // );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // افزودن امکان تغییر اسلاید با کشیدن (swipe) - (اختیاری، نیاز به کتابخانه یا پیاده‌سازی سفارشی دارد)
  // افزودن امکان تغییر اسلاید خودکار - (اختیاری)
   
   
   
  return (
    <ShowcaseSectionContainer ref={elementRef} $isVisible={isVisible}>
      <SectionTitle>Bottle. Select your color.</SectionTitle>
      
      <GalleryWrapper>
        {data?.data?.map((slide, index) => (
          <>
          {slide?.productVariationFiles?.map((file, index) => (

            <BottleImage
            key={slide.id}
            src={`https://imagedelivery.net/27K6Yc6t29u6bZ_lbtodBw/${file?.content_hash}/public`}
            alt={"true"}
            $isAnimating={isAnimating && index === currentIndex} // فقط تصویر فعال انیمیشن داشته باشد
            style={{ display: index === currentIndex ? 'block' : 'none' }} // فقط تصویر فعال نمایش داده شود
          />
            ))}
          
          </>
          
        ))}

        {data?.data && data.data.length > 1 && (
          <>
            <GalleryControlsContainer>
              <ArrowButton direction="prev" onClick={handlePrev} aria-label="Previous image">
                {'<'}
              </ArrowButton>
              <ArrowButton direction="next" onClick={handleNext} aria-label="Next image">
                {'>'}
              </ArrowButton>
            </GalleryControlsContainer>
            
            <DotsContainer>
              <CarouselIndicator
                count={1}
                activeIndex={0}
                onDotClick={handleDotClick}
              />
            </DotsContainer>
          </>
        )}
      </GalleryWrapper>
    </ShowcaseSectionContainer>
  );
};

export default BottleShowcase;