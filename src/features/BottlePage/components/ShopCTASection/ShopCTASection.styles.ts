import styled from 'styled-components';
import { media, Theme } from '../../../../core/theme/theme';

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 2071px;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.primaryDark} 0%, #000000 100%);
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  ${media.tabletDown} {
    min-height: auto;
    padding: ${({ theme }) => theme.spacing.xl} 0;
  }
`;

export const TopTextContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 120px;

  @media (max-width: 1024px) { /* New breakpoint for medium screens */
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export const MainTitle = styled.h2`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${({ theme }) => theme.typography.h2Size};
  line-height: 1.2;
  max-width: 312px;

  @media (max-width: 1024px) {
    max-width: 500px;
  }
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const ActionSubtitle = styled.p`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  font-size: ${({ theme }) => theme.typography.h4Size};
  line-height: 1.2;
  max-width: 371px;
  
  @media (max-width: 1024px) {
    max-width: 500px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const BottlesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;

  ${media.tabletDown} {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xl};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

export const SeparatorLine = styled.hr`
  width: 100%;
  max-width: 910px;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  margin: 0 auto ${({ theme }) => theme.spacing.xxl};

  ${media.tabletDown} {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    max-width: 90%;
  }
`;

export const FeaturesGrid = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(157px, 1fr));
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  
  ${media.tabletDown} {
     padding: 0 ${({ theme }) => theme.spacing.md};
     gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const FeaturesColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;