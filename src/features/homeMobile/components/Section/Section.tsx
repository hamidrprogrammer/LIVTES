/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/Section/Section.tsx
import React from 'react';
import { Variants } from 'framer-motion';
import { StyledSection } from './Section.styles';

interface SectionProps {
  children: React.ReactNode;
  bgColor?: keyof any;
  bgImage?: string;
  bgGradient?: string;
  minHeight?: string;
  noPaddingY?: boolean;
  noPaddingX?: boolean;
  fullWidth?: boolean; // To allow hero, footer etc. to span full viewport width
  className?: string;
  id?: string;
  relative?: boolean;
  overflowHidden?: boolean;
  variants?: Variants;
  initial?: string | boolean;
  whileInView?: string;
  viewportOnce?: boolean;
  viewportAmount?: number;
  style?: React.CSSProperties;
}

const defaultSectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Section: React.FC<SectionProps> = ({
  children,
  bgColor,
  bgImage,
  bgGradient,
  minHeight,
  noPaddingX = false,
  noPaddingY = false,
  fullWidth = false,
  className,
  id,
  relative = true, // Default to true as many sections need it for overlays/bg images
  overflowHidden = true, // Default to true for sections with full-bleed backgrounds
  variants = defaultSectionVariants,
  initial = "hidden",
  whileInView = "visible",
  viewportOnce = true,
  viewportAmount = 0.2, // Start animation when 20% of section is visible
  style,
}) => {
  return (
    <StyledSection
      $bgColor={bgColor}
      $bgImage={bgImage}
      $bgGradient={bgGradient}
      $minHeight={minHeight}
      $noPaddingX={noPaddingX}
      $noPaddingY={noPaddingY}
      $fullWidth={fullWidth}
      $relative={relative}
      $overflowHidden={overflowHidden}
      className={className}
      id={id}
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: viewportOnce, amount: viewportAmount }}
      style={style}
    >
      {children}
    </StyledSection>
  );
};

export default Section;
