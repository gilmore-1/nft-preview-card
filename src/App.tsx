import { useState } from "react";
import reactLogo from "./assets/react.svg";
import GlobalStyle from "./components/Global/GlobalStyles";
import CenteredCard from "./components/Card/Card";
import { defaultTheme } from "./themes/defaultTheme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <CenteredCard />
      </ThemeProvider>
    </div>
  );
}

export default App;
