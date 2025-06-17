// src/sections/FAQ/FAQItem.tsx
import React from 'react';
import {
  ItemWrapper,
  QuestionRow,
  QuestionText,
  AnswerWrapper,
  AnswerText,
} from './FAQItem.styles';
import { FAQItemData } from '@/core/types';
import ChevronIcon from '../../../../../lib/shared/components/Besic/Icon/ChevronIcon';
import { pxToRem } from '@/core/theme/theme';


interface FAQItemProps {
  item: FAQItemData;
  isOpen: boolean;
  onToggle: (id: string) => void; // تابع برای باز و بسته کردن آیتم
}

const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, onToggle }) => {
  return (
    <ItemWrapper>
      <QuestionRow onClick={() => onToggle(item.id)} aria-expanded={isOpen} aria-controls={`faq-answer-${item.id}`}>
        <QuestionText $isOpen={isOpen}>{item.question}</QuestionText>
        {/* آیکون شورون با اندازه و ضخامت مشخص شده در CSS (Vector 1,2,3,4,5 for FAQ) */}
        {/* width: 21px; height: 10.5px; border: 2px solid #072C3D; */}
        <ChevronIcon 
            isOpen={isOpen} 
            size={pxToRem(21)} 
            strokeWidth={pxToRem(2)} 
            color={isOpen ? undefined : undefined} // رنگ می‌تواند بر اساس isOpen تغییر کند
            direction="down" // همیشه رو به پایین است و با isOpen می‌چرخد
        />
      </QuestionRow>
      <AnswerWrapper $isOpen={isOpen} id={`faq-answer-${item.id}`}>
        <AnswerText>{item.answer}</AnswerText>
      </AnswerWrapper>
    </ItemWrapper>
  );
};

export default FAQItem;
