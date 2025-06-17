import React from 'react';
import * as S from './ProductInfoPrompts.styles';

export const ProductInfoPromptsTablet = (): JSX.Element => {
  return (
    <S.PromptsContainer>
     
      <S.LVQPrompt>
        <S.BoldSpan>LVQ+</S.BoldSpan>
        <S.RegularSpan>. Choose your bundle.</S.RegularSpan>
      </S.LVQPrompt>

      <S.FrequencyPrompt>
        <S.FrequencyTextSpan>Select your </S.FrequencyTextSpan>
        <S.FrequencyBoldSpan>frequency</S.FrequencyBoldSpan>
        <S.FrequencyTextSpan>.</S.FrequencyTextSpan>
      </S.FrequencyPrompt>
    </S.PromptsContainer>
  );
};

export const ProductInfoPromptsBottle = (): JSX.Element => {
  return (
    <S.PromptsContainer>
      <S.BottlePrompt>
        <S.BoldSpan>Bottle</S.BoldSpan>
        <S.RegularSpan>. Select your color.</S.RegularSpan>
      </S.BottlePrompt>

      
    </S.PromptsContainer>
  );
};
export const MemoizedProductInfoPromptsTablet = React.memo(ProductInfoPromptsTablet);
export const MemoizedProductInfoPromptsBottle = React.memo(ProductInfoPromptsBottle);