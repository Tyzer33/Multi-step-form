import styled from 'styled-components'
import { useFormContext } from '../utils/customHooks'
import { ADDONS, PLANS } from '../utils/data'
import { colors } from '../styles/variables'
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
`

const PlanContainer = styled.div`
  ${flex({ justify: 'space-between', align: 'center' })}
`

const PlanDetails = styled.h2`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${colors.secondaryClr};
`

const ChangeButton = styled.button`
  font-size: 0.875rem;
  user-select: none;
  cursor: pointer;
  margin-top: 0.125rem;
  text-decoration: underline;
`

const PlanPrice = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${colors.secondaryClr};
`

const Line = styled.hr`
  border: none;
  height: 1px;
  background: ${colors.border};
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
`

const TotalText = styled.p`
  font-size: 0.875rem;
`

const TotalPrice = styled.p`
  font-weight: 700;
  color: ${colors.highlightText};
`

// TODO: Plutot que *10 pour le yearly, mettre le prix annuel directement dans le fichier data.ts

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
            <PlanDetails>{`${selectedPlan} (${isYearly ? 'Yearly' : 'Monthly'})`}</PlanDetails>
            <ChangeButton type="button" onClick={() => setInFormData('currentStep', 1)}>
              Change
            </ChangeButton>
          </div>
          <PlanPrice>
            {isYearly ? `$${selectedPlanPrice * 10}/yr` : `$${selectedPlanPrice}/mo`}
          </PlanPrice>
        </PlanContainer>
        {selectedAddons.length > 0 && <Line />}
        {selectedAddons.map((selectedAddon) => (
          <AddonContainer key={selectedAddon}>
            <AddonName>{selectedAddon}</AddonName>
            <AddonPrice>
              {isYearly
                ? `+$${ADDONS[selectedAddon].price * 10}/yr`
                : `+$${ADDONS[selectedAddon].price}/mo`}
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
