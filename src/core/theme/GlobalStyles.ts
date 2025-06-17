import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Import font FIRST */
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap');
::-webkit-scrollbar {
  display: none;
}
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Outfit;
      scrollbar-width: none;

  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    font-family: Outfit;
  }

  body {
    background: ${({ theme }) => theme.colors.backgroundLight};
    color: ${({ theme }) => theme.colors.textDark};
    line-height: ${({ theme }) => theme.typography.lineHeightBase};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
      scrollbar-width: none;

  }

  h1, h2, h3, h4, h5, h6 {
    line-height: ${({ theme }) => theme.typography.lineHeightHeading};
    font-weight: ${({ theme }) => theme.typography.fontWeightLight};
    font-family: 'Outfit', sans-serif;
  }

  /* …بقیهٔ استایل‌ها… */
`;
