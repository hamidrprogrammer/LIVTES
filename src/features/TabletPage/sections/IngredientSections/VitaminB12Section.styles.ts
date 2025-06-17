import styled from 'styled-components'; 
import { media } from '../../../../core/theme/theme';
import homepage_sec1 from '@assets/images/products/image 48.png'

const vitaminB12BgImageUrl = homepage_sec1;

export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 800px; // As per Figma
  background-color: ${({ theme }) => theme.colors.black}; // Base background
  overflow: hidden;
  display: flex;
  align-items: center; 
  justify-content: flex-end; // Align text content to the right

  ${media.tablet} {
    height: auto;
    min-height: 700px;
    padding: 80px 20px;
    justify-content: center; // Center content on tablet
    text-align: center;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 600px;
    padding: 60px 15px;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90.25deg, rgba(0, 0, 0, 0) 40.64%, #000000 80.32%), url(${vitaminB12BgImageUrl});
  background-size: cover;
  background-position: center left; // Show more of the left side of the image before fade
  z-index: 0;
  opacity: 0.9;
`;

export const TextContent = styled.div`
  position: relative;
  z-index: 1; // Above background image
  max-width: 520px; 
  padding-right: clamp(30px, 10vw, 148px); // Responsive right padding
  color: ${({ theme }) => theme.colors.white};
  text-align: left; // Text within the block is left-aligned

  ${media.tablet} {
    max-width: 600px;
    padding-right: 0; 
    text-align: center; 
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const IngredientTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.h3Size}; // 30px
  line-height: 120%;
  margin-bottom: 15px;

  ${media.tablet} {
    font-size: 28px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.h4`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 20px;
  max-width: 492px;

  ${media.tablet} {
    font-size: 18px;
    max-width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: 20px;
  line-height: 120%; // or 24px
  margin-bottom: 20px;
  max-width: 487px;

  ${media.tablet} {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
