import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import "styles/theme.css";
import { GlobalStyle } from "styles/GlobalStyle";
import generateBackground from "lib/generateBackground.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      {generateBackground()}
    </>
  );
}
