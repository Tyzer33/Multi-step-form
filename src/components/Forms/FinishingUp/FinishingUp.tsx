import styled from 'styled-components'
import { flex } from '../../../styles/mixins'
import DetailedPricing from './DetailedPricing'
import TotalPricing from './TotalPricing'

const Wrapper = styled.div`
  ${flex({ direction: 'column' })}
  gap: 1.5rem;
`

function FinishingUp() {
  return (
    <Wrapper>
      <DetailedPricing />
      <TotalPricing />
    </Wrapper>
  )
}

export default FinishingUp
