import { createGlobalStyle } from 'styled-components';

export const GeneralStyle = createGlobalStyle`
  @font-face {
    font-family: 'SFUIDisplay-Regular';
    src: 
      url('http://localhost:4000/assets/fonts/SFUDisplay/regular/sfuidisplay_regular.eot'),
      url('http://localhost:4000/assets/fonts/SFUDisplay/regular/sfuidisplay_regular.woff') format('woff'),
      url('http://localhost:4000/assets/fonts/SFUDisplay/regular/sfuidisplay_regular.woff2') format('woff2'),
      url('http://localhost:4000/assets/fonts/SFUDisplay/regular/sfuidisplay_regular.ttf2') format('ttf2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    height: 100%;
    width: 100%;
    font-size: 16px;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: 'SFUIDisplay-Regular';
  }
`;
