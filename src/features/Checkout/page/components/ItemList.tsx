/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
// src/components/ItemList.tsx

import React from 'react';
import styled from 'styled-components';
import { Card } from './Layout';
import { useCartStore } from '@/features/cart/store/cartStore';
import QuantitySelector from '@/features/BuyBottlePageMobile/components/QuantitySelector/QuantitySelector';


const ItemListContainer = styled(Card)`
    padding: 0; // Padding will be on the inner elements
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyLight};
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.lightGrey};
    
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    max-height: 180px;
  }
`;

const ItemDetails = styled.div`
  flex-grow: 1;
  width: 100%; // Ensure it takes full width in column layout
`;

const ItemName = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textDark};
`;

const ItemArticle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textGrey};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const ItemPriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
    
  @media (max-width: 480px) {
    align-self: flex-end;
  }
`;

const ItemQuantity = styled.span`
  color: ${({ theme }) => theme.colors.textGrey};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  margin-top: ${({ theme }) => theme.spacing.xs};

 
`;
const ItemInfo = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textGrey};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const ItemActions = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};

    @media (max-width: 480px) {
        width: 100%;
        justify-content: space-between;
        margin-top: ${({ theme }) => theme.spacing.md};
    }
`;
const DeleteButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.textGrey};
    cursor: pointer;
    font-size: 1.5rem;
    padding: ${({ theme }) => theme.spacing.sm};
    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.accentRed};
    }
`;




const CheckoutItem: React.FC = () => {
      const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateItemQuantity);
  
  if (items.length === 0) {
      return <Card><p>Your cart is empty.</p></Card>
  }

  return (
   <ItemListContainer>
      {items.map((item, index) => {
        // START: Added logic to determine image source
        const imageUrl = (item.productVariationFiles && item.productVariationFiles.length > 0 && item.productVariationFiles[0].content_hash)
          ? `https://imagedelivery.net/27K6Yc6t29u6bZ_lbtodBw/${item.productVariationFiles[0].content_hash}/public`
          : item.product?.file || 'https://via.placeholder.com/100'; // Fallback to product.file, then placeholder
        // END: Added logic to determine image source

        return (
          <ItemWrapper key={index}>
            <ItemImage src={imageUrl} alt={item?.name } />
            <ItemDetails>
              <ItemName>{item?.name }</ItemName>
              {item?.subscriptionPrices?.length>0?
              <ItemName>{item?.subscriptionPrices[0]?.interval_days} Days </ItemName>
:
              null}

              <ItemInfo>{item?.description}</ItemInfo>
              {Array.isArray(item.subscriptionPrices) && item.subscriptionPrices.length > 0?
              <ItemInfo>Price: {item?.subscriptionPrices[0]?.gross_value_after_discount_string }</ItemInfo>:
              <ItemInfo>Price: {item?.sale_price.gross_value_after_discount_string }</ItemInfo>
}
            </ItemDetails>
            <ItemActions>
           
  <QuantitySelector
    currentQuantity={parseInt(item.quantity ?? '0', 10)}
    onQuantityChange={updateQuantity}
    minQuantity={0}
    maxQuantity={5}
    label="Qty"
    option={item}
  />

              <DeleteButton onClick={() => removeItem(item.id)} title="Remove item">×</DeleteButton>
            </ItemActions>
          </ItemWrapper>
        );
      })}
    </ItemListContainer>
  );
};


// List Component
export const ItemList: React.FC = () => {
  return (
    <ItemListContainer>
      
        <CheckoutItem   />
     
    </ItemListContainer>
  );
};