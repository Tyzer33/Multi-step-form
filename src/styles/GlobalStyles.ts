import { createGlobalStyle } from 'styled-components'
import { colors, mediaQueries } from './variables'
import { flex } from './mixins'

const GlobalStyles = createGlobalStyle`
  /* Reset */

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  div#root {
    min-height: 100vh;
    min-height: 100svh;
  }

  img, picture, svg, video {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  fieldset {
    border: none;
  }

  /* Fonts */

  body {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${colors.text};
  }

  /* Styles */

  body {
    background: ${colors.background};
  }

  div#root {
    ${flex({ direction: 'column', align: 'center' })};

    @media ${mediaQueries.tabletPortraitUp} {
      justify-content: center;
    }
  }
`

export default GlobalStyles
