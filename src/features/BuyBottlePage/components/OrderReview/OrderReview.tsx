// ge/features/BuyBottlePage/components/OrderReview/OrderReview.tsx
import React from 'react';
import * as S from './OrderReview.styles';
import { OrderState } from '@/core/types';
import { usePriceCalculations } from '@/core/hooks/usePriceCalculations';
import { ProductVariation } from '@/core/zodSchemas/shopSchema';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '@/features/cart/store/cartStore';

interface OrderReviewProps {
  currentOrder: ProductVariation|null;
  onAddToBag: () => void;
}

export const OrderReview: React.FC<OrderReviewProps> = ({ currentOrder, onAddToBag }) => {
   const navigate = useNavigate()
  
        const items = useCartStore((state) => state.items);
  

  const handleCheckoutNow = () => {
     navigate('/basket')
  };

  return (
    <S.SectionWrapper>
      
    

      <S.ImageSection>
        <S.CheckoutShopImage alt="LumiVitae Products" />
        <S.ImageShadow />
      </S.ImageSection>

      <S.OrderTitle>
        Your new <br />
        LumiVitae order
      </S.OrderTitle>

      {/* Dynamic Order Details */}
      {items && (
        <>
         <div style={{width:`100%`,height:`100%`}}>
        {items.map((res)=>{
          return <> 
          
          <S.ItemName>{res.name}</S.ItemName>
          <S.ItemQuantity>Quantity {res.quantity}</S.ItemQuantity>
          <S.ItemPrice>{res?.sale_price.gross_value_after_discount_string}</S.ItemPrice>
          <S.SeparatorLine alt="Line" />
       
          </>
        })}
         </div>
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
      <div style={{height:`100%` ,gap:"30",display:"flex",flexDirection:"column"}}>
  <S.AddToBagButton onClick={onAddToBag}>Add to Bag</S.AddToBagButton>
  <div style={{height:15}}/>
      <S.CheckoutNowButton onClick={handleCheckoutNow}>Checkout Now</S.CheckoutNowButton>
      </div>

    </S.SectionWrapper>
  );
};

export default React.memo(OrderReview);