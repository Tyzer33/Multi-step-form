import styled from 'styled-components'
import { flex } from '../../../styles/mixins'
import PlanTierSelection from './PlanTierSelection'
import { mediaQueries } from '../../../styles/variables'
import BillingPlanSwitch from './BillingPlanSwitch'

const Container = styled.fieldset`
  ${flex({ direction: 'column' })}
  gap: 1.5rem;

  @media ${mediaQueries.tabletPortraitUp} {
    gap: 2rem;
  }
`

function GlobalPlanSelection() {
  return (
    <Container>
      <PlanTierSelection />
      <BillingPlanSwitch />
    </Container>
  )
}

export default GlobalPlanSelection
