/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/Section/Section.styles.ts
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';

interface StyledSectionProps {
  $bgColor?:any;
  $bgImage?: string;
  $bgGradient?: string;
  $minHeight?: string; // e.g., '860px'
  $noPaddingY?: boolean;
  $noPaddingX?: boolean;
  $fullWidth?: boolean; // If section should break out of main content max-width
  $relative?: boolean; // If position relative is needed for children
  $overflowHidden?: boolean;
}

export const StyledSection = styled.div`
  width: 100%;
  max-width: ${({ theme, $fullWidth }) => $fullWidth ? '100%' : theme.maxWidth };
  margin-left: auto;
  margin-right: auto;
  padding: ${({ theme, $noPaddingY, $noPaddingX }) => css`
    ${$noPaddingY ? '0' : theme.spacing.sectionPaddingY} 
    ${$noPaddingX ? '0' : theme.spacing.medium}
  `};
  
  ${({ $bgImage }) => $bgImage && `background-image: url(${$bgImage});`}
  ${({ $bgGradient }) => $bgGradient && `background: ${$bgGradient};`}
  
  background-size: cover;
  background-position: center;

  ${({ $minHeight }) => $minHeight && `min-height: ${$minHeight};`}
  ${({ $relative }) => $relative && `position: relative;`}
  ${({ $overflowHidden }) => $overflowHidden && `overflow: hidden;`}

  /* Default flex properties for centering content if needed, can be overridden */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; /* Default text align for content within section */
`;
