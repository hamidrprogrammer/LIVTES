// src/features/HomeWebPage/components/IntroSection/IntroSection.styles.ts
import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';

export const IntroSectionContainer = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xxl} 0; // Approx 1231px total height, content needs space
  // Rectangle 17: background: #F9FDFD; opacity: 0.25;
  // Applying opacity to the color directly:
  background-color: rgba(249, 253, 253, 0.25); // #F9FDFD with 0.25 opacity
  min-height: 800px; // Ensure enough height, adjust as needed based on content flow
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${media.md} {
    padding: ${({ theme }) => theme.spacing.xxl} 0; // 80px top/bottom
  }
   @media ${media.lg} {
    min-height: 700px; // Figma total height 1231px, Hero is 860px. This section top: 860px
  }
`;

export const IntroContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl}; // Gap between left and right areas on mobile

  @media ${media.lg} {
    flex-direction: row;
    justify-content: space-between; // Creates the two-column feel
    align-items: flex-start; // Align items to the top of their respective columns
    padding: 0 ${({ theme }) => theme.spacing.xxl}; // 64px side padding on large screens
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; // Vertically center if less content
  padding-right: ${({ theme }) => theme.spacing.lg}; // Space between columns

  @media ${media.md} {
    align-items: flex-start; // Align text to left
    text-align: left;
  }
   @media ${media.lg} {
    max-width: 420px; // Based on "Two Innovations" width: 418px
    margin-top: 60px; // Push content down a bit to match figma top: 1010px relative to section
  }
`;

export const RightColumn = styled.div`
  flex: 1.3; // Give a bit more space to the right column
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg}; // Gap between text blocks
  
  @media ${media.md} {
    align-items: flex-start;
    text-align: left;
  }
  @media ${media.lg} {
    max-width: 560px; // Based on text block width: 557px
    margin-top: 50px; // Push content down a bit
  }
`;

export const MainTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.fontSizes['5xl']}; // 50px -> responsive
  line-height: 100%;
  color: ${({ theme }) => theme.colors.textPrimary}; // #072C3D
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media ${media.md} {
    font-size: ${({ theme }) => theme.typography.fontSizes['6xl']}; // 50px
  }
`;

export const SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.fontSizes['4xl']}; // 40px -> responsive
  line-height: ${({ theme }) => theme.typography.lineHeights.normal}; // 120%
  color: ${({ theme }) => theme.colors.textPrimary}; // #072C3D
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media ${media.md} {
    font-size: ${({ theme }) => theme.typography.fontSizes['5xl']}; // 40px
  }
`;

export const ParagraphText = styled.p<{ $opacity?: number }>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.fontSizes.xl}; // 30px -> responsive
  line-height: ${({ theme }) => theme.typography.lineHeights.normal}; // 120%
  color: ${({ theme }) => theme.colors.textPrimary}; // #072C3D
  opacity: ${({ $opacity }) => $opacity || 1};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media ${media.md} {
    font-size: ${({ theme }) => theme.typography.fontSizes['3xl']};
  }
  @media ${media.lg} {
    font-size: ${({ theme }) => theme.typography.fontSizes['3xl']}; // 30px
  }
`;
