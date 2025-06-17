import React, { useState, useRef, useEffect } from 'react';
import { ItemWrapper, QuestionButton, AnswerPanel } from './FaqItem.styles';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface FaqItemProps {
  question: string;
  answer: string;
  'data-aos'?: string;
  'data-aos-delay'?: string;
}

export const FaqItem: React.FC<FaqItemProps> = ({ question, answer, ...aosProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    if (answerRef.current) {
      if (isOpen) {
        answerRef.current.style.maxHeight = `${answerRef.current.scrollHeight}px`;
        answerRef.current.classList.add('open');
      } else {
        answerRef.current.style.maxHeight = '0px';
        answerRef.current.classList.remove('open');
      }
    }
  }, [isOpen]);

  return (
    <ItemWrapper {...aosProps}>
      <QuestionButton onClick={toggleOpen} aria-expanded={isOpen}>
        <h3>{question}</h3>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </QuestionButton>
      <AnswerPanel ref={answerRef} className={isOpen ? 'open' : ''}>
        {answer}
      </AnswerPanel>
    </ItemWrapper>
  );
};