import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';

export const FaqSectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.faqBackground};
  padding: ${({ theme }) => theme.spacingT(6)} ${({ theme }) => theme.spacingT(2)};
  width: 100%;

  @media ${media.md} {
    padding: ${({ theme }) => theme.spacingT(8)} ${({ theme }) => theme.spacingT(10)};
  }
`;

export const FaqContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  @media ${media.lg} {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacingT(8)};
    align-items: flex-start;
  }
`;

export const TitleBlock = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingT(4)};
  text-align: center;

  @media ${media.lg} {
    flex-basis: 40%;
    text-align: left;
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeights.light};
  font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
  line-height: ${({ theme }) => theme.typography.lineHeights.loose};
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: ${({ theme }) => theme.spacingT(3)};

  @media ${media.md} {
    font-size: ${({ theme }) => theme.typography.fontSizes['3xl']};
  }
`;

export const FaqList = styled.div`
  width: 100%;
  @media ${media.lg} {
    flex-basis: 60%;
  }
`;