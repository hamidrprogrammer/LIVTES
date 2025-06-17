// src/components/QuantitySelector/QuantitySelector.tsx
import React from 'react';
import {
  SelectorWrapper,
  QuantityControls,
  QuantityButton,
  QuantityNumberDisplay,
  QuantityLabelText,
  PlusIcon,  // آیکون‌های وارد شده از فایل استایل
  MinusIcon
} from './QuantitySelector.styles';
import { ProductVariation } from '@/core/types/api/shop';

interface QuantitySelectorProps {
  currentQuantity : number;
    option: ProductVariation;

  onQuantityChange: (id: number, quantity: string) => void;
  maxQuantity?: number; // حداکثر تعداد مجاز
  minQuantity?: number; // حداقل تعداد مجاز (معمولاً 0 یا 1)
  label?: string; // برچسب (مثلاً "Quantity")
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  option,
  currentQuantity ,
  onQuantityChange,
  maxQuantity = 10, // یک مقدار پیش‌فرض
  minQuantity = 0,   // یک مقدار پیش‌فرض
  label = "Quantity" // برچسب پیش‌فرض
}) => {
 const handleIncrease = (e: React.MouseEvent) => {
     e.stopPropagation();
     onQuantityChange(option.id, String(currentQuantity + 1));
   };
 
   const handleDecrease = (e: React.MouseEvent) => {
     e.stopPropagation();
     if (currentQuantity > 0) {
       onQuantityChange(option.id, String(currentQuantity - 1));
     }
   };

  return (
    <SelectorWrapper>
      <QuantityControls>
        <QuantityButton onClick={handleDecrease} disabled={currentQuantity <= minQuantity} aria-label="Decrease quantity">
          <MinusIcon />
        </QuantityButton>
        <QuantityNumberDisplay aria-live="polite">{currentQuantity}</QuantityNumberDisplay>
        <QuantityButton onClick={handleIncrease} disabled={currentQuantity >= maxQuantity} aria-label="Increase quantity">
          <PlusIcon />
        </QuantityButton>
      </QuantityControls>
      {label && <QuantityLabelText>{label}</QuantityLabelText>}
    </SelectorWrapper>
  );
};

export default QuantitySelector;