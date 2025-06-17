import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacingT(2)};
  width: 100%;
  align-items: center;

  @media ${media.md} {
    align-items: flex-start;
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: ${({ theme }) => theme.spacingT(3)};

  &.frequency-title {
    font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
  }
`;