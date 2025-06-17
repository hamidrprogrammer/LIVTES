/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { BuyOptionCard, BuyOptionCardProps } from '../BuyOptionCard/BuyOptionCard';
import { OptionsContainer, SectionTitle } from './BundleOptions.styles';
import Bottle_Shop_C_grey from "@assets/images/products/Bottle_Shop_C_grey 1.png"
const initialBundleOptions: Omit<BuyOptionCardProps, 'onCardClick' | 'isActive' | 'id'>[] = [
  {
    title: 'One pack',
    subtitle: 'LVQ+ 30 Tablets',
    price: '€49.99',
    'data-aos': 'fade-left', 'data-aos-delay': '100',
  },
  {
    title: 'Two packs',
    subtitle: 'LVQ+ 60 Tablets',
    price: '€89.99',
    'data-aos': "fade-left", 'data-aos-delay': "200"
  },
  {
    title: 'Three packs',
    subtitle: 'LVQ+ 90 Tablets',
    price: '€129.99',
    'data-aos': "fade-left", 'data-aos-delay': "300"
  },
];

const bottleOption: Omit<BuyOptionCardProps, 'onClick' | 'isActive' | 'id'> = {
  title: 'Need the bottle?',
  subtitle: 'Grab it here',
  price: '€19.99',
  isBottleCard: true,
  bottleImageSrc:Bottle_Shop_C_grey,
  'data-aos': "fade-left", 'data-aos-delay': "400",
  onCardClick: function (id: string): void {
    throw new Error('Function not implemented.');
  }
};

const frequencyOptionsData: Omit<BuyOptionCardProps, 'onClick' | 'isActive' | 'id' | 'isDisabled'>[] = [
  {
    title: 'Monthly',
    subtitle: 'LVQ+ 30 Tablets / month',
    price: '€45.99',
    'data-aos': "fade-left", 'data-aos-delay': "100",
    onCardClick: function (id: string): void {
      throw new Error('Function not implemented.');
    }
  },
  {
    title: 'Every 2 Months',
    subtitle: 'LVQ+ 60 Tablets / 2 months',
    price: '€85.99',
    'data-aos': "fade-left", 'data-aos-delay': "200",
    onCardClick: function (id: string): void {
      throw new Error('Function not implemented.');
    }
  },
  {
    title: 'Every 3 Months',
    subtitle: 'LVQ+ 90 Tablets / 3 months',
    price: '€125.99',
    'data-aos': "fade-left", 'data-aos-delay': "300",
    onCardClick: function (id: string): void {
      throw new Error('Function not implemented.');
    }
  },
  {
    title: 'One-time Purchase',
    subtitle: 'No subscription',
    'data-aos': "fade-left", 'data-aos-delay': "400",
    onCardClick: function (id: string): void {
      throw new Error('Function not implemented.');
    }
  },
];

interface BundleOptionsProps {
  onBundleSelect: (bundleId: string, price: string | undefined) => void;
  onFrequencySelect: (frequencyId: string) => void;
}

export const BundleOptions: React.FC<BundleOptionsProps> = ({ onBundleSelect, onFrequencySelect }) => {
  const [selectedBundleId, setSelectedBundleId] = useState<string | null>('bundle-0');
  const [selectedFrequencyId, setSelectedFrequencyId] = useState<string | null>('freq-3');

  const handleBundleClick = (id: string) => {
    setSelectedBundleId(id);
    const selected = initialBundleOptions.find((opt, index) => `bundle-${index}` === id) || (id === 'bottle' ? bottleOption : null);
    onBundleSelect(id, selected?.price);
  };

  const handleFrequencyClick = (id: string) => {
    setSelectedFrequencyId(id);
    onFrequencySelect(id);
  };

  return (
    <>
      <SectionTitle data-aos="fade-left">LVQ+. Choose your bundle.</SectionTitle>
      <OptionsContainer>
        {initialBundleOptions.map((option, index) => (
          <BuyOptionCard
            key={`bundle-${index}`}
            id={`bundle-${index}`}
            {...option}
            isActive={selectedBundleId === `bundle-${index}`}
            onCardClick={handleBundleClick}
          />
        ))}
        <BuyOptionCard
          key="bottle"
          id="bottle"
          {...bottleOption}
          isActive={selectedBundleId === 'bottle'}
          onCardClick={handleBundleClick}
        />
      </OptionsContainer>

      <SectionTitle className="frequency-title" data-aos="fade-left" style={{ marginTop: '40px' }}>Select your frequency.</SectionTitle>
      <OptionsContainer>
        {frequencyOptionsData.map((option, index) => (
          <BuyOptionCard
            key={`freq-${index}`}
            id={`freq-${index}`}
            {...option}
            isActive={selectedFrequencyId === `freq-${index}`}
            onCardClick={handleFrequencyClick}
            price={index < 3 && option.price ? option.price : undefined}
          />
        ))}
      </OptionsContainer>
    </>
  );
};