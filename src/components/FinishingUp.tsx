import styled from 'styled-components'
import { useFormContext } from '../utils/customHooks'
import { ADDONS, PLANS } from '../utils/data'
import { colors, mediaQueries, transition } from '../styles/variables'
import { flex } from '../styles/mixins'

const Wrapper = styled.div`
  ${flex({ direction: 'column' })}
  gap: 1.5rem;
`

const DetailedContainer = styled.div`
  ${flex({ direction: 'column' })}
  gap: 1rem;
  padding: 1rem;
  background: ${colors.innerElBg};
  border-radius: 0.5rem;

  @media ${mediaQueries.temp} {
    padding: 1.5rem;
    padding-top: 1.25rem;
    gap: 1.25rem;
  }
`

const PlanContainer = styled.div`
  ${flex({ justify: 'space-between', align: 'center' })}
`

const PlanDetails = styled.h2`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${colors.secondaryClr};

  @media ${mediaQueries.temp} {
    font-size: 1rem;
  }
`

const ChangeButton = styled.button`
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

  @media ${mediaQueries.temp} {
    font-size: 1rem;
  }
`

const Line = styled.hr`
  border: none;
  height: 1px;
  background: ${colors.border};

  @media ${mediaQueries.temp} {
    margin-top: 0.25rem;
  }
`

const AddonContainer = styled.div`
  ${flex({ justify: 'space-between', align: 'center' })}
`

const AddonName = styled.p`
  font-size: 0.875rem;
`

const AddonPrice = styled.p`
  font-size: 0.875rem;
  color: ${colors.secondaryClr};
`

const TotalContainer = styled.div`
  ${flex({ justify: 'space-between', align: 'center' })}
  padding-inline: 1rem;

  @media ${mediaQueries.temp} {
    padding-inline: 1.5rem;
  }
`

const TotalText = styled.p`
  font-size: 0.875rem;
`

const TotalPrice = styled.p`
  font-weight: 700;
  color: ${colors.highlightText};

  @media ${mediaQueries.temp} {
    font-size: 1.25rem;
  }
`

function FinishingUp() {
  const { formData, calculTotal, setInFormData } = useFormContext()
  const { selectedPlan, isYearly, selectedAddons } = formData

  const selectedPlanPrice = PLANS[selectedPlan].price
  const frequency = isYearly ? 'yr' : 'mo'

  return (
    <Wrapper>
      <DetailedContainer>
        <PlanContainer>
          <div>
            <PlanDetails>
              {selectedPlan} ({isYearly ? 'Yearly' : 'Monthly'})
            </PlanDetails>
            <ChangeButton type="button" onClick={() => setInFormData('currentStep', 1)}>
              Change
            </ChangeButton>
          </div>
          <PlanPrice>
            {isYearly ? `$${selectedPlanPrice.yearly}/yr` : `$${selectedPlanPrice.monthly}/mo`}
          </PlanPrice>
        </PlanContainer>
        {selectedAddons.length > 0 && <Line />}
        {selectedAddons.map((selectedAddon) => (
          <AddonContainer key={selectedAddon}>
            <AddonName>{selectedAddon}</AddonName>
            <AddonPrice>
              {isYearly
                ? `+$${ADDONS[selectedAddon].price.yearly}/yr`
                : `+$${ADDONS[selectedAddon].price.monthly}/mo`}
            </AddonPrice>
          </AddonContainer>
        ))}
      </DetailedContainer>
      <TotalContainer>
        <TotalText>{`Total (per ${isYearly ? 'year' : 'month'})`}</TotalText>
        <TotalPrice>{`$${calculTotal()}/${frequency}`}</TotalPrice>
      </TotalContainer>
    </Wrapper>
  )
}

export default FinishingUp
