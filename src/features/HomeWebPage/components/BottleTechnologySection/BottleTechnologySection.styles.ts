// src/features/Hom.avif'age/components/BottleTechnologySection/BottleTechnologySection.styles.ts
import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';

export const BottleTechSectionContainer = styled.section`
  width: 100%;
  min-height: 860px; // As per Figma
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxl} 0; // 60px top/bottom, adjust as needed
  overflow: hidden; // In case image is slightly larger or for bleed effects
`;

export const BottleTechContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xl}; // 32px side padding
  display: flex;
  flex-direction: column-reverse; // Image on top on mobile
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  @media ${media.lg} {
    flex-direction: row;
    justify-content: space-between; // Text on left, Image on right
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xxl};
  }
`;

export const TextContent = styled.div`
  flex: 1;
  max-width: 450px; // Constrain text width
  display: flex;
  flex-direction: column;
  align-items: center; // Center text and buttons on mobile
  text-align: center; // Center text on mobile

  @media ${media.lg} {
    align-items: flex-start;
    text-align: left;
    max-width: 390px; // Based on figma (title width 376px, desc width 357px)
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.fontSizes['5xl']}; // Responsive from 50px
  line-height: ${({ theme }) => theme.typography.lineHeights.normal}; // 120%
  color: ${({ theme }) => theme.colors.accent}; // #3FFFF8
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media ${media.md} {
    font-size: ${({ theme }) => theme.typography.fontSizes['6xl']}; // 50px
  }
`;

export const SectionDescription = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular}; // Figma specifies 400
  font-size: ${({ theme }) => theme.typography.fontSizes.lg}; // Responsive from 20px
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xl}; // Approx 40-50px

  @media ${media.md} {
    font-size: ${({ theme }) => theme.typography.fontSizes.xl}; // 20px
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column; // Stack buttons on mobile
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%; // Make buttons take full width of their container on mobile

  @media ${media.sm} {
    flex-direction: row; // Side by side on larger screens
    justify-content: center; // Center buttons in their row on mobile/tablet
    width: auto; // Let buttons define their width
  }

  @media ${media.lg} {
    justify-content: flex-start; // Align to left on desktop
  }
`;

export const ImageWrapper = styled.div`
  flex: 1.2; // Give a bit more space to image
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px; // Control image size responsiveness

  img {
    width: 100%;
    max-height: 700px; // Control height
    height: auto;
    object-fit: contain; // Ensure image is not cropped
  }

  @media ${media.lg} {
    max-width: none; // Allow figma specified size if screen permits
    justify-content: flex-end; // Align image to the right
    img {
       width: auto; // Use original image aspect ratio
       max-height: 858px; // From Figma for homepage_sec3
       max-width: 858px;
    }
  }
`;
