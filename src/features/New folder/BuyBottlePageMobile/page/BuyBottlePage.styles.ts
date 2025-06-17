// src/pages/BuyBottlePage/BuyBottlePage.styles.ts
import { pxToRem } from '@/core/theme/theme';
import styled from 'styled-components';

export const PageWrapper = styled.main`
  position: relative; // For absolutely positioned children if any are still needed for specific overlays
  width: 100%;
  max-width: ${pxToRem(420)}; // Max width for larger phones, content scales based on 375px design
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.backgroundPage};
  /* The original CSS had backdrop-filter, which can be performance-intensive. Use with caution. */
  /* backdrop-filter: blur(10px); */ 
  /* overflow: hidden; // if a child element is causing horizontal scroll */

  // Ensure all direct children sections are block and take full width of this wrapper
  & > section {
    width: 100%;
    padding-left: ${pxToRem(20)}; // Common horizontal padding from design (e.g. 'left: 20px')
    padding-right: ${pxToRem(20)};
  }
`;