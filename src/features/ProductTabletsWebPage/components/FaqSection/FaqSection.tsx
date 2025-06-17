import React from 'react';
import {
  FaqSectionWrapper,
  FaqContainer,
  TitleBlock,
  SectionTitle,
  FaqList,
} from './FaqSection.styles';
import { FaqItem } from './FaqItem';

const faqData = [
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
    answer:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    question: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco?',
    answer:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    question: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum?',
    answer:
      'Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
  },
];

export const FaqSection: React.FC = () => {
  return (
    <FaqSectionWrapper>
      <FaqContainer>
        <TitleBlock data-aos="fade-right">
          <SectionTitle>Frequently Asked Questions</SectionTitle>
        </TitleBlock>
        <FaqList>
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            />
          ))}
        </FaqList>
      </FaqContainer>
    </FaqSectionWrapper>
  );
};