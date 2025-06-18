// src/features/QuoteSection/QuoteSection.tsx
import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  QuoteCustomSection,
  QuoteContentWrapper,
  QuoteTextStyled,
  AuthorInfoWrapper,
  QuoteAuthorName,
  QuoteAuthorRole
} from './QuoteSection.styles';
import  quoteBgImage from 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/home/homepage_sec6 1.avif';

// Placeholder for quote background image

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } },
};

const QuoteSection: React.FC = () => {
  return (
    <QuoteCustomSection
      id="testimonial"
      bgImage={quoteBgImage}
      bgColor="textDark" // Fallback: #072C3D
      minHeight="860px"
      fullWidth
    >
      <QuoteContentWrapper as={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={contentVariants}>
        <QuoteTextStyled variant="quote" as="blockquote">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
        </QuoteTextStyled>
        <AuthorInfoWrapper>
          <QuoteAuthorName variant="quoteAuthor" as="cite">
            Rosie Smith
          </QuoteAuthorName>
          <QuoteAuthorRole variant="quoteRole" as="p">
            Yoga Teacher & LumiVitae Partner
          </QuoteAuthorRole>
        </AuthorInfoWrapper>
      </QuoteContentWrapper>
    </QuoteCustomSection>
  );
};

export default QuoteSection;
