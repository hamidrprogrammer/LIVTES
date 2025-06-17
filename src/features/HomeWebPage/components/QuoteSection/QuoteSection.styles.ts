import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';

export const QuoteSectionContainer = styled.section`
  width: 100%;
  min-height: 700px; // Adjusted for responsiveness, Figma height 860px
  // Assuming homepage_sec6.jpg is in public/images/
  background: url('../../../../assets/images/homepage_sec6.jpg') no-repeat center center/cover;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center; // Fallback for mobile
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
  position: relative; // For overlay

  &::before { // Dark overlay for better text readability
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); // Adjust opacity as needed
    z-index: 1;
  }

  @media ${media.md} {
    min-height: 860px;
    justify-content: flex-end; // Align content to the right as per Figma calcs
    padding-right: 5%; // Give some space from the right edge
  }
`;

export const QuoteContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 650px; // Width of the quote text block
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center; // Center text on mobile

  @media ${media.md} {
    text-align: left; // Align to left on larger screens
    margin-right: calc(50% - 650px/2 - 340px); // This complex margin pushes it left to achieve the figma 'left' value
                                                // Figma left: calc(50% - 650px/2 + 340px)
                                                // We are aligning container to right, so we need to calculate the offset from right
                                                // (1440 - (720 - 325 + 340)) = 1440 - 735 = 705px from right for content block edge
                                                // A simpler approach with flex-end on container and margin-left/right on content:
    margin-left: auto; // Pushes to the right by default if container is flex-end
    margin-right: 0; // Default
    // To achieve the specific left offset: left: calc(50% - 301px/2 + 282.5px);
    // which is 720 - 150.5 + 282.5 = 852px from true left.
    // For quote (650px wide): left: calc(50% - 650px/2 + 340px) = 720 - 325 + 340 = 735px from true left
    // On a 1440px screen, this means the content block itself is shifted.
    // The parent container is flex align-items:center, justify-content:flex-end;
    // Content wrapper max-width: 650px;
    // To position the block starting at 735px from left:
    // Need to ensure it doesn't overflow if the screen is smaller than 735px + 650px.
    // It might be better to have a main content div that spans say 1170px, then position within that.
    // For now, let's rely on the parent's flex-end and the content's max-width.
    // The specific Figma "left" values are complex for responsive fluid layouts.
    // A simpler approach: position a block of text on the right side of the viewport.
  }
`;

export const QuoteText = styled.blockquote`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${({ theme }) => theme.typography.fontSizes['3xl']}; // Responsive from 40px
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-style: normal; // Ensure it's not italic by default

  &::before, &::after {
    content: '"';
    font-size: 1.5em; // Make quotes larger
    line-height: 0; // Prevent extra spacing
    position: relative;
    top: 0.2em; // Adjust vertical alignment
  }
  &::before {
    margin-right: 0.1em;
  }
  &::after {
    margin-left: 0.1em;
  }

  @media ${media.md} {
    font-size: ${({ theme }) => theme.typography.fontSizes['5xl']}; // 40px
  }
`;

export const QuoteAuthor = styled.p`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold}; // 700
  font-size: ${({ theme }) => theme.typography.fontSizes}; // 18px
  line-height: ${({ theme }) => theme.typography.lineHeightHeading}; // 120%
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const QuoteAuthorRole = styled.p`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${({ theme }) => theme.typography.fontSizes.lg}; // 18px
  line-height: ${({ theme }) => theme.typography.lineHeightHeading}; // 120%
  color: ${({ theme }) => theme.colors.white};
`;
