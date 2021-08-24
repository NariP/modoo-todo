import React, { useState } from 'react';
import App from './App';
import { GlobalStyle, light, dark } from 'style';
import { ThemeProvider } from 'styled-components';

const ThemeComponent = () => {
  const [theme, setTheme] = useState(true);
  return (
    <ThemeProvider theme={theme ? light : dark}>
      <GlobalStyle />
      <App setTheme={setTheme} />
    </ThemeProvider>
  );
};
export default ThemeComponent;
