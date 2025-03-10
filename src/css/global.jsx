import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *, *::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Inter", serif;
    width: 100vw;
    height: 100vh;
  }

  #root{
   width: 100%;
   height: 100%;
   background: #addcdc;
  }
`;
 
export default GlobalStyle;