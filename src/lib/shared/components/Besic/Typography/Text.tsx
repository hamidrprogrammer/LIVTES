/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/Typography/Text.tsx
import React from 'react';
import { StyledText, TextVariant } from './Text.styles';



interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType; // p, h1, h2, span, etc.
  variant?: TextVariant;
  color?: any;
  size?: any;
  weight?: number | string;
  align?: 'left' | 'center' | 'right' | 'justify';
  lh?: string; // line-height directly
  opacity?: number;
}

const Text: React.FC<TextProps> = ({
  children,
  as = 'p',
  variant,
  color, // Let styled component handle default if not provided
  size,  // Let styled component handle default based on variant
  weight,
  align,
  lh,
  opacity,
  className,
  style, // Allow passing style prop
}) => {
  return (
    <StyledText
      as={as}
      $variant={variant}
      $color={color}
      $size={size}
      $weight={weight}
      $align={align}
      $lh={lh}
      $opacity={opacity}
      className={className}
      style={style} // Pass down style prop
    >
      {children}
    </StyledText>
  );
};

export default Text;
