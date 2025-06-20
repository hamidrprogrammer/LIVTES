import { forwardRef, useImperativeHandle, useState } from "react";
import './Slider.css';
import { useIsMobile } from "@/core/hooks/useIsMobile";

// Default slide data
const defaultSlides = [
  {
    image: 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/image-4.avif',
    text: "Reduces oxidative stress – the root cause of aging, fatigue, and chronic disease."
  },
  {
    image: 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/imageSlidTwo.avif',
    text: "Boosts natural antioxidants like glutathione, the body’s master detoxifier."
  },
  {
    image: 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/imageSlideTree.avif',
    text: "Enhances energy production at a cellular level by optimizing mitochondrial function."
  },
  {
    image: 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/imageSlideFure.avif',
    text: "Supports healthy inflammation response, helping the body recover faster."
  },
];

export type Slide = {
  image: string;
  text: string;
};

export type SliderProps = {
  slider?: Slide[];
};

export type SliderHandle = {
  next: () => void;
  back: () => void;
  slider: Slide[];
};

export const Slider = forwardRef<SliderHandle, SliderProps>(({ slider = [] }, ref) => {
  const slides = slider.length > 0 ? slider : defaultSlides;

  const [activeIndex, setActiveIndex] = useState(0);

  useImperativeHandle(ref, () => ({
    next: goNext,
    back: goPrev,
    slider: slides,
  }));

  const goNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const isMobile = useIsMobile();
  const offset = isMobile ? 100 : 33.33;

  return (
    <div className="slider">
      <div
        className="slides-wrapper"
        style={{ transform: `translateX(-${activeIndex * offset}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="slide-image-responsive"
              loading="lazy"
            />
            <div className="slide-content">
              <p className="slide-text">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
