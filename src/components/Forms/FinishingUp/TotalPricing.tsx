import styled from 'styled-components'
import { flex } from '../../../styles/mixins'
import { colors, mediaQueries } from '../../../styles/variables'
import { useFormContext } from '../../../utils/customHooks'

const Container = styled.div`
  ${flex({ justify: 'space-between', align: 'center' })}
  padding-inline: 1rem;

  @media ${mediaQueries.tabletPortraitUp} {
    padding-inline: 1.5rem;
  }
`

const TotalText = styled.p`
  font-size: 0.875rem;
`

const TotalPrice = styled.p`
  font-weight: 700;
  color: ${colors.highlightText};

  @media ${mediaQueries.tabletPortraitUp} {
    font-size: 1.25rem;
  }
`

function TotalPricing() {
  const { formData, totalPrice } = useFormContext()
  const { isYearly } = formData

  const frequencyText = isYearly ? 'year' : 'month'
  const frequencyPrice = isYearly ? 'yr' : 'mo'

  return (
    <Container>
      <TotalText>Total (per {frequencyText})</TotalText>
      <TotalPrice>{`$${totalPrice}/${frequencyPrice}`}</TotalPrice>
    </Container>
  )
}

export default TotalPricing
