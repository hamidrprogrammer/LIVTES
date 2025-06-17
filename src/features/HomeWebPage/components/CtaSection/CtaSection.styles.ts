import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';

export const CtaSectionContainer = styled.section`
  width: 100%;
  height: 500px; // As per Figma
  background: linear-gradient(180deg, #0F3445 0%, #000000 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  overflow: hidden; // Prevent content overflow
`;

export const CtaContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column; // Headline above button on mobile
  align-items: center; // Center content on mobile
  justify-content: center; // Center content on mobile
  gap: ${({ theme }) => theme.spacing.xl};
  text-align: center; // Center text on mobile

  @media ${media.lg} {
    flex-direction: row; // Side-by-side on desktop
    justify-content: space-between; // Headline left, Button right
    align-items: center; // Vertically align items
    text-align: left; // Align headline text to left
    padding: 0 5%; // Add some horizontal padding
  }
`;

export const CtaHeadline = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily}; // Outfit
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular}; // 400
  font-size: ${({ theme }) => theme.typography.fontSizes['7xl']}; // Responsive from 80px
  line-height: 100%;
  max-width: 811px; // As per Figma
  flex-shrink: 0; // Prevent headline from shrinking too much

  @media ${media.md} {
    font-size: ${({ theme }) => theme.typography.fontSizes['8xl']}; // 80px
  }
`;
