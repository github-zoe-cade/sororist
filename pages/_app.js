import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import "styles/theme.css";
import { GlobalStyle } from "styles/GlobalStyle";

export default function App({ Component, pageProps }) {
  require('lib/generateBackground')

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
