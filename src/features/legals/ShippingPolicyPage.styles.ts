// src/features/legals/ShippingPolicyPage.styles.ts
import styled from 'styled-components';
import { media } from '../../core/theme/theme';

export const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 40px 20px;
  min-height: 100vh;
  font-family: ${({ theme }) => theme.typography.fontFamily};

  ${media.tablet} {
    padding: 24px 16px;
  }
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  padding: clamp(2rem, 5vw, 4rem);

  ${media.tablet} {
    padding: clamp(1.5rem, 4vw, 3rem);
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({ theme }) => theme.colors.primaryDark};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding-bottom: 24px;
  margin-bottom: 32px;

  svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.accent};
  }

  ${media.tablet} {
    gap: 12px;
    padding-bottom: 20px;
    margin-bottom: 24px;
    svg {
      font-size: 2rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
`;

export const ContentArea = styled.div`
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textDark};

  h2 {
    font-size: clamp(1.5rem, 3.5vw, 2rem);
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5em;
  }

  h3 {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-top: 2em;
    margin-bottom: 1em;
    border-left: 4px solid ${({ theme }) => theme.colors.accent};
    padding-left: 12px;
  }
  
  p {
    margin-bottom: 1.5em;
  }

  strong {
    font-weight: 700;
  }
`;