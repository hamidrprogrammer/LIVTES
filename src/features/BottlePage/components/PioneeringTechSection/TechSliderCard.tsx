import React from 'react';
import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';

interface TechSliderCardProps {
  imageUrl: string;
  caption: string;
  aosDelay?: string;
}

const CardWrapper = styled.div`
  flex: 0 0 auto;
  width: 440px; // As per Figma
  margin-right: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;

  &:last-child {
    margin-right: 0;
  }

  ${media.tabletDown} {
    width: 320px; // Adjust for smaller screens
  }
  @media (max-width: 768px) {
    width: 280px;
  }
`;

const CardImage = styled(SmartImage)`
  width: 100%;
  height: 350px; // As per Figma
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const CardCaption = styled.p`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md} 0;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold}; // 700 as per Figma
  font-size: ${({ theme }) => theme.typography.bodySize}; // 16px
  line-height: 1.2; // or 19px
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.sm};
  margin-bottom: 0;
  min-height: 38px; // From Figma (height: 38px)
`;

const TechSliderCard: React.FC<TechSliderCardProps> = ({ imageUrl, caption, aosDelay }) => {
  return (
    <CardWrapper data-aos="fade-up" data-aos-delay={aosDelay}>
      <CardImage imageUrl={imageUrl} />
      <CardCaption>{caption}</CardCaption>
    </CardWrapper>
  );
};

export default TechSliderCard;
