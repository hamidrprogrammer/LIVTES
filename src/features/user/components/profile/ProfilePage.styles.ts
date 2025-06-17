import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  gap: 32px;
  padding: 40px;
  background-color: #F9FAFB;
  min-height: 100vh;
  padding-top: 100px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 24px;
    gap: 24px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    padding-top: 80px;
  }
`;

export const MainContent = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 0; // برای جلوگیری از سرریز شدن محتوای فلکس
`;

export const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textGrey};
`;

export const ErrorState = styled(LoadingState)`
  color: ${({ theme }) => theme.colors.accentRed};
`;