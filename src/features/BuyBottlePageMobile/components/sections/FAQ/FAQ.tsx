// src/sections/FAQ/FAQ.tsx
import React, { useState } from 'react';
import {
  FAQSectionContainer,
  SectionTitle,
  FAQList,
} from './FAQ.styles';
import FAQItem from './FAQItem';
import { faqItems } from './faqData';
import useScrollAnimation from '@/core/hooks/useScrollAnimation';

const FAQ: React.FC = () => {
  const [elementRef, isVisible] = useScrollAnimation<HTMLElement>({ triggerOnce: true, threshold: 0.1 });
  
  // وضعیت برای نگهداری شناسه آیتم باز شده فعلی
  // null یعنی هیچ آیتمی باز نیست، یا می‌توان چندین آیتم را همزمان باز کرد
  const [openItemId, setOpenItemId] = useState<string | null>(faqItems.length > 0 ? faqItems[0].id : null); // اولین آیتم به صورت پیش‌فرض باز باشد

  const handleToggleItem = (itemId: string) => {
    setOpenItemId(prevOpenId => (prevOpenId === itemId ? null : itemId));
  };

  return (
    <FAQSectionContainer ref={elementRef} $isVisible={isVisible}>
      {/* کانتینر داخلی */}
      <div>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQList>
          {faqItems.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openItemId === item.id}
              onToggle={handleToggleItem}
            />
          ))}
        </FAQList>
      </div>
    </FAQSectionContainer>
  );
};

export default FAQ;
