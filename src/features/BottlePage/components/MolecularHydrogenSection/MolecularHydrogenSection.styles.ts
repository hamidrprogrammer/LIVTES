import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';
const  whater = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/whatter.png'
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';
// Assumed image path: public/images/molecular_hydrogen_bg.jpg
const sectionBackgroundImage = whater;

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 800px;
  background-color: ${({ theme }) => theme.colors.greyLight}; // Fallback: #EEEEEE
  display: flex;
  align-items: center; // Vertically center content block
  justify-content: flex-start; // Align content block to the left
  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  ${media.tabletDown} {
    height: auto;
    min-height: 600px;
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
    justify-content: center; // Center content on smaller screens
    text-align: center;
  }
`;

export const BackgroundImage = styled(SmartImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${sectionBackgroundImage});
  background-size: cover;
  background-position: center center; // Adjust as needed for visual focus
   
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(63, 255, 248, 0.7); // Cyan tint
    mix-blend-mode: color; // As per Figma 'background-blend-mode: color, normal;'
  }

  ${media.tabletDown} {
    // On smaller screens, the flipped image might not look good or the focus might be off.
    // Consider using a different image or adjusting the background position.
    // For now, we keep it, but this is a common responsive design challenge.
    // transform: scaleX(1); // Optionally unflip or use a mobile-specific image
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: 0 auto; // Center the container that holds the text block
  padding: 0 ${({ theme }) => theme.spacing.xl}; // Standard page padding
  display: flex; // To control positioning of TextBlock
  justify-content: flex-start; // Align TextBlock to the left

  ${media.tabletDown} {
    justify-content: center;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export const TextBlock = styled.div`
  max-width: 450px; // Based on Figma widths (title 458px, paragraph 398px)
  // The Figma 'left' calcs like calc(50% - 458px/2 - 343px) indicate
  // the text block is to the left of the overall page center.
  // With margin: 0 auto on ContentContainer and justify-content: flex-start,
  // this block will be on the left side of the centered content area.
  // If more specific positioning relative to viewport edge is needed, adjust ContentContainer.

  ${media.tabletDown} {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; // Center text elements if TextBlock itself is centered
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight}; // 300
  font-size: ${({ theme }) => theme.typography.h2Size}; // 50px
  line-height: ${({ theme }) => theme.typography.lineHeightHeading}; // 1.2
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg}; // Approx 230px - 150px for section relative top

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight}; // 300
  font-size: ${({ theme }) => theme.typography.h3Size}; // 30px
  line-height: ${({ theme }) => theme.typography.lineHeightHeading}; // 1.2
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xl}; // Approx 322px - 230px for section relative top

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular}; // 400
  font-size: ${({ theme }) => theme.typography.h4Size}; // 20px
  line-height: 1.4; // Slightly more than 1.2 for readability
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0; // No margin needed if it's the last element

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
