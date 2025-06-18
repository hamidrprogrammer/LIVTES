import React from 'react';
import { HeroContainer, LeftColumn, RightColumn, PageTitle } from './HeroSection.styles';
import { ProductGallery } from '../ProductGallery/ProductGallery';
import { BundleOptions } from '../BundleOptions/BundleOptions';

export const HeroSection: React.FC = () => {

  const handleBundleSelection = (bundleId: string, price?: string) => {
     
  };

  const handleFrequencySelection = (frequencyId: string) => {
     
  };

  return (
    <HeroContainer>
      <PageTitle data-aos="fade-in" data-aos-delay="500">
        Place your LVQ+ Tablet order
      </PageTitle>

      <LeftColumn data-aos="fade-right" data-aos-duration="1200">
        <ProductGallery />
      </LeftColumn>

      <RightColumn data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
        <BundleOptions onBundleSelect={handleBundleSelection} onFrequencySelect={handleFrequencySelection} />
      </RightColumn>
    </HeroContainer>
  );
};