import { createGlobalStyle } from 'styled-components'
import { cssQueries } from './utils'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica, sans-serif;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
  }

  #__next {
    height: 100vh;
  }

  h1 {
    font-size: 4rem;
    line-height: 1.35;

    @media ${cssQueries.mobile} {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 3rem;
    line-height: 1.3;

    @media ${cssQueries.mobile} {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2rem;
  }
`
