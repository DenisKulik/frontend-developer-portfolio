import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
    font-size: 62.5%; // 1 rem = 10px
  }
`;