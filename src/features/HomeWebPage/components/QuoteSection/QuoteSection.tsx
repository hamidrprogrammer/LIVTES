import React from 'react';
import {
  QuoteSectionContainer,
  QuoteContentWrapper,
  QuoteText,
  QuoteAuthor,
  QuoteAuthorRole,
} from './QuoteSection.styles';

const QuoteSection: React.FC = () => {
  // Using React fragments for multi-line quote for better readability
  const quote = (
    <>
      This isn’t just hydration or supplementation. It’s transformation.
      <br />
      Water becomes wellness. Light becomes longevity.
      <br />
      Every drop, every dose restores what the world has dimmed.
      <br />
      Your cells remember. Your vitality is waiting.
      <br />
      It’s time to shine again. It’s time to become light.
    </>
  );

  return (
    <QuoteSectionContainer id="quote">
      <QuoteContentWrapper data-aos="fade-left" data-aos-delay="200">
        <QuoteText>{quote}</QuoteText>
        <QuoteAuthor>Taryn Lee</QuoteAuthor>
        <QuoteAuthorRole>CEO & Founder, LumiVitae</QuoteAuthorRole>
      </QuoteContentWrapper>
    </QuoteSectionContainer>
  );
};

export default QuoteSection;
