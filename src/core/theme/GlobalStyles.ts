import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Outfit', sans-serif;
  }

  html {
    font-size: 16px;
    font-family: 'Outfit', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.backgroundLight};
    color: ${({ theme }) => theme.colors.textDark};
    line-height: ${({ theme }) => theme.typography.lineHeightBase};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: ${({ theme }) => theme.typography.lineHeightHeading};
    font-weight: ${({ theme }) => theme.typography.fontWeightLight};
    font-family: 'Outfit', sans-serif;
  }

  /* 🌟 Beautiful Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.05);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.primaryLight} 0%,
      ${({ theme }) => theme.colors.primaryDark} 100%
    );
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    transition: background 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.primaryDark} 100%
    );
  }

  /* Firefox support */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.primaryDark} ${({ theme }) => theme.colors.backgroundLight};
  }
`;
