import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';

export const SCSectionContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md}; // Padding for the section
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg}; // 24px gap

  @media ${media.md} {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};
  }

  @media ${media.lg} {
    // Science card (558px) on left, Community card (792px) on right
    grid-template-columns: 558fr 792fr; // Proportions from Figma widths
    gap: 30px; // Specific gap from Figma (618px - (30px + 558px))
    padding: ${({ theme }) => theme.spacing.xxl} 30px;
    margin-top: ${({ theme }) => theme.spacing.lg}; // Add some space from the section above
  }
`;
