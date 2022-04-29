import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 60.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }

  body::-webkit-scrollbar {
  width: 17px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: #171717;        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: #171717;    /* color of the scroll thumb */
  border-radius: 8px;       /* roundness of the scroll thumb */
  border: 3px solid rgba(52, 232, 158,0.2);  /* creates padding around scroll thumb */
  
}
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;