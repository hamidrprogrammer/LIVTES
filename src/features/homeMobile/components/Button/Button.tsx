/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// src/features/HomeMobile/components/Button/Button.tsx
import React from 'react';
import { StyledButton } from './Button.styles'; // Assuming Button.styles.ts is in the same folder

// Define props for the Button component itself
interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  textWhite?: boolean;
  largeRadius?: boolean;
  isCtaLarge?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>; // Union type for onClick
  className?: string;
  type?: "button" | "submit" | "reset"; // Specific to button
  // Allow other valid HTML attributes for button or anchor
  // This is a common pattern, but be mindful of passing too many unrelated props.
  // Styled-components $transientProps are better for styling-only props.
  disabled?: boolean; // Example of a common prop
  [key: string]: any; // Catch-all for other props, use with caution
}

const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  secondary,
  textWhite,
  largeRadius,
  isCtaLarge,
  href,
  target,
  rel,
  onClick,
  type = "button", // Default type for button
  className,
  ...restProps // Collects other passed props like 'disabled', 'aria-label', etc.
}) => {
  // Transient props for styling, won't be passed to the DOM element by styled-components
  const transientStyledProps = {
    $primary: primary,
    $secondary: secondary,
    $textWhite: textWhite,
    $largeRadius: largeRadius,
    $isCtaLarge: isCtaLarge,
  };

  if (href) {
    // Props for the anchor element
    // We explicitly don't pass 'type' to an anchor.
    // 'restProps' might contain other button-specific attributes we don't want on an anchor.
    // It's safer to destructure known anchor-compatible props from restProps or type them.
    const { type: _buttonType, ...anchorCompatibleRestProps } = restProps;

    return (
      <StyledButton
        as="a"
        href={href}
        target={target}
        rel={rel}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>} // Cast for anchor context
        className={className}
        {...transientStyledProps}
        {...anchorCompatibleRestProps} // Pass compatible remaining props
      >
        {children}
      </StyledButton>
    );
  }

  // Props for the button element
  return (
    <StyledButton
      type={type}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>} // Cast for button context
      className={className}
      {...transientStyledProps}
      {...restProps} // Pass all remaining props (including native button attributes like 'disabled')
    >
      {children}
    </StyledButton>
  );
};

export default Button;