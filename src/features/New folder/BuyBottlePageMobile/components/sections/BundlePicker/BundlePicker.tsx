// src/sections/BundlePicker/BundlePicker.tsx
import React, { useState, useEffect } from 'react';
import { PickerSectionContainer, SectionTitle } from './BundlePicker.styles';
import BundleOptionCard from './BundleOptionCard';
import { bundleOptions as initialBundleOptions } from './bundleOptionsData';
import { OrderState }  from '@/core/types';
import useScrollAnimation from '@/core/hooks/useScrollAnimation';

interface BundlePickerProps {
  onOrderUpdate: (orderPart: Partial<OrderState>) => void;
}

const BundlePicker: React.FC<BundlePickerProps> = ({ onOrderUpdate }) => {
  const [elementRef, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.15 });

  const [bundleOptions, setBundleOptions] = useState(initialBundleOptions);
  const [selectedBundleId, setSelectedBundleId] = useState<string | null>(() => {
    const defaultSelected = initialBundleOptions.find(opt => opt.selected);
    return defaultSelected ? defaultSelected.id : null;
  });

  const handleSelectBundle = (optionId: string) => {
    setSelectedBundleId(optionId);
    // به‌روزرسانی وضعیت selected در خود داده‌ها (اختیاری، اگر بخواهیم به کارت پاس دهیم)
    // setBundleOptions(prevOptions =>
    //   prevOptions.map(opt => ({ ...opt, selected: opt.id === optionId }))
    // );
  };

  // به‌روزرسانی سفارش والد هنگام تغییر انتخاب باندل
  useEffect(() => {
    const selectedOption = bundleOptions.find(opt => opt.id === selectedBundleId);
    if (selectedOption) {
      onOrderUpdate({ selectedBundle: selectedOption });
    } else {
      onOrderUpdate({ selectedBundle: undefined });
    }
  }, [selectedBundleId, bundleOptions, onOrderUpdate]);

  return (
    <PickerSectionContainer ref={elementRef} $isVisible={isVisible}>
      <SectionTitle>LVQ+. Choose your bundle.</SectionTitle>
      {bundleOptions.map((option) => (
        <BundleOptionCard
          key={option.id}
          option={option}
          isSelected={selectedBundleId === option.id}
          onSelect={handleSelectBundle}
        />
      ))}
    </PickerSectionContainer>
  );
};

export default BundlePicker;