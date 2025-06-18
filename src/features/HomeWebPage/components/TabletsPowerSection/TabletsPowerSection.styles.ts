// src/features/Hom.avif'age/components/TabletsPowerSection/TabletsPowerSection.styles.ts
import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';
import homepage_revolution from "../../../../assets/images/home/homepage_sec4 1.avif'"

export const TabletsPowerSectionContainer = styled.section`
  width: 100%;
  min-height: 860px; // As per Figma
  // Assuming homepage_sec4.jpg is in public/images/
  background: url(${homepage_revolution}) no-repeat center center/cover;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center; // Center content horizontally
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  position: relative; // For overlay

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

export const TabletsPowerContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center; // Center content on mobile
  z-index: 2; // Above overlay

  @media ${media.lg} {
    align-items: flex-end; // Align content to the right on desktop
    padding-right: ${({ theme }) => theme.spacing.xxl}; // More padding on the right for desktop
  }
`;

export const TextContent = styled.div`
  max-width: 450px; // Constrain text width
  display: flex;
  flex-direction: column;
  align-items: center; // Center text and buttons on mobile
  text-align: center; // Center text on mobile

  @media ${media.lg} {
    align-items: flex-start; // Text aligned to left within its block
    text-align: left;
    max-width: 380px; // Based on Figma (Title width 301px, Desc 352px)
                        // The left calc positions it to the right, so text block itself is left-aligned
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.fontSizes['5xl']}; // Responsive from 50px
  line-height: ${({ theme }) => theme.typography.lineHeights.normal}; // 120%
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media ${media.md} {
    font-size: ${({ theme }) => theme.typography.fontSizes['6xl']}; // 50px
  }
`;

export const SectionDescription = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular}; // Figma specifies 400
  font-size: ${({ theme }) => theme.typography.fontSizes.lg}; // Responsive from 20px
  line-height: ${({ theme }) => theme.typography.lineHeights.normal}; // 120%
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media ${media.md} {
    font-size: ${({ theme }) => theme.typography.fontSizes.xl}; // 20px
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column; // Stack buttons on mobile
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;

  @media ${media.sm} {
    flex-direction: row;
    justify-content: center;
    width: auto;
  }

  @media ${media.lg} {
    justify-content: flex-start;
  }
`;
