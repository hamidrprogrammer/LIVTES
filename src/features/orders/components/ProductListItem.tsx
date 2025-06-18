import React, { useState, useEffect } from 'react';
import { OrderPosition } from '../../../core/types/api/order';
import * as S from './ProductListItem.styles';
import { useAuthStore } from '../../auth/stores/authStore';

interface ProductListItemProps {
    item: OrderPosition;
    currencyIso: string;
}

const currencyFormat = (value: number, currency: string) => 
    new Intl.NumberFormat('de-DE', { style: 'currency', currency }).format(value);

export const ProductListItem: React.FC<ProductListItemProps> = ({ item, currencyIso }) => {
    const [imageLink, setImageLink] = useState<string>('/box.avif'); // Default fallback
    const { user } = useAuthStore(); // For MLM details check

    // Logic to determine the image URL, copied from your old project
    useEffect(() => {
        const productVariation = item.productVariation;
        let determinedLink = '/box.avif';
        if (productVariation?.productVariationFile) {
            determinedLink = productVariation.productVariationFile.file ?? '/box.avif';
        } else if (productVariation?.productVariationFiles?.[0]) {
            determinedLink = productVariation.productVariationFiles[0].file ?? '/box.avif';
        }
        setImageLink(determinedLink);
    }, [item.productVariation]);

    const { productVariation, ...position } = item;
    if (!productVariation) return null; // Should not happen with filtered list

    return (
        <S.ItemWrapper>
            <S.ImageContainer>
                <img
                    src={imageLink}
                    alt={productVariation.name ?? 'Product'}
                    onError={() => setImageLink('/box.avif')} // Fallback on error
                />
            </S.ImageContainer>

            <S.InfoContainer>
                <S.ProductName>{productVariation.name}</S.ProductName>
                <S.DetailText>Article Number: <span>{productVariation.number}</span></S.DetailText>
                
                {/* MLM Details, shown only if data exists */}
                {position.orderPositionMlmDetail && (
                     <S.MlmDetails>
                        <S.DetailText>QV: <span>{position.orderPositionMlmDetail.qv ?? 'N/A'}</span></S.DetailText>
                        <S.DetailText>
                            Provision: <span>
                                {currencyFormat(
                                    (position.orderPositionMlmDetail.provision_price * (position.orderPositionMlmDetail.percentage_of_provision / 100)),
                                    currencyIso
                                )}
                            </span>
                        </S.DetailText>
                    </S.MlmDetails>
                )}
            </S.InfoContainer>
            
            <S.PriceContainer>
                <S.DetailText>Net Price: <span>{currencyFormat(position.net_amount?? 0, currencyIso)}</span></S.DetailText>
                <S.DetailText>Quantity: <span>{position.quantity}</span></S.DetailText>
                <S.DetailText>Discount: <span>{currencyFormat(position.discount ?? 0, currencyIso)}</span></S.DetailText>
                <S.DetailText>Total Price: <span>{currencyFormat(position.gross_amount?? 0, currencyIso)}</span></S.DetailText>
                {productVariation.product && (
                    <S.ShowArticleButton to={`/shop/products/${productVariation.product.slug}`}>
                        Show Article
                    </S.ShowArticleButton>
                )}
            </S.PriceContainer>
        </S.ItemWrapper>
    );
};