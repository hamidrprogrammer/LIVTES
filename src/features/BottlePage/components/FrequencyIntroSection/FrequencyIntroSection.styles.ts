import styled from 'styled-components';
import { media, Theme } from '../../../../core/theme/theme';

const frequencies = "https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/frequencies.avif";

import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';
// Assumed image path: public/images/frequencies.jpg
const sectionBackgroundImage = frequencies;

export const SectionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  background-color: #000309; // Fallback base color from Figma
  background-image: url(${sectionBackgroundImage});
  background-size: cover;
  background-position: center center;
  color: ${({ theme }) => theme.colors.white};
  display: flex; // To center ContentContainer
  align-items: center; // Vertically align ContentContainer
  overflow: hidden;

  ${media.tabletDown} {
    height: auto;
    min-height: 700px;
    padding: ${({ theme }) => theme.spacing.xxl} 0;
  }
`;

export const ContentContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl}; // Standard page padding
  display: flex; // To position TextAndButtonCluster
  // justifyContent: flex-start; // Align cluster to the left by default

  ${media.tabletDown} {
    padding: 0 ${({ theme }) => theme.spacing.md};
    justify-content: center; // Center content on smaller screens
  }
`;

export const TextAndButtonCluster = styled.div`
  // This cluster will contain text and buttons, all left-aligned
  // Figma calculations consistently place this block starting ~148px from the left of a 1440px viewport.
  // max-width: 600px; // Approximate width based on buttons and text width
  // One way to achieve the 148px offset is specific padding/margin on this cluster if ContentContainer is full-width.
  // Or, if ContentContainer is max-width and centered, this cluster aligns left within it.
  // For now, let ContentContainer handle the main centering and padding.
  // This cluster will then naturally be on the left.

  ${media.tabletDown} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const TextBlock = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl}; // Space between text and instruction/buttons
  max-width: 391px; // Max width of text elements

  ${media.tabletDown} {
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular}; // 400
  font-size: ${({ theme }) => theme.typography.h2Size}; // 50px
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.h3`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular}; // 400
  font-size: ${({ theme }) => theme.typography.h3Size}; // 30px
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Paragraph = styled.p`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular}; // 400
  font-size: ${({ theme }) => theme.typography.h4Size}; // 20px
  line-height: 1.4;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const InstructionText = styled.p`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular}; // 400
  font-size: ${({ theme }) => theme.typography.h4Size}; // 20px
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing.lg}; // Space before buttons

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md}; // Space between buttons

  // Buttons are: Lumivitae (119px), Recovery (114px), Energy (97px)
  // Offsets from left edge of 1440px container: 148px, 287px, 421px
  // These are not evenly spaced. This suggests precise positioning or varying margins.
  // For simplicity, we use a consistent gap.

  ${media.tabletDown} {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const StyledButton = styled.button<{ width?: string }>`
  padding: 9px 20px;
  height: 42px;
  width: ${({ width }) => width || 'auto'}; // Allow specific widths
  min-width: 97px; // Smallest button width
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: 18px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.primaryDark}; // #072C3D
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px); // Note: backdrop-filter might not work on all elements/browsers without proper stacking context
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    opacity: 0.9;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }

  ${media.tabletDown} {
    width: 80%;
    max-width: 250px; // Max width for stacked buttons
  }
`;
