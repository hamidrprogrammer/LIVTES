/* eslint-disable @typescript-eslint/no-unused-vars */
// src/features/ShopProductCard/ShopProductCard.tsx
import React from 'react';
import { Variants } from 'framer-motion';
import { ProductImage, ShopCardButton, ShopCardSubtitleText, ShopCardTitleText, ShopCardWrapper } from './ShopProductCard.styles';


const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export interface ShopProductCardProps {
  id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink?: string;
  productImageSrc: string;
  productImageAlt: string;
  productImageMaxWidth?: string; // e.g. "172px" for tablets
  backgroundGradient: string;
}

const ShopProductCard: React.FC<ShopProductCardProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink = "#",
  productImageSrc,
  productImageAlt,
  productImageMaxWidth,
  backgroundGradient,
}) => {
  return (
    <ShopCardWrapper
      // $bgGradient={backgroundGradient}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      {/* <ShopCardTitleText variant="sectionTitleSmall" as="h3">
        {title}
      </ShopCardTitleText>
      <ShopCardSubtitleText variant="bodySmall" as="p">
        {subtitle}
      </ShopCardSubtitleText> */}
      <ProductImage
        src={productImageSrc}
        alt={productImageAlt}
        // $imgMaxWidth={productImageMaxWidth}
        objectFit="cover" // Ensure whole product is visible
        loading="lazy"
      />
      {/* <ShopCardButton href={buttonLink} textWhite>
        {buttonText}
      </ShopCardButton> */}
    </ShopCardWrapper>
  );
};

export default ShopProductCard;
