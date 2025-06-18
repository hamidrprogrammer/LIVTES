// src/features/Hom.avif'age/components/HeroSection/HeroSection.styles.ts
import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';
const homepage_sec1 = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/products/homepage_sec1.avif';

export const HeroContainer = styled.section`
  height: 860px; // As per Figma
  width: 100%;
  // Assuming homepage_sec1.jpg is in public/images/
  background: url(${homepage_sec1}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  position: relative; // For potential overlays if needed

  &::before { // Optional: dark overlay for better text readability
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3); // Adjust opacity as needed
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 960px; // Control content width
  margin: 0 auto;
  padding-top: 60px; // Adjust for fixed navbar height
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.fontSizes['7xl']}; // 100px -> responsive
  line-height: 100%; // As per Figma
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg}; // Approx 40px (449px - (209px + 200px))

  @media ${media.md} {
    font-size: ${({ theme }) => theme.typography.fontSizes['8xl']};
  }

  @media ${media.lg} {
    font-size: ${({ theme }) => theme.typography.fontSizes['9xl']}; // 100px
  }
`;

export const HeroSubtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.fontSizes['2xl']}; // 40px -> responsive
  line-height: 100%; // As per Figma
  color: #C2DEED; // As per Figma
  margin-bottom: ${({ theme }) => theme.spacing.xxl}; // Approx 60px (569px - (449px + 80px))
  max-width: 610px;
  margin-left: auto;
  margin-right: auto;

  @media ${media.md} {
    font-size: ${({ theme }) => theme.typography.fontSizes['4xl']};
  }
   @media ${media.lg} {
    font-size: ${({ theme }) => theme.typography.fontSizes['5xl']}; // 40px
  }
`;

// Button is imported from common components
