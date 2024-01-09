import { css } from 'styled-components'

// TODO: Refactoriser les couleurs
export const colors = {
  background: 'hsl(217, 100%, 97%)',
  innerElBg: 'hsl(231, 100%, 99%)',
  fallbackImgBg: 'hsl(243, 100%, 62%)',

  text: 'hsl(231, 11%, 63%)',
  highlightText: 'hsl(243, 100%, 62%)',

  secondaryClr: 'hsl(213, 96%, 18%)',
  tertiaryClr: 'hsl(0, 0%, 100%)',

  activeBg: 'hsl(206, 94%, 87%)',
  elementBg: 'hsl(0, 0%, 100%)',

  primaryInteractive: 'hsl(213, 96%, 18%)',
  secondaryInteractive: 'hsl(243, 100%, 62%)',

  placeholder: 'hsl(231, 11%, 63%)',
  border: 'hsl(229, 24%, 87%)',

  error: 'hsl(354, 84%, 57%)',

  // - Pastel blue: hsl(228, 100%, 84%)
}

export const transition = css`
  transition: all 0.2s ease-in;
`

const breakpoints = {
  tablet: 768,
  tabletLandscape: 900,
  desktop: 1024,
}

export const mediaQueries = {
  mobileOnly: `(max-width: ${(breakpoints.tablet - 1) / 16}rem)`,
  tabletPortraitUp: `(min-width: ${breakpoints.tablet / 16}rem)`,
  tabletLandscapeUp: `(min-width: ${breakpoints.tabletLandscape / 16}rem)`,
  desktopUp: `(min-width: ${breakpoints.desktop / 16}rem)`,
  temp: `(min-width: 0rem)`, // temp
}
