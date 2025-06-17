// src/components/Image/OptimizedImage.tsx
import React from 'react';
import { ImageWrapper } from './OptimizedImage.styles';

interface OptimizedImageProps {
  src: string; // Main image source
  alt: string;
  srcSet?: string; // For responsive images
  sizes?: string;  // For responsive images
  objectFit?: React.CSSProperties['objectFit'];
  borderRadius?: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  width?: string | number; // Optional: to set width on the wrapper/picture element
  height?: string | number; // Optional: to set height on the wrapper/picture element
  style?: React.CSSProperties;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  srcSet,
  sizes,
  objectFit = 'cover',
  borderRadius = '0',
  className,
  loading = 'lazy',
  width,
  height,
  style,
}) => {
  return (
    <ImageWrapper
      $objectFit={objectFit}
      $borderRadius={borderRadius}
      className={className}
      style={{ width, height, ...style }} // Apply width/height to the picture element
    >
      <img
        src={src}
        alt={alt}
        srcSet={srcSet}
        sizes={sizes}
        loading={loading}
        // Width and height attributes on img can help with layout shifts
        // but in this setup, the parent (picture or div) often controls dimensions.
      />
    </ImageWrapper>
  );
};

export default OptimizedImage;
