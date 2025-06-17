// src/components/Button/Button.styles.ts
import styled from 'styled-components';

interface StyledButtonProps {
  $primary?: boolean; // Prefixed with $ to avoid passing to DOM element if not a valid HTML attribute
  $secondary?: boolean;
  $textWhite?: boolean;
  $largeRadius?: boolean; // For the 200px border-radius
  // For specific CTA button sizing
  $isCtaLarge?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ $isCtaLarge }) => $isCtaLarge ? '17px 36px' : '9px 20px 10px'}; /* Figma had 16.31/18.12 top/bottom */
  border-radius: ${({ theme, $largeRadius }) => $largeRadius ? theme.borderRadius.large : theme.borderRadius.medium};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 400;
  font-size: ${({ theme, $isCtaLarge }) => $isCtaLarge ? theme.typography.fontSizes.ctaButton : theme.typography.fontSizes.medium};
  line-height: ${({ $isCtaLarge }) => $isCtaLarge ? '41px' : '23px'}; /* Match Figma height for text */
  height: ${({ $isCtaLarge }) => $isCtaLarge ? '75.44px' : '42px'}; /* Match Figma button height */
  cursor: pointer;
  transition: opacity 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
  text-align: center;
  white-space: nowrap; // Prevent text wrapping for button labels

  ${({ $primary, theme }) =>
    $primary &&
    `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.buttonTextDark}; // #03171F
    &:hover {
      opacity: 0.85;
    }
  `}

  ${({ $secondary, theme }) =>
    $secondary &&
    `
    background-color: rgba(255, 255, 255, 0.1);
    border: 2px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); /* Safari */
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      border-color: ${theme.colors.white}; // Example hover
    }
  `}

  ${({ $textWhite, theme }) => // Typically a white button with dark text
    $textWhite &&
    `
    background-color: ${theme.colors.white};
    color: ${theme.colors.primaryDark}; // e.g. #1C1F23 or #072C3D for CTA button
    &:hover {
      opacity: 0.85;
    }
  `}
`;
