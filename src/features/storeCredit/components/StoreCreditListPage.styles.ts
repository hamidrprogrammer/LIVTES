// ge/new project/features/storeCredit/components/StoreCreditListPage.styles.ts
import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export const CreditsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
  margin-top: 24px;

   @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyState = styled.div`
    text-align: center;
    padding: 48px;
    color: ${({ theme }) => theme.colors.textDark};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 12px;
    margin-top: 24px;
`;