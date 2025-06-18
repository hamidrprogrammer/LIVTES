import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';
const whyYouFeelItBgUrl = "https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/products/homepage_sec1.avif";

// Placeholders for background images - replace with actual paths
const underwaterImage29Url = whyYouFeelItBgUrl // Simulating water
const decorativeImage26UnderwaterUrl = whyYouFeelItBgUrl

export const UnderwaterSectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 840px; // As per Figma
  background-color: ${({ theme }) => theme.colors.black}; // Base background
  overflow: hidden; // To contain absolutely positioned elements
  display: flex;
  align-items: center; // Vertically center content if needed, or use padding
  justify-content: flex-end; // Content is on the right side in Figma

  ${media.tablet} {
    height: auto; // Adjust height for content
    min-height: 700px;
    padding: 60px 0;
    justify-content: center; // Center content on tablets
    text-align: center;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 600px;
    padding.jme
    padding: 40px 0;
    justify-content: center;
    text-align: center;
  }
`;

export const BackgroundImage29 = styled.div`
  /* Figma: image 29, position: absolute; width: 1440px; height: 854px; left: 0px; top: 836px; (top seems relative to page) */
  /* background: linear-gradient(0deg, rgba(63, 255, 248, 0.4), rgba(63, 255, 248, 0.4)), url(image.avif'); */
  position: absolute;
  top: 0; // Relative to parent UnderwaterSectionContainer
  left: 0;
  width: 100%;
  height: 100%; // Covers the section
  background-image: linear-gradient(0deg, rgba(63, 255, 248, 0.4), rgba(63, 255, 248, 0.4)), url(${underwaterImage29Url});
  background-blend-mode: color, normal;
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

export const DecorativeImage26 = styled.div`
  /* Figma: image 26 (second instance) */
  /* width: 918.2px; height: 1606.18px; left: 1470px; top: 1722px; (page relative) */
  /* transform: matrix(0, -1, -1, 0, 0, 0); (equivalent to rotate(-90deg) and scaleX(-1) or Y depending on system) */
  /* This is another large off-screen decorative element. */
  position: absolute;
  width: 1606.18px; // Original height
  height: 918.2px;  // Original width
  /* Let's try to place it bleeding from the left for this section as content is on right */
  left: -1200px; // Adjust to control visibility
  top: 50%; // Vertically centered
  transform: translateY(-50%) rotate(-90deg) scaleY(-1); // Approximation of the matrix
  transform-origin: center;
  background-image: url(${decorativeImage26UnderwaterUrl});
  background-size: cover;
  opacity: 0.2; // Make it subtle
  z-index: 0;

  ${media.tablet} {
    left: -1400px;
    opacity: 0.15;
  }
  @media (max-width: 768px) {
    display: none; // Hide on mobile
  }
`;

export const TextContent = styled.div`
  position: relative;
  z-index: 2; // Above background elements
  width: 455px; // Max width from "A Tablet Unlike Anything Before..."
  margin-right: 10%; // Pushes content a bit from the right edge
                      // Figma: left: calc(50% - 435px/2 + 350.5px) => approx 72% from left for title
                      // left: calc(50% - 455px/2 + 360.5px) => approx 72% from left for subtitle
  color: ${({ theme }) => theme.colors.white};
  
  ${media.tablet} {
    width: 80%;
    max-width: 500px;
    margin-right: 0;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-right: 0;
    padding: 0 15px;
  }
`;

export const Title = styled.h2`
  /* Figma: "Now in Your Water." width: 435px; height: 60px; font-size: 50px; */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: ${({ theme }) => theme.typography.h2Size}; // 50px
  line-height: 120%;
  margin-bottom: 20px; // Space to subtitle

  ${media.tablet} {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  /* Figma: "A Tablet Unlike Anything Before..." width: 455px; height: 78px; font-size: 30px; */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: ${({ theme }) => theme.typography.h3Size}; // 30px
  line-height: 130%;

  ${media.tablet} {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

// Note: The Figma design shows a "Mask group" (Rectangle 42 and image 27) with "visibility: hidden".
// If this is for an interaction or animation, it would need specific logic.
// For a static representation, it's not rendered.
// e.g., export const HiddenVisual = styled.div` display: none; `;
