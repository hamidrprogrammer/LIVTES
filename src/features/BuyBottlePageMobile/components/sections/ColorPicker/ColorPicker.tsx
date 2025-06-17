// src/sections/ColorPicker/ColorPicker.tsx
import React, { useState, useEffect } from 'react';
import { PickerSectionContainer } from './ColorPicker.styles';
import ColorOptionCard from './ColorOptionCard';
import { ProductVariation, ProductVariationsResponse } from '@/core/types/api/shop';
import useScrollAnimation from '@/core/hooks/useScrollAnimation';
import { useCartStore } from '@/features/cart/store/cartStore';

interface ColorPickerProps {
  data?: ProductVariationsResponse;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ data }) => {
  const [elementRef, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.15 });
  const { items: cartItems, addItem, updateItemQuantity } = useCartStore();

  // The selected color is determined by which item has a quantity > 0 in the cart
  const [selectedColorId, setSelectedColorId] = useState<string | null>(null);

  useEffect(() => {
    const activeItem = cartItems.find(item => item.type === 'Product' && parseInt(item.quantity, 10) > 0);
    if (activeItem) {
      setSelectedColorId(activeItem.id.toString());
    } else {
      setSelectedColorId(null);
    }
  }, [cartItems]);

  const getQuantityForId = (id: number): number => {
    const item = cartItems.find(i => i.id === id);
    return item ? parseInt(item.quantity, 10) : 0;
  };

  const handleQuantityChange = (product: ProductVariation, newQuantity: number) => {
    if (newQuantity < 0) return;

    const existingItem = cartItems.find(i => i.id === product.id);

    if (!existingItem) {
      if (newQuantity > 0) {
        // Add new item to cart
        addItem(product, newQuantity.toString());
      }
    } else {
      // Update quantity (will be removed by the store if quantity is 0)
      updateItemQuantity(product.id, newQuantity.toString());
    }
  };

  const handleSelectColor = (product: ProductVariation) => {
    setSelectedColorId(product.id.toString());

    // If the selected item has 0 quantity, set it to 1
    const currentQuantity = getQuantityForId(product.id);
    if (currentQuantity === 0) {
      handleQuantityChange(product, 1);
    }
    
    // Set all other bottle quantities to 0
    data?.data.forEach(p => {
        if (p.id !== product.id) {
            if (getQuantityForId(p.id) > 0) {
                handleQuantityChange(p, 0);
            }
        }
    });
  };

  return (
    <PickerSectionContainer ref={elementRef} $isVisible={isVisible}>
      {data?.data?.map((option, index) => (
        <ColorOptionCard
          key={option.id}
          option={option}
          index={index}
          isSelected={selectedColorId === option.id.toString()}
          currentQuantity={getQuantityForId(option.id)}
          onSelect={handleSelectColor}
          onQuantityChange={handleQuantityChange}
        />
      ))}
    </PickerSectionContainer>
  );
};

export default ColorPicker;