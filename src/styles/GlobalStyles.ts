import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  // Reset

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  body {
    min-height: 100vh;
    min-height: 100svh;
  }

  img, picture, svg, video {
    display: block;
    max-width: 100%;
  }
`

export default GlobalStyles
