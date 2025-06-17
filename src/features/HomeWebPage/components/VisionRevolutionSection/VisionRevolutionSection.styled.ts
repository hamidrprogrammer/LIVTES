import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';

export const VRSectionContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md}; // Padding for the section itself
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg}; // 24px gap

  @media ${media.md} {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl}; // 30px from figma: (1440 - (793+557+30))/2
  }

  @media ${media.lg} {
    grid-template-columns: 793fr 557fr; // Proportions from Figma widths
    gap: 30px; // Specific gap from Figma (853 - (30+793))
    padding: ${({ theme }) => theme.spacing.xxl} 30px;
  }
`;
