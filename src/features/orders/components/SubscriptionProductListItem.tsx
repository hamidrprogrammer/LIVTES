import React from 'react';
import { OrderPosition } from '../../../core/types/api/order';
import * as S from './ProductListItem.styles'; // Reusing styles from existing component
import { format } from 'date-fns';

interface SubscriptionProductListItemProps {
    item: OrderPosition;
    currencyIso: string;
}

const currencyFormat = (value: number, currency: string) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);

export const SubscriptionProductListItem: React.FC<SubscriptionProductListItemProps> = ({ item, currencyIso }) => {
    const { productVariation, ...position } = item;
    if (!productVariation) return null;

    const imageUrl = productVariation.productVariationFiles?.[0]?.file || productVariation.product?.file || 'https://via.placeholder.com/100';

    return (
        <S.ItemWrapper>
            <S.ImageContainer>
                <img src={imageUrl} alt={productVariation.name ?? 'Product'} />
            </S.ImageContainer>

            <S.InfoContainer>
                <S.ProductName>{productVariation.name}</S.ProductName>
                <S.DetailText>Article Number: <span>{productVariation.number}</span></S.DetailText>
                <S.DetailText>Net Price: <span>{currencyFormat(position.net_amount ?? 0, currencyIso)}</span></S.DetailText>
                <S.DetailText>Quantity: <span>{position.quantity}</span></S.DetailText>
                <S.DetailText>Total Price: <span>{currencyFormat(position.gross_amount ?? 0, currencyIso)}</span></S.DetailText>
                <S.DetailText>Discount Price: <span>{currencyFormat(position.discount ?? 0, currencyIso)}</span></S.DetailText>

            </S.InfoContainer>

             <S.PriceContainer>
                 <S.DetailText>Interval Days: <span>{position.interval_days}</span></S.DetailText>
                {position.last_order_sale_date && <S.DetailText>Last Order Date: <span>{format(new Date(position.last_order_sale_date), 'PPP')}</span></S.DetailText>}
                {position.next_order_sale_date && <S.DetailText>Next Order Date: <span>{format(new Date(position.next_order_sale_date), 'PPP')}</span></S.DetailText>}
            </S.PriceContainer>
        </S.ItemWrapper>
    );
};