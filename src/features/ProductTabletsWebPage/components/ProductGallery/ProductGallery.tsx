import React, { useState } from 'react';
import { GalleryWrapper, ProductImage, GalleryControls, Dot, ArrowButton } from './ProductGallery.styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Tablet_Shop_C_1 from "../../../../assets/images/products/Tablet_Shop_C_1.avif'"
const images = [
 Tablet_Shop_C_1,
 Tablet_Shop_C_1,
 Tablet_Shop_C_1,
];

export const ProductGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <GalleryWrapper data-aos="fade-right">
      <ProductImage src={images[currentIndex]} alt="LVQ+ Tablet" />
      <ArrowButton direction="left" onClick={handlePrev} aria-label="Previous image">
        <FiChevronLeft />
      </ArrowButton>
      <ArrowButton direction="right" onClick={handleNext} aria-label="Next image">
        <FiChevronRight />
      </ArrowButton>

      <GalleryControls>
        {images.map((_, index) => (
          <Dot
            key={index}
            isActive={index === currentIndex}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </GalleryControls>
    </GalleryWrapper>
  );
};