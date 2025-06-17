import React from 'react';
import {
  ReviewSectionWrapper,
  ContentLayoutContainer,
  ReviewTitleWrapper,
  ReviewTitle,
  OrderDetailsWrapper,
  OrderDetails,
  OrderDetailItem,
  ButtonGroupWrapper,
  ButtonGroup,
  ActionButton,
  ProductImageWrapper,
} from './ReviewOrderSection.styles';
 import  Tablets_Shop_B from '@assets/images/products/Tablets_Shop_B 1.png'

interface OrderSummary {
  productName: string;
  price: string;
  packInfo: string;
  purchaseType: string;
}

const currentOrder: OrderSummary = {
  productName: 'LVQ+ Tablets',
  price: '€89.99',
  packInfo: 'Two packs',
  purchaseType: 'One-time purchase',
};

export const ReviewOrderSection: React.FC = () => {
  const handleAddToBag = () => {
    alert('Added to Bag!');
  };

  const handleCheckout = () => {
    alert('Proceeding to Checkout!');
  };

  return (
    <ReviewSectionWrapper data-aos="fade-up">
      <ContentLayoutContainer>
        <ReviewTitleWrapper data-aos="fade-right" data-aos-delay="100">
          <ReviewTitle>Your new LumiVitae order</ReviewTitle>
        </ReviewTitleWrapper>

        <ProductImageWrapper data-aos="fade-right" data-aos-delay="200">
          <img src={Tablets_Shop_B} />
        </ProductImageWrapper>
        
        <OrderDetailsWrapper data-aos="fade-in" data-aos-delay="300">
          <OrderDetails>
            <OrderDetailItem isBold>{currentOrder.productName}</OrderDetailItem>
            <OrderDetailItem>{currentOrder.price}</OrderDetailItem>
            <OrderDetailItem>{currentOrder.packInfo}</OrderDetailItem>
            <OrderDetailItem>{currentOrder.purchaseType}</OrderDetailItem>
          </OrderDetails>
        </OrderDetailsWrapper>

        <ButtonGroupWrapper data-aos="fade-left" data-aos-delay="400">
          <ButtonGroup>
            <ActionButton primary onClick={handleAddToBag}>
              Add to Bag
            </ActionButton>
            <ActionButton onClick={handleCheckout}>
              Checkout Now
            </ActionButton>
          </ButtonGroup>
        </ButtonGroupWrapper>
      </ContentLayoutContainer>
    </ReviewSectionWrapper>
  );
};