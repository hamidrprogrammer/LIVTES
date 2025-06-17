import React from 'react';
import { FaqItem } from './FaqItem';
import * as S from './FaqSection.styles';

const faqData = [
  {
    id: 'faq1',
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    initiallyOpen: true, // First item was open with its answer shown
  },
  {
    id: 'faq2',
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    // No answer provided in original HTML for these
  },
  {
    id: 'faq3',
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
  },
  {
    id: 'faq4',
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
  },
  {
    id: 'faq5',
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
  },
];

export const FaqSection = (): JSX.Element => {
  return (
    <S.SectionWrapper>
      <S.BackgroundLayer />
      <S.Content>
        <S.Title>Frequently Asked Questions</S.Title>
        {faqData.map(faq => (
          <FaqItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            initiallyOpen={faq.initiallyOpen}
          />
        ))}
      </S.Content>
    </S.SectionWrapper>
  );
};
export default React.memo(FaqSection);
