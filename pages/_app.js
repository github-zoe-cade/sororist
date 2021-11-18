import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { GlobalStyle } from '../styles/GlobalStyle'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require('../lib/generateBackground')
  }
  , [])
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
