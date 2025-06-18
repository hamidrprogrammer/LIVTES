import React from 'react';
import BottleShowcaseCard from './BottleShowcaseCard';
import FeatureSpecItem from './FeatureSpecItem';
import * as S from './ShopCTASection.styles';

import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/core/hooks/useIsMobile';
const bottle_sec8_gold = "https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/bottle_sec8_gold.avif";
const bottle_sec8_grey = "https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/bottle_sec8_grey.avif";

const bottleData = [
  {
    id: 'graphite',
    bottleName: 'Graphite Sand',
    priceText: 'LumiVitæ Bottle €498.00',
    imageUrl: bottle_sec8_grey,
  },
  {
    id: 'gold',
    bottleName: 'Desert Gold',
    priceText: 'LumiVitæ Bottle €498.00',
    imageUrl: bottle_sec8_gold,
  },
];

// As per Figma, the feature details are identical for both sides.
// In a real scenario, these might differ or be general product features.
const featureSpecs = [
  { iconName: 'material-symbols:water-loss-rounded', textLines: ['Volume 320ml / 10.8 fl oz'] },
  { iconName: 'radix-icons:dimensions', textLines: ['Diameter 6 cm / 2.4 in', 'Height 22 cm / 8.7 in'] },
  { iconName: 'iconoir:hydrogen', textLines: ['Molecular Hydrogen'] },
  { iconName: 'iconoir:sine-wave', textLines: ['Frequency'] },
  { iconName: 'iconoir:color-filter', textLines: ['Chromotherapy'] },
  { iconName: 'ion:magnet', textLines: ['Magnetic Field'] },
  { iconName: 'ph:thermometer-cold-thin', textLines: ['100°c Membrane'] }, // Using a generic temp icon
];

const ShopCTASection: React.FC = () => {
 
  const navigate =useNavigate();
  
  const handleBuyBottle = (bottleName: string) => {
     
    navigate('/products-bottle/1')
    // Add navigation to shop or modal logic here
  };
  return (
    <S.SectionWrapper id="shop-cta-section">
      <S.TopTextContainer>
        <S.MainTitle data-aos="fade-right">Redefine your well being</S.MainTitle>
        <S.ActionSubtitle data-aos="fade-left">
          Order a bottle today or join the revolution and become a brand partner.
        </S.ActionSubtitle>
      </S.TopTextContainer>

      <S.BottlesContainer>
        {bottleData.map((bottle, index) => (
          <BottleShowcaseCard
            key={bottle.id}
            bottleName={bottle.bottleName}
            priceText={bottle.priceText}
            imageUrl={bottle.imageUrl}
            onBuyClick={() => handleBuyBottle(bottle.bottleName)}
            aosDelay={`${index * 100}`}
          />
        ))}
      </S.BottlesContainer>

      <S.SeparatorLine data-aos="zoom-in-up" />

      <S.FeaturesGrid data-aos="fade-up" data-aos-delay="200">
        {featureSpecs.map((spec, index) => (
          <FeatureSpecItem
            key={index}
            iconName={spec.iconName}
            textLines={spec.textLines}
          />
        ))}
      </S.FeaturesGrid>
    </S.SectionWrapper>
  );
};

export default ShopCTASection;
