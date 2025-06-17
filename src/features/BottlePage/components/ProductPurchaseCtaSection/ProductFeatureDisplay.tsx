import React from 'react';
import styled from 'styled-components';
import iconoirColorFilter from '../../../../assets/images/bottle/iconoir-color-filter.svg';
import iconoirHydrogen from '../../../../assets/images/bottle/iconoir-hydrogen.svg';
import group6 from '../../../../assets/images/bottle/group-6.png';
import membrane from '../../../../assets/images/products/membrane.svg';
import radix from '../../../../assets/images/products/radix-icons_dimensions.svg'
import ion_magnet from '../../../../assets/images/products/ion_magnet.svg';
import symbols_water from '../../../../assets/images/products/material-symbols_water-loss-rounded.svg';
import wave from '../../../../assets/images/products/iconoir-sine-wave.svg';
import hydration from '../../../../assets/images/products/iconoir-hydrogen.svg';
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
