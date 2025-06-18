// src/features/ShopProductCard/ShopProductCardSection.tsx
import React from 'react';
import Section from '../../components/Section/Section';
import ShopProductCard, { ShopProductCardProps } from './ShopProductCard';
import { theme } from '../../../../core/theme/theme';
const  imageProductTwo = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/home/imageProductTwo.avif';
const  imageProduct = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/home/imageProduct.avif';
const shopCardsData: ShopProductCardProps[] = [
  {
    id: "shop-bottle",
    title: "Bottle",
    subtitle: "Experience hydration redefined with the CellPower Hydrogen Water Bottle—where innovation meets well-being.",
    buttonText: "Learn more",
    buttonLink: "#learn-bottle",
    productImageSrc:imageProductTwo, // Placeholder - Bottle_Shop_C_grey 1
    productImageAlt: "CellPower Hydrogen Water Bottle",
    productImageMaxWidth: "280px", // Adjusted for card, Figma's image was larger
    backgroundGradient: `linear-gradient(163.96deg, ${theme.colors.gradientGoldStart} 53.43%, ${theme.colors.gradientGraphiteEnd} 91.19%)`,
  },
  {
    id: "shop-tablets",
    title: "Tablets",
    subtitle: "Elevate your daily hydration with our hydrogen tablets—portable wellness in every dose.",
    buttonText: "Learn more",
    buttonLink: "#learn-tablets",
    productImageSrc: imageProduct, // Placeholder - image 33
    productImageAlt: "Hydrogen Tablets",
    productImageMaxWidth: "172px",
    backgroundGradient: `radial-gradient(100% 100% at 50.14% 100%, ${theme.colors.tabletsGradientEdge1} 7%, ${theme.colors.tabletsGradientEdge2} 42.5%, ${theme.colors.tabletsGradientCenter} 48.5%, ${theme.colors.tabletsGradientEdge3} 100%)`,
  },
];

const ShopProductCardSection: React.FC = () => {
  return (
    <Section id="shop-products" bgColor="lightBackground" noPaddingY>
        {/* This section is within the larger lightBackground area that starts with InfoCards
            Padding needs to be managed to match the 10px horizontal offset for the cards.
        */}
      {shopCardsData.map(card => (
        <ShopProductCard
          key={card.id}
          id={card.id}
          title={card.title}
          subtitle={card.subtitle}
          buttonText={card.buttonText}
          buttonLink={card.buttonLink}
          productImageSrc={card.productImageSrc}
          productImageAlt={card.productImageAlt}
          productImageMaxWidth={card.productImageMaxWidth}
          backgroundGradient={card.backgroundGradient}
        />
      ))}
    </Section>
  );
};

export default ShopProductCardSection;
