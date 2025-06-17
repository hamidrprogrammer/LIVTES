// src/sections/OrderReview/OrderReview.tsx
import React from 'react';
import {
  ReviewSectionContainer,
  SectionTitle,
  CheckoutImage,
  ShadowOverlay,
  OrderSummaryContainer,
  SummaryItem,
  ItemTitle,
  ItemDetail,
  Divider,
  ButtonsContainer,
} from './OrderReview.styles';
import { OrderState } from '@/core/types';
import useScrollAnimation from '@/core/hooks/useScrollAnimation';
import Button from '../../Button/Button';
import checkoutImageUrl from '@assets/images/bottle/Checkout_Shop 1.png'

// مسیر تصویر نمونه - جایگزین با مسیر واقعی

interface OrderReviewProps {
  currentOrder: OrderState;
  onAddToBag: () => void;
  onCheckoutNow: () => void;
}

const OrderReview: React.FC<OrderReviewProps> = ({ currentOrder, onAddToBag, onCheckoutNow }) => {
  const [elementRef, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.1 });

  const { selectedBottle, selectedBundle, selectedFrequency } = currentOrder;

  

  return (
    <ReviewSectionContainer ref={elementRef} $isVisible={isVisible}>
      {/* کانتینر داخلی برای محدود کردن عرض */}
      <div> 
        <SectionTitle>Your new LumiVitae order</SectionTitle>
        
        <CheckoutImage src={checkoutImageUrl} alt="LumiVitae Products" />
        <ShadowOverlay />

        <OrderSummaryContainer>
          {selectedBottle && selectedBottle.quantity > 0 && (
            <>
              <SummaryItem>
                <ItemTitle>{selectedBottle.name || 'LumiVitae Bottle'}</ItemTitle>
                <ItemDetail>Quantity: {selectedBottle.quantity}</ItemDetail>
                <ItemDetail>{selectedBottle.price || 'Price N/A'}</ItemDetail>
              </SummaryItem>
              <Divider />
            </>
          )}

          {selectedBundle && (
            <>
              <SummaryItem>
                <ItemTitle>{selectedBundle.title || 'LVQ+ Tablets Bundle'}</ItemTitle>
                <ItemDetail>{selectedBundle.description}</ItemDetail>
                {selectedBundle.price && <ItemDetail>{selectedBundle.price}</ItemDetail>}
              </SummaryItem>
              <Divider />
            </>
          )}
          
          {selectedFrequency && (
            <SummaryItem>
              <ItemTitle>Frequency</ItemTitle>
              <ItemDetail>{selectedFrequency.title || 'One-time purchase'}</ItemDetail>
              {selectedFrequency.description && <ItemDetail>{selectedFrequency.description}</ItemDetail>}
            </SummaryItem>
          )}

          {/* نمایش قیمت کل اگر نیاز باشد */}
          {/* {totalPrice !== 'N/A' && (
            <>
              <Divider />
              <SummaryItem style={{alignItems: 'flex-end'}}>
                <ItemTitle style={{fontSize: pxToRem(22)}}>Total: {totalPrice}</ItemTitle>
              </SummaryItem>
            </>
          )} */}
        </OrderSummaryContainer>

        <ButtonsContainer>
          {/* دکمه‌ها از CSS Frame 13 و Frame 14 */}
          <Button variant="primary" fullWidth onClick={onAddToBag}>
            Add to Bag {/* متن از CSS */}
          </Button>
          <Button variant="secondary" fullWidth onClick={onCheckoutNow}>
            Checkout Now {/* متن از CSS */}
          </Button>
        </ButtonsContainer>
      </div>
    </ReviewSectionContainer>
  );
};

export default OrderReview;