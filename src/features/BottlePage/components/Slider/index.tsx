// BottlePage/components/Slider/index.tsx
import slide2 from "../../../../assets/images/bottle/imageSlidTwo.avif";
import slide3 from "../../../../assets/images/bottle/imageSlideTree.avif";
import slide4 from "../../../../assets/images/bottle/imageSlideFure.avif";
import image4 from "../../../../assets/images/bottle/image-4.avif"; // Assuming this is slide1
import { forwardRef, useImperativeHandle, useState } from "react";
import './Slider.css';
import { useIsMobile } from "@/core/hooks/useIsMobile";

const slidesData = [
  {
    image: image4, // Was image4, assuming it's the first slide
    text: "Reduces oxidative stress – the root cause of aging, fatigue, and chronic disease."
  },
  {
    image: slide2,
    text: "Boosts natural antioxidants like glutathione, the body’s master detoxifier."
  },
  {
    image: slide3,
    text: "Enhances energy production at a cellular level by optimizing mitochondrial function."
  },
   {
    image: slide4,
    text: "Supports healthy inflammation response, helping the body recover faster."
  },
  // Add more slides as needed
];


export type SliderHandle = {
  next: () => void;
  back: () => void;
};

export const Slider = forwardRef<SliderHandle>((props, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useImperativeHandle(ref, () => ({
    next: () => {
     goNext();
    },
    back: () => {
      goPrev();
    },
  }));

  const goNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const goPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
  };

  const isMobile = useIsMobile();
  const offset = isMobile ? 100 : 33.33; // Adjusted for 3-item desktop view as per CSS comments

  return (
    <div className="slider">
      <div
        className="slides-wrapper"
        style={{ transform: `translateX(-${activeIndex * offset}%)` }}
      >
        {slidesData.map((slide, index) => (
          <div className="slide" key={index}>
            <img
              src={slide.image}
              alt="Slide content"
              className="slide-image-responsive" 
              loading="lazy" // Added lazy loading for images
            />
            <div className="slide-content">
              <p className="slide-text">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Add default controls back if needed and style them for mobile if external controls are not always present */}
      {/* <button className="slider-btn prev" onClick={goPrev}>‹</button> */}
      {/* <button className="slider-btn next" onClick={goNext}>›</button> */}
    </div>
  );
});