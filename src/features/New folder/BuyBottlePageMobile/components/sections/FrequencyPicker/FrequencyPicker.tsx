// src/sections/FrequencyPicker/FrequencyPicker.tsx
import React, { useState, useEffect } from 'react';
import { PickerSectionContainer, SectionTitle } from './FrequencyPicker.styles';
// استفاده مجدد از BundleOptionCard چون ساختار مشابهی دارند
import BundleOptionCard from '../BundlePicker/BundleOptionCard'; 
import { frequencyOptions as initialFrequencyOptions } from './frequencyOptionsData';
import { FrequencyOptionData, OrderState } from '@/core/types';
import useScrollAnimation from '@/core/hooks/useScrollAnimation';


interface FrequencyPickerProps {
  onOrderUpdate: (orderPart: Partial<OrderState>) => void;
}

const FrequencyPicker: React.FC<FrequencyPickerProps> = ({ onOrderUpdate }) => {
  const [elementRef, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.15 });

  const [frequencyOptions, setFrequencyOptions] = useState(initialFrequencyOptions);
  const [selectedFrequencyId, setSelectedFrequencyId] = useState<string | null>(() => {
    const defaultSelected = initialFrequencyOptions.find(opt => opt.selected && !opt.disabled);
    return defaultSelected ? defaultSelected.id : null;
  });

  const handleSelectFrequency = (optionId: string) => {
    const option = frequencyOptions.find(opt => opt.id === optionId);
    if (option && !option.disabled) {
      setSelectedFrequencyId(optionId);
    }
  };
  
  // به‌روزرسانی سفارش والد هنگام تغییر انتخاب فرکانس
  useEffect(() => {
    const selectedOption = frequencyOptions.find(opt => opt.id === selectedFrequencyId);
    if (selectedOption) {
      onOrderUpdate({ selectedFrequency: selectedOption as FrequencyOptionData });
    } else {
      onOrderUpdate({ selectedFrequency: undefined });
    }
  }, [selectedFrequencyId, frequencyOptions, onOrderUpdate]);

  return (
    <PickerSectionContainer ref={elementRef} $isVisible={isVisible}>
      <SectionTitle>Select your frequency.</SectionTitle>
      {frequencyOptions.map((option) => (
        <BundleOptionCard // استفاده مجدد از BundleOptionCard
          key={option.id}
          option={option} // پراپ option از نوع BundleOptionData است، اما FrequencyOptionData سازگار است
          isSelected={selectedFrequencyId === option.id}
          onSelect={handleSelectFrequency}
        />
      ))}
    </PickerSectionContainer>
  );
};

export default FrequencyPicker;