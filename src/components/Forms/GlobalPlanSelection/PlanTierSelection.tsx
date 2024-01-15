import styled from 'styled-components'
import { PLANS } from '../../../utils/data'
import { flex } from '../../../styles/mixins'
import { mediaQueries } from '../../../styles/variables'
import PlanCard from './PlanCard'

const Container = styled.div`
  ${flex({ direction: 'column' })}
  gap: .75rem;

  @media ${mediaQueries.tabletPortraitUp} {
    flex-direction: row;
    gap: 1.125rem;
  }
`

function PlanTierSelection() {
  const PLANS_ARR = Object.values(PLANS)

  return (
    <Container>
      {PLANS_ARR.map(({ name, price, logo }, index) => (
        <PlanCard key={name} name={name} price={price} logo={logo} autoFocus={index === 0} />
      ))}
    </Container>
  )
}

export default PlanTierSelection
