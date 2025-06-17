// src/components/Image/OptimizedImage.styles.ts
import styled from 'styled-components';

interface ImageWrapperProps {
  $objectFit?: React.CSSProperties['objectFit'];
  $borderRadius?: string;
}

export const ImageWrapper = styled.picture<ImageWrapperProps>`
  display: block; // Or inline-block if preferred
  line-height: 0; // Remove extra space below image if display: inline-block

  img {
    display: block;
    width: 100%;
    height: 100%; // Make image fill container, aspect ratio managed by container or object-fit
    object-fit: ${({ $objectFit }) => $objectFit || 'cover'};
    border-radius: ${({ $borderRadius }) => $borderRadius || '0'};
  }
`;
