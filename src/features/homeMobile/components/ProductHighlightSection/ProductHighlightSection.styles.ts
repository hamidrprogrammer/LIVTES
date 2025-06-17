// src/features/ProductHighlightSection/ProductHighlightSection.styles.ts
import styled from 'styled-components';
import Section from '../../components/Section/Section';
import Text from '../../../../lib/shared/components/Besic/Typography/Text';
import OptimizedImage from '../../components/Image/OptimizedImage';

export const ProductSection = styled(Section)`
  /* min-height: 860px; handled by Section prop */
  /* background color/image handled by Section prop */
  /* padding handled by Section prop, but we want content at bottom */
  justify-content: flex-end; /* Align content (text, buttons) to the bottom */
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const BackgroundImageWrapper = styled(OptimizedImage)`
  position: absolute;
  top: 0;
  left: 0; // In Figma, some images like image 2 (Tablets) had left: -50px. This needs careful handling.
  width: 100%; // Default, can be overridden for art direction
  height: 100%; // Default
  z-index: 0;

  // Example for art-directed images (like Tablets 'image 2' or Bottle 'homepage_bottle2')
  &.tablets-bg-image img { // Specific class for Tablets background
    width: auto; // Let height control and overflow
    height: 476px; // Original height
    min-width: 100%; // Ensure it covers horizontally at least
    object-position: -50px 0; // Example for left offset
    left: -50px; // this on the img directly won't work, needs wrapper or object-position
  }
  &.bottle-bg-image img { // Specific class for Bottle background
    /* homepage_bottle2 2: width: 314px; height: 404px; left: 21px; top: 1786px; */
    /* This implies the image is not a full bleed background but an element within */
    /* For simplicity here, assuming it's a background that needs positioning. */
    object-position: center 20%; // Example, adjust based on image focus
  }
`;

export const OverlayGradient = styled.div<{ $gradient?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: ${({ $gradient }) => $gradient || 'transparent'};
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.lg}; /* Pushes content up from section bottom */
  padding: 0 ${({ theme }) => theme.spacing.medium}; /* Horizontal padding for content itself */
`;

export const ProductTitle = styled(Text)`
  /* variant 'sectionTitleLarge' (40px) handles size */
  /* Color set by prop */
  max-width: 320px; /* Approximate from designs for titles */
`;

export const ProductSubtitle = styled(Text)`
  /* variant 'bodyMedium' (20px) handles size */
  /* Color white by default */
  max-width: 352px; /* Approximate from designs for subtitles */
`;

export const ActionButtonGroup = styled.div`
  display: flex;
  flex-direction: row; // Ensure buttons are side-by-side
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.medium};
`;
