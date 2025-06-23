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
  NoItemSelected
} from './OrderReview.styles';
import { ProductVariation, Subscription } from '@/core/types/api/shop';
import { CartItem } from '@/features/cart/store/cartStore';
import useScrollAnimation from '@/core/hooks/useScrollAnimation';
import Button from '../../Button/Button';
import { SeparatorLine } from '@/features/New folder/BuyBottlePage/components/OrderReview/OrderReview.styles';
const checkoutImageUrl = "https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/Checkout_Shop 1.avif";

interface OrderReviewProps {
  selectedProduct: ProductVariation | null;
  selectedSubscription: Subscription | null;
  cartItems: CartItem[];
  productId: string;
  onAddToBag: () => void;
  onCheckoutNow: () => void;
}

const OrderReview: React.FC<OrderReviewProps> = ({
  selectedProduct,
  selectedSubscription,
  cartItems,
  productId,
  onAddToBag,
  onCheckoutNow
}) => {
  const [elementRef, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.1 });

  const bottleItem = cartItems.find(item => item.type === 'Product' && parseInt(item.quantity, 10) > 0);

  const isButtonDisabled = productId === '1'
    ? !bottleItem
    : !selectedProduct;

  const renderContent = () => {
    // Case 1: Bottle Product (ID '1') - Review is based on cart content
 
      return (
        <>
        {cartItems?.map((items)=>{
          return (
          <SummaryItem>
       <ItemTitle>
  {items.name}
  <br />
  {items.subscriptionPrices?.length && items.subscriptionPrices[0]?.interval_days && (
    <>{items.subscriptionPrices[0].interval_days} Days</>
  )}
</ItemTitle>
            <ItemDetail>Quantity: {items.quantity}</ItemDetail>
            <ItemDetail>{items?.sale_price?.gross_value_after_discount_string}</ItemDetail>
            <SeparatorLine alt="Line"/>
          </SummaryItem>
          )
        })}
        </>
      );
    

    // Case 2: Tablet Products - Review is based on current selections
   
  };

  return (
    <ReviewSectionContainer ref={elementRef} $isVisible={isVisible}>
      <div>
        <SectionTitle>Your new LumiVitae order</SectionTitle>
        <CheckoutImage src={checkoutImageUrl} alt="LumiVitae Products" />
        <ShadowOverlay />
        <OrderSummaryContainer>
          {renderContent()}
        </OrderSummaryContainer>
        <ButtonsContainer>
          <Button variant="primary" fullWidth onClick={onAddToBag} >
            Add to Bag
          </Button>
          <Button variant="secondary" fullWidth onClick={onCheckoutNow} >
            Checkout Now
          </Button>
        </ButtonsContainer>
      </div>
    </ReviewSectionContainer>
  );
};

export default OrderReview;