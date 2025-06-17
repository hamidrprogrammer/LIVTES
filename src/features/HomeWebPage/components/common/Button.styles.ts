import styled, { css } from 'styled-components';

interface StyledButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'small' | 'medium' | 'large' | 'xlarge'; // Add xlarge
 
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: ${({ size }) =>
    size === 'small' ? '9px 20px 10px'
    : size === 'large' ? '16px 36px 18px'
    : size === 'xlarge' ? '18px 40px 20px' // Define padding for xlarge
    : '10px 24px'}; // medium default
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${({ size, theme }) =>
    size === 'small' ? theme.typography.fontSizes.lg
    : size === 'large' ? theme.typography.fontSizes['3xl']
    : size === 'xlarge' ? theme.typography.fontSizes['3xl'] // Use new font size
    : theme.typography.fontSizes.lg}; // medium default
  line-height: ${({ theme, size }) => size === 'xlarge' ? '41px' : theme.typography.lineHeights.tight}; // Specific line height for CTA button
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  cursor: pointer;
  text-align: center;
  white-space: nowrap;

  /* Variants */
  ${({ variant = 'primary', theme, size }) => { // Added size to context for primary variant
    switch (variant) {
      case 'secondary':
        return css`
          background-color: ${theme.colors.white};
          color: ${theme.colors.textSecondary};
          border: 2px solid transparent;
          ${size === 'xlarge' && `color: ${theme.colors.primary};`} // Specific text color for CTA button
          &:hover {
            background-color: ${theme.colors.backgroundDark};
            box-shadow: ${theme.breakpoints.sm};
          }
        `;
      case 'tertiary':
        return css`
          background-color: rgba(255, 255, 255, 0.1);
          color: ${theme.colors.accent};
          border: 2px solid ${theme.colors.accent};
          backdrop-filter: blur(10px);
          &:hover {
            background-color: rgba(255, 255, 255, 0.2);
            border-color: ${theme.colors.white};
            color: ${theme.colors.white};
          }
        `;
      case 'ghost':
        return css`
            background-color: ${theme.colors.accent};
            color: ${theme.colors.primary};
            border: 2px solid transparent;
            &:hover {
                background-color: ${theme.colors.darkBlueGray};
                color: ${theme.colors.white};
            }
        `;
      case 'primary': // Hero button
      default:
        return css`
          background-color: rgba(255, 255, 255, 0.1);
          color: ${theme.colors.accent};
          border: 2px solid ${theme.colors.accent};
          backdrop-filter: blur(10px);
          font-size: ${theme.typography.fontSizes['3xl']}; // Default primary button font size
          padding: 16px 36px 18px;
          &:hover {
            background-color: ${theme.colors.accent};
            color: ${theme.colors.accentBlue};
          }
        `;
    }
  }}
`;
