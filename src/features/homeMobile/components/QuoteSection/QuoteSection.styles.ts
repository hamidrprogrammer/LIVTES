// src/features/QuoteSection/QuoteSection.styles.ts
import styled from 'styled-components';
import Section from '../../components/Section/Section';
import Text from '../../../../lib/shared/components/Besic/Typography/Text';

export const QuoteCustomSection = styled(Section)`
  /* min-height: 860px; from Section prop */
  /* bgImage from Section prop */
  /* bgColor fallback from Section prop */
  justify-content: center; /* Center content vertically and horizontally */
  color: ${({ theme }) => theme.colors.white};
`;

export const QuoteContentWrapper = styled.div`
  max-width: 336px; /* From Figma for the quote text */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center quote and author block */
`;

export const QuoteTextStyled = styled(Text)`
  /* variant 'quote' handles styling */
  margin-bottom: ${({ theme }) => theme.spacing.xl}; /* 32px - space before author */
  text-align: center; /* Explicitly center */
`;

export const AuthorInfoWrapper = styled.div`
  width: 100%; // Take width of QuoteContentWrapper
  display: flex;
  flex-direction: column;
  /* Figma: Rosie Smith left: calc(50% - 98px/2 - 118.5px); This is complex.
     Assuming the author block is centered under the quote, and text within is left-aligned.
     For mobile, centering the author block and its text might be simpler.
     Let's try centering.
  */
  align-items: center; /* Center author name and role */
`;


export const QuoteAuthorName = styled(Text)`
  /* variant 'quoteAuthor' handles styling */
  text-align: center; /* Center align to match Figma's visual centering */
`;

export const QuoteAuthorRole = styled(Text)`
  /* variant 'quoteRole' handles styling */
  text-align: center; /* Center align */
  margin-top: ${({theme}) => theme.spacing.xs}; /* Small space between name and role */
`;
