// src/components/MobileOnlyWrapper/MobileOnlyWrapper.styles.ts
import styled from 'styled-components';

export const Wrapper = styled.div`
  .desktop-message {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.lightBackground};
    color: ${({ theme }) => theme.colors.textDark};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 50px;
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
    z-index: 9999;
  }

  .mobile-content {
    display: block; // Content is visible by default (mobile first)
  }

  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}) {
    .desktop-message {
      display: flex; /* Show message on desktop */
    }
    .mobile-content {
      display: none; /* Hide mobile content on desktop */
    }
  }
`;
