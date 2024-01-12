import styled from 'styled-components'
import { flex } from '../../../styles/mixins'
import { colors, mediaQueries, transition } from '../../../styles/variables'
import Button from '../../Button'
import { useFormContext } from '../../../utils/customHooks'
import { PLANS } from '../../../utils/data'

const Container = styled.div`
  ${flex({ justify: 'space-between', align: 'center' })}
`

const PlanDetails = styled.h2`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${colors.secondaryClr};

  @media ${mediaQueries.tabletPortraitUp} {
    font-size: 1rem;
  }
`

const ChangeButton = styled(Button)`
  font-size: 0.875rem;
  user-select: none;
  cursor: pointer;
  margin-top: 0.125rem;
  text-decoration: underline;
  ${transition}

  &:hover,
  &:focus {
    color: ${colors.secondaryInteractive};
  }
`

const PlanPrice = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${colors.secondaryClr};

  @media ${mediaQueries.tabletPortraitUp} {
    font-size: 1rem;
  }
`

function PlanPriceLine() {
  const { formData, setInFormData } = useFormContext()
  const { selectedPlan, isYearly } = formData

  const { price } = PLANS[selectedPlan]
  const formattedPriceText = isYearly ? `$${price.yearly}/yr` : `$${price.monthly}/mo`
  const formattedPlanText = `${selectedPlan} (${isYearly ? 'Yearly' : 'Monthly'})`

  return (
    <Container>
      <div>
        <PlanDetails>{formattedPlanText}</PlanDetails>
        <ChangeButton onClick={() => setInFormData('currentStep', 1)}>Change</ChangeButton>
      </div>
      <PlanPrice>{formattedPriceText}</PlanPrice>
    </Container>
  )
}

export default PlanPriceLine
