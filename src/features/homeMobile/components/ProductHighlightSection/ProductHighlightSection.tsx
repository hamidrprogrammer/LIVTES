/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/features/ProductHighlightSection/ProductHighlightSection.tsx
import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  ProductSection,
  BackgroundImageWrapper,
  OverlayGradient,
  ContentWrapper,
  ProductTitle,
  ProductSubtitle,
  ActionButtonGroup,
} from './ProductHighlightSection.styles';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
const contentVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } },
};

export interface ProductHighlightSectionProps {
  id: string;
  backgroundImageSrc?: string;
  backgroundImageAlt: string;
  backgroundImageClassName?: string; // For specific image styling (e.g., tablets-bg-image)
  overlayGradient?: string;
  backgroundColor?: any;
  title: string;
  titleColor?: any;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imageObjectFit?: React.CSSProperties['objectFit'];
  imageObjectPosition?: string; // For BackgroundImageWrapper
}

const ProductHighlightSection: React.FC<ProductHighlightSectionProps> = ({
  id,
  backgroundImageSrc,
  backgroundImageAlt,
  backgroundImageClassName,
  overlayGradient,
  backgroundColor = "black",
  title,
  titleColor = "white",
  subtitle,
  primaryButtonText,
  primaryButtonLink = "#",
  secondaryButtonText,
  secondaryButtonLink = "#",
  imageObjectFit = "cover",
  imageObjectPosition
}) => {
    const navigator = useNavigate();

  return (
    <ProductSection
      id={id}
      bgColor={backgroundColor}
      // bgImage={!backgroundImageSrc ? undefined : backgroundImageSrc} // If image is separate element, don't set on Section
      minHeight="860px" // Common height from Figma
      noPaddingX // Section content has its own padding
      noPaddingY // Section flex layout handles vertical positioning
      fullWidth // These sections are full width
      // Framer Motion props are on the Section component itself
    >
      {backgroundImageSrc && (
        <BackgroundImageWrapper
          src={backgroundImageSrc}
          alt={backgroundImageAlt}
          className={backgroundImageClassName}
          objectFit={imageObjectFit} // Control how BG image fits
          // objectPosition={imageObjectPosition}
          loading="lazy"
        />
      )}
      {overlayGradient && <OverlayGradient $gradient={overlayGradient} />}

      <ContentWrapper as={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={contentVariants}>
        <ProductTitle variant="sectionTitleLarge" as="h2"  size="xxxxl" align="center">
          {title}
        </ProductTitle>
        <ProductSubtitle variant="bodyMedium" as="p" color="white" align="center">
          {subtitle}
        </ProductSubtitle>
        <ActionButtonGroup>
          {primaryButtonText && (
            <Button href={primaryButtonLink} textWhite largeRadius>
              {primaryButtonText}
            </Button>
          )}
          {secondaryButtonText && (
            <Button href={secondaryButtonLink} secondary largeRadius onClick={()=>{navigator("/tablete")}}>
              {secondaryButtonText}
            </Button>
          )}
        </ActionButtonGroup>
      </ContentWrapper>
    </ProductSection>
  );
};

export default ProductHighlightSection;
