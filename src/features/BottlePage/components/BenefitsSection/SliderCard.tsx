import React from 'react';
import styled from 'styled-components';
import { media, Theme } from '../../../../core/theme/theme';
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';

interface SliderCardProps {
  imageUrl: string;
  caption: string;
  aosDelay?: string;
}

const CardWrapper = styled.div`
  flex: 0 0 auto; // Prevents shrinking/growing, respects basis size
  width: 322px; // As per Figma
  margin-right: ${({ theme }) => theme.spacing.lg}; // Space between cards
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden; // To ensure image border-radius is applied

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    width: 280px; // Slightly smaller on mobile for better visibility
  }
`;

const CardImage = styled(SmartImage)`
  width: 100%;
  height: 350px; // As per Figma
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.medium}; // Rounded corners for the image itself
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const CardCaption = styled.p`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md} 0; // Padding above/below caption
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold}; // 600 in Figma, using Bold (700) for emphasis
  font-size: ${({ theme }) => theme.typography.bodySize}; // 16px
  line-height: 1.2; // or 19px
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center; // Center caption text under the image
  margin-top: ${({ theme }) => theme.spacing.sm}; // Space between image and caption
  margin-bottom: 0; // Reset default p margin
  min-height: 38px; // From Figma (height: 38px) - can use 2 lines
`;

const SliderCard: React.FC<SliderCardProps> = ({ imageUrl, caption, aosDelay }) => {
  return (
    <CardWrapper data-aos="fade-up" data-aos-delay={aosDelay}>
      <CardImage imageUrl={imageUrl} />
      <CardCaption>{caption}</CardCaption>
    </CardWrapper>
  );
};

export default SliderCard;
