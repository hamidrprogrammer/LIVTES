// src/features/InfoCardSection/InfoCard.styles.ts
import styled from 'styled-components';
import { motion } from 'framer-motion';
import OptimizedImage from '../../components/Image/OptimizedImage';
import Text from '../../../../lib/shared/components/Besic/Typography/Text';
import Button from '../../components/Button/Button';

export const CardOuterWrapper = styled(motion.div)`
  width: 355px; /* From Figma */
  height: 450px; /* From Figma */
  border-radius: ${({ theme }) => theme.borderRadius.small}; /* 10px */
  background-color: ${({ theme }) => theme.colors.grey}; /* Fallback D9D9D9 if no image */
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  display: flex; // To use flex-end for content
  flex-direction: column; // Stack content vertically
  justify-content: flex-end; // Align content (text, button) to the bottom
  align-items: flex-start; // Center content horizontally
  padding: ${({ theme }) => theme.spacing.lg}; /* 24px, consistent with Figma */
  color: ${({ theme }) => theme.colors.white}; /* Default text color for cards */

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.lg}; /* Spacing between cards, approx 10px for Vision to Revolution */
    /* Based on Figma: Vision top 3474, Revolution top 3884. Diff = 410. Card height 400. So 10px gap.
       Let's use a consistent spacing like theme.spacing.large (24px) for visual rhythm or small (10px) to be precise.
       Using small for the 10px gap seen in Figma.
    */
    @media (max-width: 374px) { // On very narrow screens ensure some margin
        margin-bottom: ${({ theme }) => theme.spacing.medium};
    }
  }
`;

export const CardBgImage = styled(OptimizedImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  /* object-fit: cover; by default in OptimizedImage */
  /* object-position can be passed as prop for art direction */
  /* Example for homepage_vision 1 (width: 529px; height: 400px; left: -90px;)
     This means the image needs to be wider and offset.
     OptimizedImage's parent (CardOuterWrapper) will clip it due to overflow:hidden.
     The OptimizedImage itself can be styled to be wider via props or a className.
  */
   &.vision-image img { // example for specific art direction
     object-position: calc(50% - 90px / 2) center; // crude way to simulate left offset
   }
`;

export const CardGradientOverlay = styled.div<{ $gradient?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ $gradient }) => $gradient || 'transparent'};
  z-index: 1;
`;

export const CardContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Center title, subtitle, button */
  text-align: left;
  gap: ${({ theme }) => theme.spacing.sm}; /* Approx 8-10px between title/subtitle/button */
`;

export const InfoCardTitle = styled(Text)`
  /* variant 'sectionTitleSmall' (35px) handles styling */
  /* Color white by default from CardOuterWrapper */
  max-width: 280px; /* Ensure text wraps within card */
`;

export const InfoCardSubtitle = styled(Text)`
  /* variant 'bodySmall' (18px) handles styling */
  /* Color white by default */
  max-width: 300px; /* Ensure text wraps */
  line-height: 120%; /* or 22px */
`;

export const InfoCardButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.sm};
  background-color:${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.large};

  
`;
