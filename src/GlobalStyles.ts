import { createGlobalStyle } from 'styled-components';

export const theme = {
    colors: {
        primary: 'rgb(170, 54, 124)',
        primaryLight: 'rgb(223, 157, 200)',
        primaryDark: 'rgb(58, 33, 49)',
        secondary: 'rgb(74, 47, 189)',
        background: 'rgb(18, 18, 18)',
    },
    media: {
        large: '(max-width: 1200px)',
        medium: '(max-width: 900px)',
        small: '(max-width: 600px)',
    }
};

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

    @media ${props => props.theme.media.large} {
      font-size: 56.25%; // 1 rem = 9px
    }

    @media ${props => props.theme.media.medium} {
      font-size: 50%; // 1 rem = 8px
    }
  }
`;

