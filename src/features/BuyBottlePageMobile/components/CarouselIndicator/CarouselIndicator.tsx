// src/components/CarouselIndicator/CarouselIndicator.tsx
import React from 'react';
import { DotsWrapper, Dot } from './CarouselIndicator.styles';

interface CarouselIndicatorProps {
  count: number; // تعداد کل اسلایدها
  activeIndex: number; // ایندکس اسلاید فعال
  onDotClick: (index: number) => void; // تابع برای کلیک روی نقطه
}

const CarouselIndicator: React.FC<CarouselIndicatorProps> = ({ count, activeIndex, onDotClick }) => {
  return (
    <DotsWrapper role="tablist" aria-label="Image gallery controls">
      {Array.from({ length: count }).map((_, index) => (
        <Dot
          key={index}
          $isActive={index === activeIndex}
          onClick={() => onDotClick(index)}
          role="tab"
          aria-selected={index === activeIndex}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </DotsWrapper>
  );
};

export default CarouselIndicator;