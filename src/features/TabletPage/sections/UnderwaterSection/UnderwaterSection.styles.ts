// TabletPage/sections/UnderwaterSection/UnderwaterSection.styles.ts
import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';
import Image from '../../../../assets/images/products/image 29.png'; // underwaterImage29Url

// آدرس تصاویر برای پس‌زمینه و دکوریشن
const underwaterImage29Url = Image;
// Using a more descriptive placeholder or actual path if available
const decorativeImage26UnderwaterUrl = 'https://via.placeholder.com/1606x918/222222/FFFFFF?text=Decorative+Underwater+Effect';

export const UnderwaterSectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 840px; // Desktop fixed height as per Figma
  background-color: ${({ theme }) => theme.colors.black};
  overflow: hidden; 
  display: flex;
  align-items: center;
  justify-content: flex-end; // Aligns TextContent to the right on desktop

  ${media.tablet} {
    height: auto;
    min-height: 700px;
    padding: 60px 20px; 
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: auto; // Let content define height, or set a smaller min-height like 400px if needed
    padding: 40px 15px; 
    justify-content: center;
    text-align: center;
    flex-direction: column; 
  }
`;

export const BackgroundImage29 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, rgba(63, 255, 248, 0.4), rgba(63, 255, 248, 0.4)), url(${underwaterImage29Url});
  background-blend-mode: color, normal;
  background-size: cover;
  background-position: center;
  z-index: 1; 

  @media (max-width: 768px) {
    opacity: 0.7; // Slightly more subtle on mobile if needed
  }
`;

export const DecorativeImage26 = styled.div`
  position: absolute;
  width: 1606.18px;
  height: 918.2px;
  left: -1200px; 
  top: 50%;
  transform: translateY(-50%) rotate(-90deg) scaleY(-1);
  transform-origin: center;
  background-image: url(${decorativeImage26UnderwaterUrl});
  background-size: cover; 
  opacity: 0.2;
  z-index: 0; 

  ${media.tablet} {
    left: -1400px; 
    opacity: 0.15;
  }
  @media (max-width: 768px) {
    display: none; // Keep hidden on mobile
  }
`;

export const TextContent = styled.div`
  position: relative;
  z-index: 2; 
  width: 455px; 
  margin-right: 10%; 
  padding-top:400px;
  color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    width: 80%;
    max-width: 500px; 
      padding-top:0px;

    margin-right: 0; 
    padding: 0; 
  }

  @media (max-width: 768px) {
    width: 100%; // Use full width within container padding
    max-width: none; 
    margin-right: 0;
          padding-top:0px;

    padding: 20px 0; // Add some vertical padding if needed, horizontal is from container
    text-align: center; // Ensure text is centered
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.h2Size}; // e.g., 50px desktop
  line-height: 1.2;
  margin-bottom: 20px;

  ${media.tablet} {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 28px; // Adjusted for mobile
    margin-bottom: 15px;
  }
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.h3Size}; // e.g., 30px desktop
  line-height: 1.3;

  ${media.tablet} {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 18px; // Adjusted for mobile
    line-height: 1.4; // Improve readability for paragraphs
  }
`;