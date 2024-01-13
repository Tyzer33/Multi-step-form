import { createGlobalStyle } from 'styled-components'
import { colors, mediaQueries } from './variables'
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

  // Fonts

  body {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${colors.text};
  }

  // Styles

  body {
    /* background: top  / 100% auto no-repeat ${colors.background} url(${backgroundImage});
    background-image: url(${backgroundImage});
    background-size: 100vw ;
    background-repeat: no-repeat;
    background-position: top center; */
    background: ${colors.background};

    /* @media ${mediaQueries.tabletPortraitUp} {
      background-image: none;
    } */
  }

  div#root {
    ${flex({ direction: 'column', align: 'center' })};

    @media ${mediaQueries.tabletPortraitUp} {
      justify-content: center;
    }
  }
`

export default GlobalStyles
