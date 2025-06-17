// src/sections/ColorPicker/ColorOptionCard.tsx
import React from 'react';
import {
  CardWrapper,
  InfoColumn,
  ColorName,
  DetailsRow,
  DetailText,
  ColorSwatch,
  QuantitySelectorContainer,
} from './ColorOptionCard.styles';
import { ProductVariation } from '@/core/types/api/shop';
import QuantitySelector from '../../QuantitySelector/QuantitySelector';

interface ColorOptionCardProps {
  option: ProductVariation;
  isSelected: boolean;
  index: number;
  currentQuantity: number;
  onSelect: (product: ProductVariation) => void;
  onQuantityChange: (product: ProductVariation, newQuantity: number) => void;
}

const ColorOptionCard: React.FC<ColorOptionCardProps> = ({
  option,
  isSelected,
  currentQuantity,
  index,
  onSelect,
  onQuantityChange,
}) => {
  const handleCardClick = () => {
    // This selects the color and ensures quantity is at least 1
    onSelect(option);
  };

  const handleQuantityUpdate = (id: number, quantity: string) => {
    // This callback comes from the QuantitySelector
    // We pass it up to the parent with the full product object
    onQuantityChange(option, parseInt(quantity, 10));
  };

  // The color swatch uses a hardcoded gradient based on the item's index,
  // as per the mobile UI design. This can be replaced with dynamic data if available.
  const colorGradients = [
    'linear-gradient(318.14deg, #3D3E42 45.22%, #636469 66.87%, #3D3E42 87.08%)', // Graphite
    'linear-gradient(135.76deg, #ADA171 14.5%, #D0C59C 31%, #ADA171 52.5%)',    // Gold
  ];
  const colorStyle = colorGradients[index] || colorGradients[0];

  return (
    <CardWrapper
      $isSelected={isSelected}
      onClick={handleCardClick}
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
    >
      <InfoColumn>
        <ColorName>{option.name}</ColorName>
        <DetailsRow>
          <DetailText className="volume">{option.quantity}</DetailText>
          <DetailText className="price">{option.sale_price?.gross_value_after_discount_string}</DetailText>
        </DetailsRow>
      </InfoColumn>

      <ColorSwatch $colorStyle={colorStyle} aria-label={`${option.name} color swatch`} />

      <QuantitySelectorContainer onClick={(e) => e.stopPropagation()}>
        <QuantitySelector
          currentQuantity={currentQuantity}
          onQuantityChange={handleQuantityUpdate}
          minQuantity={0}
          maxQuantity={10} // Arbitrary max quantity
          label="Qty"
          option={option}
        />
      </QuantitySelectorContainer>
    </CardWrapper>
  );
};

export default ColorOptionCard;