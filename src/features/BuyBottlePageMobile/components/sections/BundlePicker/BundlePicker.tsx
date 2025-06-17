// src/sections/BundlePicker/BundlePicker.tsx
import React from 'react';
import { PickerSectionContainer, SectionTitle } from './BundlePicker.styles';
import BundleOptionCard from './BundleOptionCard';
import { ProductVariation, ProductVariationsResponse } from '@/core/types/api/shop';
import useScrollAnimation from '@/core/hooks/useScrollAnimation';

interface BundlePickerProps {
  data?: ProductVariationsResponse;
  onSelect: (option: ProductVariation) => void;
  selectedId?: number | null;
}

const BundlePicker: React.FC<BundlePickerProps> = ({ data, onSelect, selectedId }) => {
  const [elementRef, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.15 });

  return (
    <PickerSectionContainer ref={elementRef} $isVisible={isVisible}>
      <SectionTitle>LVQ+. Choose your bundle.</SectionTitle>
      {data?.data.map((option) => (
        <BundleOptionCard
          key={option.id}
          title={option.name}
          description={option.product?.description || `${option.quantity} Tablets`}
          price={option.sale_price.gross_value_after_discount_string}
          isSelected={selectedId === option.id}
          onSelect={() => onSelect(option)}
        />
      ))}
    </PickerSectionContainer>
  );
};

export default BundlePicker;