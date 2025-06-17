// src/components/shared/Layout.tsx

import styled from 'styled-components';

export const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textDark};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  min-height: 100vh;
  margin-top:50px;
  padding: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
  
  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryDark};
  
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
  }
`;

export const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px; /* Main content and a fixed-width sidebar */
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: start;
  max-width: ${({ theme }) => theme.sizes.containerMaxWidth};
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 320px; // Make sidebar slightly smaller on tablets
    gap: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Stack into a single column on tablets and mobiles
  }
`;

export const LeftSection = styled.main``;

export const RightSection = styled.aside`
  position: sticky;
  top: ${({ theme }) => theme.spacing.xl}; /* Sticky sidebar for long item lists */
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%; // Ensure it takes full width when stacked
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;