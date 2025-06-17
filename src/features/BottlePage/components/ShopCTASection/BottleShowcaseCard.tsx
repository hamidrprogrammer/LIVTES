// BottlePage/components/ShopCTASection/BottleShowcaseCard.tsx
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';
import React from 'react';
import styled from 'styled-components';
// Assuming media and Theme are correctly imported from your theme file
// import { media, Theme } from '../../../../core/theme/theme';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 300px;
  padding: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    max-width: 250px;
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

const BottleImage = styled.img`
  width: 154px;
  height: 514px;
  object-fit: contain;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    width: 120px;
    height: auto;
    max-height: 400px;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const BottleName = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${({ theme }) => theme.typography.h3Size};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 22px; // Adjusted from 24px
  }
`;

const PriceText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${({ theme }) => theme.typography.h4Size};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 16px; // Adjusted from 18px
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const BuyButton = styled.button`
  padding: 9px 20px;
  width: 121px;
  height: 42px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: 18px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.accentCyan};
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid ${({ theme }) => theme.colors.accentCyan};
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 20px; /* Ensure good height */
    min-height: 44px; /* Ensure minimum tap height */
    height: auto; /* Let padding define height */
    width: auto; /* Adjust width if needed, or keep fixed if design requires */
    min-width: 120px;
  }
`;

interface BottleShowcaseCardProps {
  bottleName: string;
  priceText: string;
  imageUrl: string;
  aosDelay?: string;
  onBuyClick: () => void;
}

const BottleShowcaseCard: React.FC<BottleShowcaseCardProps> = ({
  bottleName,
  priceText,
  imageUrl,
  aosDelay,
  onBuyClick,
}) => {
  return (
    <CardWrapper data-aos="fade-up" data-aos-delay={aosDelay}>
      <BottleImage src={imageUrl} alt={bottleName} />
      <BottleName>{bottleName}</BottleName>
      <PriceText>{priceText}</PriceText>
      <BuyButton onClick={onBuyClick}>Buy Bottle</BuyButton>
    </CardWrapper>
  );
};

export default BottleShowcaseCard;