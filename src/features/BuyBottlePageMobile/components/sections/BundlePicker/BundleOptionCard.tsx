// src/sections/BundlePicker/BundleOptionCard.tsx
import React from 'react';
import {
  CardWrapper,
  Title,
  DetailsRow,
  Description,
  Price,
} from './BundleOptionCard.styles';

interface BundleOptionCardProps {
  title: string;
  description: string;
  price?: string;
  isSelected: boolean;
  isDisabled?: boolean;
  onSelect: () => void;
}

const BundleOptionCard: React.FC<BundleOptionCardProps> = ({
  title,
  description,
  price,
  isSelected,
  isDisabled = false,
  onSelect,
}) => {
  const handleCardClick = () => {
    if (!isDisabled) {
      onSelect();
    }
  };

  return (
    <CardWrapper
      $isSelected={isSelected}
      $isDisabled={isDisabled}
      onClick={handleCardClick}
      role="radio"
      aria-checked={isSelected}
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
    >
      <Title>{title}</Title>
      <DetailsRow>
        <Description>{description}</Description>
        {price && <Price>{price}</Price>}
      </DetailsRow>
    </CardWrapper>
  );
};

export default BundleOptionCard;