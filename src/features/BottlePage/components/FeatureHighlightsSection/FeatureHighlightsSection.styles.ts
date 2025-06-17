import styled from 'styled-components';
import { media, Theme } from '../../../../core/theme/theme';
import plantesec from '@assets/images/bottle/plantesec.png'
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';
// Assumed image path: public/images/earth_background_0140.png (based on Figma '0140 1')
const sectionBackgroundImage = plantesec;
// Decorative image (image 20 from Figma)
const decorativeOverlayImage = '/images/decorative_overlay_ planète.png'; // Replace with actual image name

export const SectionWrapper = styled(SmartImage)`
  position: relative;
  width: 100%;
  height: 860px; // As per Figma
  background-color: #01040B; // Fallback color from Figma (Rectangle 2)
  background-image: url(${sectionBackgroundImage});
  background-size: cover;
  background-position: center center;
  color: ${({ theme }) => theme.colors.white};
  overflow: hidden; // Important for absolutely positioned elements

  // Decorative overlay from 'image 20'
  &::after {
    content: '';
    position: absolute;
    // Positioning and size based on Figma for 'image 20' needs to be relative
    // width: 537.98px; height: 411.56px; left: 466.66px; top: 4267px (absolute page)
    // For simplicity, I'm making it illustrative. Exact replication of this overlay is complex.
    width: 30%; 
    height: 40%;
    left: 35%; // Adjust to visually match
    top: 50%;  // Adjust to visually match
    background-image: url(${decorativeOverlayImage});
    background-size: contain;
    background-repeat: no-repeat;
    mix-blend-mode: screen;
    opacity: 0.25;
    transform: rotate(50.74deg) translate(-50%, -50%); // Center then rotate
    z-index: 1;
    pointer-events: none; // So it doesn't interfere with interactions

    ${media.tabletDown} {
      display: none; // Hide complex decorative elements on smaller screens
    }
  }

  ${media.tabletDown} {
    height: auto;
    padding: ${({ theme }) => theme.spacing.xxl} 0;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.maxWidth};
  height: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column; // For title and then pills container
  z-index: 2; // Above the ::after pseudo-element

  ${media.tabletDown} {
    align-items: center; // Center pills container on mobile
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight}; // 300
  font-size: ${({ theme }) => theme.typography.h2Size}; // 50px
  line-height: 1.2; // or 60px
  color: ${({ theme }) => theme.colors.white};
  width: 437px; // As per Figma
  margin-top: 150px; // (4147px - 3997px) from section top
  // left: calc(50% - 437px/2 - 353.5px)
  // This means it's (1440/2) - (437/2) - 353.5 = 720 - 218.5 - 353.5 = 148px from left edge of 1440px viewport
  margin-left: calc( (100% - ${({ theme }: { theme: Theme }) => theme.maxWidth}) / 2 + (148px - ${({ theme }: { theme: Theme }) => parseInt(theme.spacing.xl)}) ); // Complex calc to try to match Figma based on viewport
  // Simpler approach:
  // margin-left: 148px; // If ContentWrapper padding is considered 0 for this calc.
  // Let's use a fixed margin from the container's start for larger screens.
  // This calculation for margin-left is experimental. A grid layout might be better.
  // For simplicity, I'll make it less offset on smaller screens.

  align-self: flex-start; // Keep title to the left within the centered ContentWrapper
  
  ${media.tabletDown} {
    width: 90%;
    max-width: 437px;
    margin-top: ${({ theme }) => theme.spacing.lg};
    margin-left: auto; // Center title on mobile
    margin-right: auto;
    text-align: center;
    align-self: center;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

// Container for the absolutely positioned pills on desktop
export const PillsContainer = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 1; // Takes remaining space to allow absolute positioning of pills within

  ${media.tabletDown} {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacing.xl};
  }
`;
