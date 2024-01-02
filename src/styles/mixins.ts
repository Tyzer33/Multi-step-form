import { css } from 'styled-components'

type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse' | null
type Justify =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | null
type Align = 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline' | null

type FlexProps = {
  direction?: Direction
  justify?: Justify
  align?: Align
}

// eslint-disable-next-line import/prefer-default-export
export const flex = ({ direction = null, justify = null, align = null }: FlexProps) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`
