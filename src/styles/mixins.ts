import { css } from 'styled-components'
import { CssMeasure, FlexMixin } from '../utils/types'

export const flex = ({ direction = null, justify = null, align = null }: FlexMixin) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`

export const expandClickArea = (space: CssMeasure) => css`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    inset: ${`-${space}`};
  }
`
