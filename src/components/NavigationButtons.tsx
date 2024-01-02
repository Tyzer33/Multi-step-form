/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'
import { flex } from '../styles/mixins'
import { colors } from '../styles/variables'

const Container = styled.div`
  ${flex({ justify: 'space-between', align: 'center' })}
  font-weight: 700;
  font-size: 0.875rem;
`

const Next = styled.a`
  background: ${colors.primaryInteractive};
  color: ${colors.tertiaryClr};
  padding: 0.875rem 1rem;
  line-height: 1;
  border-radius: 0.25rem;
`

function NavigationButtons() {
  return (
    <Container>
      <a href="#">Go Back</a>
      <Next href="#">Next Step</Next>
    </Container>
  )
}

export default NavigationButtons
