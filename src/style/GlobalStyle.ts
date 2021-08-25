import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
const GlobalStyle = createGlobalStyle` 
  ${normalize}
  html,
  body {
    overflow: hidden;
  }
  * {
    box-sizing: border-box;
    font-family: NanumSquareRound, sans-serif;
  }
  i {
  font-style: normal;
  }
  input {
  border: none;
  outline: none;
  }
  button {
  background: none;
  border: none;
  cursor: pointer;
  }
`;
export default GlobalStyle;
