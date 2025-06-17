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
import { ProductVariationSchema } from '@/core/zodSchemas/shopSchema';
import QuantitySelector from '../../QuantitySelector/QuantitySelector';
import z from 'zod';


interface ColorOptionCardProps {
  option:z.infer<typeof ProductVariationSchema> ;
  isSelected: boolean;
    index: number;
    handleQuantity: (optionId: number, quantity: string) => void;

  currentQuantity: number;
  onSelect: (optionId: string) => void;
  onQuantityChange: (optionId: string, newQuantity: number) => void;
}

const ColorOptionCard: React.FC<ColorOptionCardProps> = ({
  option,
  isSelected,
  currentQuantity,
  handleQuantity,
  index,
  onSelect,
  onQuantityChange,
}) => {
  const handleCardClick = () => {
    onSelect(option.id.toString());
    onQuantityChange(option.id.toString(), 1);
  };


  return (
    <CardWrapper $isSelected={isSelected} onClick={handleCardClick} role="radio" aria-checked={isSelected} tabIndex={0}>
      <InfoColumn>
        <ColorName>{option.name}</ColorName>
        <DetailsRow>
          <DetailText className="volume">{option.volume}</DetailText>
          <DetailText className="price">{option.sale_price?.gross_value_after_discount_string}</DetailText>
        </DetailsRow>
      </InfoColumn>
      {
       index == 0?
           <>
                 <ColorSwatch $colorStyle={'linear-gradient(318.14deg, #3D3E42 45.22%, #636469 66.87%, #3D3E42 87.08%)'} aria-label={`${option.name} color swatch`} />

           </>:<>
                 <ColorSwatch $colorStyle={ 'linear-gradient(135.76deg, #ADA171 14.5%, #D0C59C 31%, #ADA171 52.5%)'} aria-label={`${option.name} color swatch`} />

           </>
       
      }
      
      <QuantitySelectorContainer>
        <QuantitySelector
          currentQuantity={currentQuantity}
          onQuantityChange={handleQuantity}
          minQuantity={0} // کاربر می‌تواند تعداد را صفر کند
          maxQuantity={5} // یک حد بالا برای تعداد (قابل تنظیم)
          label="Qty" // برچسب کوتاه‌تر برای این بخش
          option={option}        />
      </QuantitySelectorContainer>
    </CardWrapper>
  );
};

export default ColorOptionCard;