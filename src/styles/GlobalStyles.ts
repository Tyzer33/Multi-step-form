import { createGlobalStyle } from 'styled-components'
import { colors } from './variables'
import backgroundImage from '../assets/bg-sidebar-mobile.svg'
import { flex } from './mixins'

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

  // Fonts

  body {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5625em;
    color: ${colors.text};
  }

  // Styles

  body {
    background: top / 100% auto no-repeat ${colors.background} url(${backgroundImage});
  }

  div#root {
    ${flex({ direction: 'column', align: 'center' })};
  }
`

export default GlobalStyles
