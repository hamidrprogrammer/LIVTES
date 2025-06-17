// src/components/Icon/ChevronIcon.tsx
import { pxToRem } from '@/core/theme/theme';
import React from 'react';
import styled, { css } from 'styled-components';

interface ChevronProps {
  isOpen?: boolean;
  color?: string;
  size?: string; // e.g., '10px'
  strokeWidth?: string; // e.g., '2px'
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ChevronWrapper = styled.div<ChevronProps>`
  width: ${({ size }) => size || pxToRem(11)};
  height: ${({ size }) => size ? `calc(${size} / 2)` : pxToRem(5.5)};
  position: relative;
  transition: transform 0.3s ease-in-out;
  
  ${({ direction, isOpen }) => {
    let rotation = 0;
    if (direction === 'down') rotation = isOpen ? 180 : 0;
    if (direction === 'up') rotation = isOpen ? 0 : 180;
    // Add left/right if needed
    return `transform: rotate(${rotation}deg);`;
  }}
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: ${({ color, theme }) => color || theme.colors.primary};
    height: ${({ strokeWidth }) => strokeWidth || pxToRem(2)};
    width: 60%;
    top: 50%; // Center vertically before rotation
  }

  &::before {
    left: 0;
    transform: translateY(-50%) rotate(45deg);
    transform-origin: left center;
  }

  &::after {
    right: 0;
    transform: translateY(-50%) rotate(-45deg);
    transform-origin: right center;
  }

  // Specific styling for larger FAQ chevron
  ${({ size }) => size === pxToRem(21) && css` 
    height: calc(${pxToRem(21)} / 2);
    &::before, &::after {
      width: 55%; 
    }
  `}
`;

const ChevronIcon: React.FC<ChevronProps> = ({
  isOpen,
  color,
  size,
  strokeWidth,
  direction = 'down'
}) => {
  return <ChevronWrapper isOpen={isOpen} color={color} size={size} strokeWidth={strokeWidth} direction={direction} aria-hidden="true" />;
};

export default ChevronIcon;