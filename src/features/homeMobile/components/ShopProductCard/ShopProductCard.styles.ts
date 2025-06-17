// src/features/HomeMobile/components/ShopProductCard/ShopProductCard.styles.ts

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Text from '../../../../lib/shared/components/Besic/Typography/Text'; // Adjusted path
import Button from '../Button/Button'; // Adjusted path
import OptimizedImage from '../Image/OptimizedImage'; // Adjusted path
import { theme } from '../../../../core/theme/theme';
console.log("✅ ShopProductCard.styles.ts loaded!");

// Interface for the props specific to the ProductImage styled component
interface ShopCardWrapperProps {
  $bgGradient?: string; // Transient prop for background gradient
}

// Pass the interface to styled(motion.div)
export const ShopCardWrapper = styled(motion.div)<ShopCardWrapperProps>`
  width: 355px; /* Figma width */
  height: 400px; /* Figma height */
  border-radius: ${({ theme }) => theme.borderRadius.small}; /* 10px */
  background: ${({ $bgGradient }) => $bgGradient || theme.colors.grey}; /* Use theme color as fallback */
  padding: ${({theme}) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  text-align: center;
  position: relative; 
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
  }
`;

export const ShopCardTitleText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary}; 
  margin-top: ${({theme}) => theme.spacing.sm}; 
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const ShopCardSubtitleText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  max-width: 315px; 
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;
interface ProductImageStyledProps {
  $imgMaxWidth?: string; // Transient prop for max-width
  // You can also include props from OptimizedImage if you need to type them here,
  // but styled-components usually infers them. The main thing is to add your own.
}
// Apply the ProductImageStyledProps here
export const ProductImage = styled(OptimizedImage)<ProductImageStyledProps>`
  /* Figma: Bottle 'image' - width: 331px; height: 291px; top: 5230px
    Figma: Tablets 'image 33' - width: 172px; height: 187px; top: 5737px
    These absolute positions are relative to the page.
    Here, we position relative to the card.
  */
  width: 100%; 
  height: 100%; // Maintain aspect ratio
  margin: 0 auto ${({ theme }) => theme.spacing.medium}; // Center image and provide spacing
`;

export const ShopCardButton = styled(Button)`
  margin-top: auto; 
  margin-bottom: ${({theme}) => theme.spacing.sm}; 
`;