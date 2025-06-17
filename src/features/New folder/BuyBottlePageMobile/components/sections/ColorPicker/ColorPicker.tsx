/* eslint-disable @typescript-eslint/no-unused-vars */
// src/sections/ColorPicker/ColorPicker.tsx
import React, { useState, useEffect } from 'react';
import { PickerSectionContainer } from './ColorPicker.styles';
import ColorOptionCard from './ColorOptionCard';
import { ProductVariationsResponse } from '@/core/types/api/shop';
import useScrollAnimation from '@/core/hooks/useScrollAnimation';
import { useCartStore } from '@/features/cart/store/cartStore';

interface ColorPickerProps {
  data?: ProductVariationsResponse;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ data }) => {
  const [elementRef, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.15 });
  const { items: cartItems, updateItemQuantity, addItem } = useCartStore();

  const [selectedColorId, setSelectedColorId] = useState<string | null>(null);

  useEffect(() => {
    const activeItem = cartItems.find(item => parseInt(item.quantity) > 0);
    if (activeItem) {
      setSelectedColorId(activeItem.id.toString());
    } else {
      setSelectedColorId(null);
    }
  }, [cartItems]);



  // رنگ انتخاب شده، شناسه به صورت رشته

  // همگام‌سازی انتخاب رنگ با استور؛ وقتی سبد تغییر کرد، رنگ انتخابی را تنظیم می‌کند
  useEffect(() => {
    const activeItem = cartItems.find(item => parseInt(item.quantity) > 0);
    if (activeItem) {
      setSelectedColorId(activeItem.id.toString());
    } else {
      setSelectedColorId(null);
    }
  }, [cartItems]);

  // گرفتن مقدار تعداد برای هر محصول
  const getQuantityForId = (id: number): number => {
    const item = cartItems.find(i => i.id === id);
    return item ? parseInt(item.quantity) : 0;
  };

  // تغییر مقدار تعداد یک محصول
  const handleQuantityChange = (optionId: number, newQuantity: string) => {
    if (!data) return;

    const product = data.data.find(p => p.id === optionId);
    if (!product) return;

    const quantityNumber = parseInt(newQuantity, 10);

    if (quantityNumber <= 0) {
      // حذف از سبد اگر مقدار صفر شود
      updateItemQuantity(optionId, "0");
      return;
    }

    const existingItem = cartItems.find(i => i.id === optionId);

    if (!existingItem) {
      addItem(product, newQuantity);
    } else {
      updateItemQuantity(optionId, newQuantity);
    }
  };

  // انتخاب رنگ
  const handleSelectColor = (optionId: string) => {
    setSelectedColorId(optionId);

    if (!data) return;

    const product = data.data.find(p => p.id.toString() === optionId);
    if (!product) return;

    const existingItem = cartItems.find(i => i.id.toString() === optionId);

    if (!existingItem || parseInt(existingItem.quantity) === 0) {
      addItem(product, "1");
    }
  };
  return (
    <PickerSectionContainer ref={elementRef} $isVisible={isVisible}>
      {data?.data?.map((option, index) => (
        <ColorOptionCard
          key={option.id}
          option={option}
          index={index}
          handleQuantity={handleQuantityChange}
          isSelected={selectedColorId === option.id.toString()}
          currentQuantity={getQuantityForId(option.id)}
          onSelect={handleSelectColor}
          onQuantityChange={(id, qty) => handleQuantityChange(parseInt(id), qty.toString())}
        />
      ))}
    </PickerSectionContainer>
  );
};

export default ColorPicker;
