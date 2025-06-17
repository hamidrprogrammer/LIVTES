// ge/features/BuyBottlePage/components/BundleOptionsSection/BundleOptionsSection.tsx
import React from 'react';
import * as S from './BundleOptionsSection.styles';
import BuyOptionDesign from '@/lib/shared/components/BuyOptionDesign/BuyOptionDesign';
import { ProductVariation, ProductVariationsResponse } from '@/core/types/api/shop';

interface BundleOptionsSectionProps {
  data?: ProductVariationsResponse;
  onSelect: (option: ProductVariation) => void;
  selectedId?: number | null;
}

export const BundleOptionsSection: React.FC<BundleOptionsSectionProps> = ({ data, onSelect, selectedId }) => {
  return (
    <S.SectionContainer>
      {data?.data.map((option) => (
        <S.OptionWrapper
          key={option.id}
          $left={"940px"}
          $opacity={1}
          $isSelected={selectedId === option.id}
          onClick={() => onSelect(option)}
        >
          <BuyOptionDesign
            text={option.name}
            hasDiv // This seems to control the price display in your component
            property1={selectedId === option.id}
          />
        </S.OptionWrapper>
      ))}
    </S.SectionContainer>
  );
};

export default React.memo(BundleOptionsSection);