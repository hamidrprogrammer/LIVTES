// src/sections/BundlePicker/BundleOptionCard.tsx
import React from 'react';
import {
  CardWrapper,
  Title,
  DetailsRow,
  Description,
  Price,
} from './BundleOptionCard.styles';
import { BundleOptionData } from '@/core/types';

interface BundleOptionCardProps {
  option: BundleOptionData;
  isSelected: boolean;
  onSelect: (optionId: string) => void;
}

const BundleOptionCard: React.FC<BundleOptionCardProps> = ({
  option,
  isSelected,
  onSelect,
}) => {
  const handleCardClick = () => {
    if (!option.disabled) {
      onSelect(option.id);
    }
  };

  return (
    <CardWrapper
      $isSelected={isSelected}
      $isDisabled={option.disabled}
      onClick={handleCardClick}
      role="radio"
      aria-checked={isSelected}
      aria-disabled={option.disabled}
      tabIndex={option.disabled ? -1 : 0}
    >
      <Title>{option.title}</Title>
      <DetailsRow>
        <Description>{option.description}</Description>
        {option.price && <Price>{option.price}</Price>}
      </DetailsRow>
    </CardWrapper>
  );
};

export default BundleOptionCard;