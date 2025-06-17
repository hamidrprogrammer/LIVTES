import React from 'react';
import * as S from './WhatsInTheBox.styles';

const items = [
  { id: 1, text: 'LumiVitae Hydrogen Water Bottle' }, // Corresponds to text-wrapper-25
  { id: 2, text: 'Wireless Charging Pad & USB Charging Cable' }, // Corresponds to wireless-charging
  { id: 3, text: 'Online User Guide in English' }, // Corresponds to text-wrapper-26
];

export const WhatsInTheBox = (): JSX.Element => {
  return (
    <S.SectionWrapper>
      <S.Title>What’s in the box</S.Title>
      <S.BoxImage alt="What's in the box" />
      <S.ItemsContainer>
        {items.map(item => (
          <S.ItemDescription key={item.id}>{item.text}</S.ItemDescription>
        ))}
      </S.ItemsContainer>
    </S.SectionWrapper>
  );
};
export default React.memo(WhatsInTheBox);
