import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'cta'; // primary (white bg, dark text), secondary (transparent bg, teal border/text)
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 9px 20px 10px;
  border-radius: 200px; // or 100px from Figma
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: 18px;
  line-height: 23px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  border: 2px solid transparent; // Base border

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.98);
  }

  ${({ variant, theme }) =>
    variant === 'primary' &&
    css`
      background: ${theme.colors.white};
      color: ${theme.colors.textSecondary}; // #1C1F23
      &:hover {
        background: ${theme.colors.buttonBackgroundHover}; // A slightly darker white or light gray
        color: ${theme.colors.black};
      }
    `}

  ${({ variant, theme }) =>
    (variant === 'secondary' || variant === 'cta') &&
    css`
      background: ${theme.colors.inputBackground}; // rgba(255, 255, 255, 0.1)
      border: 2px solid ${theme.colors.buttonBorder}; // #3FFFF8
      color: ${theme.colors.buttonText}; // #3FFFF8
      backdrop-filter: blur(10px);
      &:hover {
        background: ${theme.colors.primary};
        color: ${theme.colors.black};
        border-color: ${theme.colors.primary};
      }
    `}
`;

const SharedButton: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', ...props }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`Button clicked: ${children}`);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <StyledButton variant={variant} onClick={handleClick} {...props} data-aos="fade-up">
      {children}
    </StyledButton>
  );
};

export default SharedButton;
