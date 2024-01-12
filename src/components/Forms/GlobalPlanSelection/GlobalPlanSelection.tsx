import styled from 'styled-components'
import { flex } from '../../../styles/mixins'
import PlanSelection from './PlanSelection'
import { mediaQueries } from '../../../styles/variables'
import PlanSwitch from './PlanSwitch'

const Container = styled.form`
  ${flex({ direction: 'column' })}
  gap: 1.5rem;

  @media ${mediaQueries.tabletPortraitUp} {
    gap: 2rem;
  }
`

function GlobalPlanSelection() {
  return (
    <Container>
      <PlanSelection />
      <PlanSwitch />
    </Container>
  )
}

export default GlobalPlanSelection
