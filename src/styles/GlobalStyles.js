/**
 * GlobalStyle contains css that is meant for the entire app. I'm using
 * styled-reset to reset the userAgentStyleSheets that browsers inject
 * by default.
 */
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

let vh
if (typeof window !== 'undefined') {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
    font-weight: 400;
    font-family: IBM Plex Sans, Helvetica Neue, Arial, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  html, body {
    height: 100%;
    overflow: hidden;
  }

  h1 {
    font-size: 2.625rem;
    font-weight: 300;
    line-height: 1.199;
    letter-spacing: 0;
  }

  h2 {
    font-size: 2rem;
    line-height: 1.25;
  }

  h2, h3 {
    font-weight: 400;
    letter-spacing: 0;
  }

  h3 {
    font-size: 1.75rem;
    line-height: 1.29;
  }

  a:any-link {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text[1]};

    :hover {
      color: ${({ theme }) => theme.hover.primary};
    }
  }
`
