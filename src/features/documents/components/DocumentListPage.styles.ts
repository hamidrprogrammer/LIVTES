// File: ge/new project/features/documents/components/DocumentListPage.styles.ts
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

export const ErrorMessage = styled.p`
    color: ${({ theme }) => theme.colors.accentRed};
    text-align: center;
`;