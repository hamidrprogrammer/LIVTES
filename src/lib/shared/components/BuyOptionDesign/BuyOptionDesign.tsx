import React from 'react';
import * as S from './BuyOptionDesign.styles';

export interface BuyOptionDesignProps {
  property1?: boolean; // 'default', 'selected', etc.
  hasDiv?: boolean;
  text: string;       // Corresponds to original 'text' prop, e.g., "Two packs"
    number: string;       // Corresponds to original 'text' prop, e.g., "Two packs"

  onClick?: () => void; // optional function that returns nothing
  className?: string; // For passthrough if absolutely needed, but not for primary styling
}

export const BuyOptionDesign = ({
  property1,
  hasDiv,
  text,  // This was the secondary text in original usage
  onClick, // This was the primary text in original usage
  className,
  number,
}: BuyOptionDesignProps): JSX.Element => {
  return (
    <S.Wrapper className={className} $property1={property1} $hasDiv={hasDiv}
    onClick={onClick}>
      <S.TextSecondary  $property1={property1}>{text}</S.TextSecondary>
            <S.TextSecondary style ={{fontSize:12}} property1={property1}>{number}</S.TextSecondary>

    </S.Wrapper>
  );
};

export default React.memo(BuyOptionDesign);
