// ge/features/BuyBottlePage/components/OrderReview/OrderReview.tsx
import React from 'react';
import * as S from './OrderReview.styles';
import { OrderState } from '@/core/types';
import { usePriceCalculations } from '@/core/hooks/usePriceCalculations';
import { ProductVariation } from '@/core/zodSchemas/shopSchema';

interface OrderReviewProps {
  currentOrder: ProductVariation|null;
  onAddToBag: () => void;
}

export const OrderReview: React.FC<OrderReviewProps> = ({ currentOrder, onAddToBag }) => {

  
  

  const handleCheckoutNow = () => {
     
  };

  return (
    <S.SectionWrapper>
      <S.AddToBagButton onClick={onAddToBag}>Add to Bag</S.AddToBagButton>
      <S.CheckoutNowButton onClick={handleCheckoutNow}>Checkout Now</S.CheckoutNowButton>

      <S.ImageSection>
        <S.CheckoutShopImage alt="LumiVitae Products" />
        <S.ImageShadow />
      </S.ImageSection>

      <S.OrderTitle>
        Your new <br />
        LumiVitae order
      </S.OrderTitle>

      {/* Dynamic Order Details */}
      {currentOrder && (
        <>
          <S.ItemName>{currentOrder.name}</S.ItemName>
          <S.ItemQuantity>Quantity {currentOrder.quantity}</S.ItemQuantity>
          <S.ItemPrice>{currentOrder.sale_price.gross_value_after_discount_string}</S.ItemPrice>
          <S.SeparatorLine alt="Line" />
        </>
      )}

      {/* {selectedBundle && (
        <>
          <S.TabletName>{selectedBundle.title}</S.TabletName>
          <S.TabletPackInfo>{selectedBundle.description}</S.TabletPackInfo>
          {selectedFrequency && (
             <S.PurchaseTypeInfo>{selectedFrequency.title}</S.PurchaseTypeInfo>
          )}
           <S.TabletPrice>{totalPrice.string}</S.TabletPrice>
        </>
      )} */}

    </S.SectionWrapper>
  );
};

export default React.memo(OrderReview);