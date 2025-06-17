// src/sections/FrequencyPicker/FrequencyPicker.tsx
import React from 'react';
import { PickerSectionContainer, SectionTitle } from './FrequencyPicker.styles';
import BundleOptionCard from '../BundlePicker/BundleOptionCard';
import { ProductVariation, Subscription } from '@/core/types/api/shop';
import { useCartStore } from '@/features/cart/store/cartStore';
import useScrollAnimation from '@/core/hooks/useScrollAnimation';

interface FrequencyPickerProps {
  product: ProductVariation | null;
  onSelect: (option: Subscription) => void;
  selectedId?: Subscription | null;
}

const FrequencyPicker: React.FC<FrequencyPickerProps> = ({ product, onSelect, selectedId }) => {
  const [elementRef, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.15 });
  const { items: cartItems } = useCartStore();

  if (!product) {
    return (
      <PickerSectionContainer ref={elementRef} $isVisible={isVisible}>
        <SectionTitle>Select your frequency.</SectionTitle>
        <p style={{ textAlign: 'center', color: '#666' }}>
          Please select a product bundle to see subscription options.
        </p>
      </PickerSectionContainer>
    );
  }

  const hasSubscriptionOptions = product.subscriptionPrices && product.subscriptionPrices.length > 0;
  if (!hasSubscriptionOptions) {
    return null; // Don't render the component if there are no subscription options
  }

  const isProductInCart = cartItems.some(cartItem => cartItem.id === product.id);

  const handleSelect = (option: Subscription) => {
    if (isProductInCart) {
      alert("This bundle is already in your cart. To change the frequency, please remove it from the cart first.");
      return;
    }
    onSelect(option);
  };

  const allOptions: Subscription[] = [
    {
      ...product.sale_price,
      interval_days: null,
      title: "One Time Purchase",
      description: "Standard price, single delivery",
      number_of_discount_periods: undefined,
    },
    ...(product.subscriptionPrices ?? []),
  ];

  return (
    <PickerSectionContainer ref={elementRef} $isVisible={isVisible}>
      <SectionTitle>Select your frequency.</SectionTitle>
      {allOptions.map((option) => {
        const uniqueKey = option.interval_days === null ? `onetime-${product.id}` : `${option.interval_days}-${product.id}`;
        
        return (
          <BundleOptionCard
            key={uniqueKey}
            title={option.title ?? `${option.interval_days} Day Delivery`}
            description={option.description || `Save on recurring orders`}
            price={option.gross_value_after_discount_string}
            isSelected={selectedId?.interval_days === option.interval_days}
            isDisabled={isProductInCart}
            onSelect={() => handleSelect(option)}
          />
        );
      })}
    </PickerSectionContainer>
  );
};

export default FrequencyPicker;