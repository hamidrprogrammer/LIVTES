import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';

export const PHSectionContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg}; // 24px gap

  @media ${media.md} {
    grid-template-columns: 1fr 1fr; // Two equal columns
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};
  }

  @media ${media.lg} {
    gap: 30px; // Specific gap from Figma (735px - (30px + 675px))
    padding: ${({ theme }) => theme.spacing.xxl} 30px;
    margin-top: ${({ theme }) => theme.spacing.lg}; // Space from the section above
  }
`;
