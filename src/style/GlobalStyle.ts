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
  }
  input {
  border: none;
  outline: none;
  }
  button {
  cursor: pointer
  }
`;
export default GlobalStyle;
