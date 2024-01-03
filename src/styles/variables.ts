export const colors = {
  text: 'hsl(231, 11%, 63%)',
  background: 'hsl(217, 100%, 97%)',
  tertiaryClr: 'hsl(0, 0%, 100%)',
  activeBg: 'hsl(206, 94%, 87%)',
  secondaryClr: 'hsl(213, 96%, 18%)',
  elementBg: 'hsl(0, 0%, 100%)',
  primaryInteractive: 'hsl(213, 96%, 18%)',
  secondaryInteractive: 'hsl(243, 100%, 62%)',
  highlightText: 'hsl(243, 100%, 62%)',
  placeholder: 'hsl(231, 11%, 63%)',
  border: 'hsl(229, 24%, 87%)',
  innerElBg: 'hsl(231, 100%, 99%)',

  // - Marine blue: hsl(213, 96%, 18%)
  // - Purplish blue: hsl(243, 100%, 62%)
  // - Pastel blue: hsl(228, 100%, 84%)
  // - Light blue: hsl(206, 94%, 87%)
  // - Strawberry red: hsl(354, 84%, 57%)
  // - Cool gray: hsl(231, 11%, 63%)
  // - Light gray: hsl(229, 24%, 87%)
  // - Magnolia: hsl(217, 100%, 97%)
  // - Alabaster: hsl(231, 100%, 99%)
  // - White: hsl(0, 0%, 100%)
}

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
}
