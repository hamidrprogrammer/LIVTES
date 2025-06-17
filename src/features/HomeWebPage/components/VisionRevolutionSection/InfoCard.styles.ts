import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';

interface CardContainerProps {
  backgroundImageUrl?: string;
  gradientOverlay?: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  position: relative; // For absolute positioning of content
  width: 100%; // Will be controlled by grid/flex parent
  height: 550px; // Default height, can be overridden by parent grid
  border-radius: ${({ theme }) => theme.borderRadius.medium}; // 10px
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  justify-content: flex-end; // Align content to the bottom
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.greyLight}; // Fallback if no image

  ${({ backgroundImageUrl, gradientOverlay }) =>
    backgroundImageUrl &&
    `
    background-image: ${gradientOverlay ? gradientOverlay + ', ' : ''} url('${backgroundImageUrl}');
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
  text-align: left; // Content within card is left-aligned
`;

export const CardTitle = styled.h3`

  font-size: ${({ theme }) => theme.typography.fontSizes['4xl']}; // Responsive from 40px
  line-height: ${({ theme }) => theme.typography.lineHeights.normal}; // 120%
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

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
  max-width: 480px; // Control description width within card

  @media ${media.md} {
    font-size: ${({ theme }) => theme.typography.fontSizes.lg}; // 18px
  }
`;
