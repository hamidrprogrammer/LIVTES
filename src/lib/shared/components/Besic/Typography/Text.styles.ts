/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/Typography/Text.styles.ts
import styled, { css, DefaultTheme } from 'styled-components';

export type TextVariant =
  | 'heroTitle' // 60px, white
  | 'heroSubtitle' // 30px, textLight
  | 'sectionTitleLarge' // 50px, primary (CTA) or 40px white/dark
  | 'sectionTitleSmall' // 35px, white (InfoCard titles)
  | 'bodyLarge' // 30px, textDark (Intro)
  | 'bodyMedium' // 20px, white/dark
  | 'bodySmall' // 18px, white/dark
  | 'caption' // 16px
  | 'legal' // 14px
  | 'quote' // 30px, white
  | 'quoteAuthor' // 18px, white, bold
  | 'quoteRole'; // 18px, white

type TextColor =any;
type TextSize = any;

interface StyledTextProps {
  $variant?: TextVariant;
  $color?: TextColor;
  $size?: TextSize; // Allow overriding size
  $weight?: number | string;
  $align?: 'left' | 'center' | 'right' | 'justify';
  $lh?: string; // line-height directly
  $opacity?: number;
  theme: DefaultTheme;
}

export const StyledText = styled.p<StyledTextProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ $weight }) => $weight || 300};
  font-size: ${({ $size, theme }) => ($size ? theme.typography.fontSizes.md : theme.typography.fontSizes.medium)};
  line-height: ${({ $lh }) => $lh || '120%'}; /* Default line height */
  color: ${({ $color, theme }) => ($color ? theme.colors[$color as keyof typeof theme.colors] : theme.colors.textDark)};
  text-align: ${({ $align }) => $align || 'left'};
  opacity: ${({ $opacity }) => $opacity || 1};

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'heroTitle':
        return css`
          font-size: ${theme.typography.fontSizes.heroTitle};
          font-weight: 400;
          line-height: 100%; /* or 60px */
          color: ${theme.colors.white};
          text-align: center;
        `;
      case 'heroSubtitle':
        return css`
          font-size: ${theme.typography.fontSizes.xxl}; /* 30px */
          font-weight: 300;
          line-height: 100%; /* or 30px */
          color: ${theme.colors.textLight}; /* C2DEED */
          text-align: center;
        `;
      case 'sectionTitleLarge': // For CTA (50px) and large section titles (40px)
        return css`
          font-size: ${theme.typography.fontSizes.sectionTitle}; /* Default to 50px */
          font-weight: 400; /* CTA title */
          line-height: 100%; /* or 50px */
          /* Color set by prop */
        `;
      case 'sectionTitleSmall': // For InfoCards (35px)
        return css`
          font-size: ${theme.typography.fontSizes.xxxl}; /* 35px */
          font-weight: 300;
          line-height: 120%; /* or 42px */
          color: ${theme.colors.white};
          text-align: center;
        `;
      case 'bodyLarge': // For Intro text (30px)
        return css`
          font-size: ${theme.typography.fontSizes.xxl}; /* 30px */
          font-weight: 300;
          line-height: 120%; /* or 36px */
          color: ${theme.colors.textDark};
        `;
      case 'bodyMedium': // For 20px text
        return css`
          font-size: ${theme.typography.fontSizes.large}; /* 20px */
          font-weight: 400; /* Often 40px for 20px text in Figma */
          line-height: 120%; /* or 24px */
        `;
      case 'bodySmall': // For 18px text
        return css`
          font-size: ${theme.typography.fontSizes.medium}; /* 18px */
          font-weight: 300; /* Often 300 for 300px text in Figma */
          line-height: 120%; /* or 22px */
        `;
      case 'caption': // For 16px text in footer etc.
        return css`
          font-size: ${theme.typography.fontSizes.small}; /* 16px */
          font-weight: 400;
          line-height: 125%; /* or 20px */
        `;
      case 'legal': // For 14px text in footer
        return css`
          font-size: ${theme.typography.fontSizes.xs}; /* 14px */
          font-weight: 400;
          line-height: 128%; /* or 18px */
        `;
      case 'quote':
        return css`
          font-family: ${theme.typography.fontFamily}; /* Assuming Glacial Indifference maps to primary */
          font-size: ${theme.typography.fontSizes.xxl}; /* 30px */
          font-weight: 400;
          line-height: 120%; /* or 36px */
          color: ${theme.colors.white};
          hanging-punctuation: first last;
        `;
      case 'quoteAuthor':
        return css`
          font-family: ${theme.typography.fontFamily};
          font-size: ${theme.typography.fontSizes.medium}; /* 18px */
          font-weight: 700; /* Bold */
          line-height: 120%; /* or 22px */
          color: ${theme.colors.white};
          hanging-punctuation: first last;
        `;
      case 'quoteRole':
        return css`
          font-family: ${theme.typography.fontFamily};
          font-size: ${theme.typography.fontSizes.medium}; /* 18px */
          font-weight: 400;
          line-height: 120%; /* or 22px */
          color: ${theme.colors.white};
          hanging-punctuation: first last;
        `;
      default:
        return null;
    }
  }}
`;
