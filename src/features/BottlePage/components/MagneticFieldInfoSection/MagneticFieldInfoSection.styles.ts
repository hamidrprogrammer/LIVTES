import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';
// Assumed image path: public/images/bottle_sec7_magnetic_field_bg.jpg (for 'bottle_sec7 1')
const sectionBackgroundImage = "https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/mask-group-5.avif";

export const SectionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  background-color: ${({ theme }) => theme.colors.primaryDark}; // #072C3D (Fallback or base)
  background-image: url(${sectionBackgroundImage});
  background-size: cover;
  // The image likely has its visual focus on the left, text will be on the right.
  // background-position: left center; // To ensure left part of image is prominent
  background-position: center center; // Default, adjust if image focus is off
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center; // Vertically center the content container
  overflow: hidden;

  ${media.tabletDown} {
    height: auto;
    min-height: 600px;
    padding: ${({ theme }) => theme.spacing.xxl} 0;
    background-position: center center; // Adjust for mobile if needed
  }
`;

export const ContentContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: flex-end; // Align TextContainer to the right

  ${media.tabletDown} {
    justify-content: center;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export const TextContainer = styled.div`
  width: 45%; // Allow text to take up roughly the right half
  max-width: 391px; // Max width of the title, other elements are narrower
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Text elements will be left-aligned within this block

  // Figma: Text starts around 853px from left on a 1440px screen.
  // (1440 - 853) = 587px available on the right. Max text width is 391px.
  // So, width: 45% is a good estimate.

  ${media.tabletDown} {
    width: 100%;
    max-width: 500px; // Limit width on mobile
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular}; // 400
  font-size: ${({ theme }) => theme.typography.h2Size}; // 50px
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.h3`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold}; // 700
  font-size: ${({ theme }) => theme.typography.h4Size}; // 20px
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  max-width: 336px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Paragraph = styled.p`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold}; // 700 as per Figma
  font-size: ${({ theme }) => theme.typography.bodySize}; // 16px
  line-height: 1.4; // or 19px
  margin-bottom: 0;
  max-width: 336px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
