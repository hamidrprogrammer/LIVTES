import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';

interface CardContainerProps {
  backgroundImageUrl?: string;
  backgroundColor?: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  position: relative;
  width: 100%; // Controlled by parent grid
  height: 550px; // Default height
  border-radius: ${({ theme }) => theme.borderRadius.medium}; // 10px
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  justify-content: center; // Center content vertically for these cards
  align-items: center; // Center content horizontally
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  // Background image setup
  ${({ backgroundImageUrl, backgroundColor, theme }) => `
    background-color: ${backgroundColor || theme.colors.darkBlueGray}; // Fallback color
    ${backgroundImageUrl && `background-image: url('${backgroundImageUrl}');`}
    background-size: cover;
    background-position: center;
  `}

  @media ${media.md} {
    height: 600px; // As per Figma
    padding: ${({ theme }) => theme.spacing.xxl};
  }
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const CardTitle = styled.h3`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${({ theme }) => theme.typography.fontSizes['4xl']}; // Responsive from 40px
  line-height: ${({ theme }) => theme.typography.lineHeights.normal}; // 120%
  color: ${({ theme }) => theme.colors.accent}; // #3FFFF8 for these cards
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  @media ${media.md} {
    font-size: ${({ theme }) => theme.typography.fontSizes['5xl']}; // 40px
  }
`;

export const CardDescription = styled.p`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${({ theme }) => theme.typography.fontSizes.md}; // Responsive from 18px
  line-height: ${({ theme }) => theme.typography.lineHeights.normal}; // 120%
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 500px; // Control description width

  @media ${media.md} {
    font-size: ${({ theme }) => theme.typography.fontSizes.lg}; // 18px
  }
`;
