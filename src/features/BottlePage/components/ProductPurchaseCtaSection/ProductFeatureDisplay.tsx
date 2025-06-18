import React from 'react';
import styled from 'styled-components';
const iconoirColorFilter = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/iconoir-color-filter.svg';
const iconoirHydrogen = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/iconoir-hydrogen.svg';
const group6 = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/group-6.avif';
const membrane = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/products/membrane.svg';
const radix = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/products/radix-icons_dimensions.svg'
const ion_magnet = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/products/ion_magnet.svg';
const symbols_water = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/products/material-symbols_water-loss-rounded.svg';
const wave = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/products/iconoir-sine-wave.svg';
const hydration = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/products/iconoir-hydrogen.svg';
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 100%;

  margin: 0 auto;
`;

const FeatureItem = styled.div`
  text-align: center;
  color: #ffffff;
`;

const FeatureIcon = styled.img`
  height: 32px;
  width: 32px;
  margin-bottom: 8px;
  object-fit: contain;
justify-self: center;
  &.membrane-icon {
    height: 24px;
    width: 24px;
  }
`;

const FeatureText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  white-space: nowrap;
  margin: 0;
  
  &.small-text {
    white-space: normal;
  }
`;

interface Feature {
  icon: string;
  text: string | string[];
  iconClass?: string;
  textClass?: string;
}

const featuresData: Feature[] = [
  { icon: symbols_water, text: "Volume 320ml / 10.8 fl oz", textClass: "small-text" },
  { icon: radix, text: ["Diameter 6 cm / 2.4 in", "Height 22 cm / 8.7 in"], textClass: "small-text" },
  { icon: hydration, text: "Molecular Hydrogen" },
  { icon: wave, text: "Frequency" },
  { icon: iconoirColorFilter, text: "Chromotherapy" },
  { icon: ion_magnet, text: "Magnetic Field" },
  { icon: membrane, text: "100°c Membrane", iconClass: "membrane-icon" },
];

export const ProductFeatureDisplay = () => {
  return (
    <FeatureContainer>
      {featuresData.map((feature, index) => (
        <FeatureItem key={index}>
          <FeatureIcon 
            src={feature.icon} 
            alt={Array.isArray(feature.text) ? feature.text.join(' ') : feature.text} 
            className={feature.iconClass}
          />
          {Array.isArray(feature.text) ? (
            feature.text.map((line, lineIndex) => (
              <FeatureText key={lineIndex} className={feature.textClass}>{line}</FeatureText>
            ))
          ) : (
            <FeatureText className={feature.textClass}>{feature.text}</FeatureText>
          )}
        </FeatureItem>
      ))}
    </FeatureContainer>
  );
};
