// new project/features/BuyBottlePage/components/FrequencyOptionsSection/FrequencyOptionsSection.tsx

import React from 'react';
import * as S from './FrequencyOptionsSection.styles';
import { ProductVariation, Subscription } from '@/core/types/api/shop';
import BuyOptionSubDesign from '@/lib/shared/components/BuyOptionDesign/BuyOptionSubDesign';
import { useCartStore } from '@/features/cart/store/cartStore';

interface FrequencyOptionsSectionProps {
  product: ProductVariation | null;
  onSelect: (option: Subscription) => void;
  selectedId?: Subscription | null;
}

export const FrequencyOptionsSection: React.FC<FrequencyOptionsSectionProps> = ({ product, onSelect, selectedId }) => {
  const { items: cartItems } = useCartStore();

  if (!product) {
    return (
        <S.SectionContainer>
            <p>Please select a product bundle to see subscription options.</p>
        </S.SectionContainer>
    );
  }

  // --- START: NEW CHANGE ---
  // اگر لیست قیمت‌های اشتراک خالی باشد، این بخش را اصلاً نمایش نده
  const hasSubscriptionOptions = product.subscriptionPrices && product.subscriptionPrices.length > 0;
  if (!hasSubscriptionOptions) {
    return null; // کامپوننت چیزی را رندر نمی‌کند
  }
  // --- END: NEW CHANGE ---

  // بررسی می‌کند که آیا این بسته محصول (با هر فرکانسی) در سبد خرید موجود است یا خیر.
  const isProductInCart = cartItems.some(
    cartItem => cartItem.id === product.id
  );


  const handelOnSelect = (option: Subscription) => {
    if (isProductInCart) {
      alert("This bundle is already in your cart. To change the frequency, please remove it from the cart first.");
      return;
    }
    onSelect(option);
  }

  // ایجاد یک لیست کامل از گزینه‌ها (شامل خرید یک‌باره و اشتراک‌ها)
  const allOptions = [
    {
      ...product.sale_price,
      interval_days: null, 
      title: "One Time Purchase",
      number_of_discount_periods: undefined
    }, 
    ...(product.subscriptionPrices ?? [])
  ];

  return (
    <S.SectionContainer>
      {allOptions.reverse().map((option) => {
        const uniqueKey = option.interval_days === null ? `onetime-${product.id}` : `${option.interval_days}-${product.id}`;
         
         
         
        return (
            <BuyOptionSubDesign
                key={uniqueKey}
                id={option.interval_days ?? 0}
                title={option.title ?? `${option.interval_days} Day Delivery`}
                price={option.gross_value_after_discount_string ?? ""}
                priceForRange1={option.value_string ?? ""}
                shipmentRange1={option.number_of_discount_periods ? "1" : undefined}
                shipmentRange2={option.number_of_discount_periods?.toString()}
                text=""
                disabled={isProductInCart} 
                onClick={() => handelOnSelect(option as Subscription)}
                property1={selectedId?.interval_days === option.interval_days}
            />
        );
      })}
    </S.SectionContainer>
  );
};

export default React.memo(FrequencyOptionsSection);