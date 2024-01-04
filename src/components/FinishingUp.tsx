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
  padding: 1rem;
  background: ${colors.innerElBg};
  border-radius: 0.5rem;
`

const SelectedPlanContainer = styled.div`
  ${flex({ justify: 'space-between', align: 'center' })}
`

const ChangeButton = styled.button`
  font-size: 0.875rem;
  user-select: none;
  cursor: pointer;
  text-decoration: underline;
`

const Price = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${colors.secondaryClr};
`

const Line = styled.hr`
  border: none;
  height: 1px;
  background: ${colors.border};
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

// TODO: Terminer le composant FinishingUp
// TODO: Plutot que *10 pour le yearly, mettre le prix annuel directement dans le fichier data.ts

function FinishingUp() {
  const { formData, calculTotal, setInFormData } = useFormContext()
  const { selectedPlan, isYearly, selectedAddons } = formData

  const selectedPlanPrice = PLANS[selectedPlan].price
  const frequency = isYearly ? 'yr' : 'mo'

  return (
    <Wrapper>
      <DetailedContainer>
        <SelectedPlanContainer>
          <div>
            <h2>{`${selectedPlan} (${isYearly ? 'Yearly' : 'Monthly'})`}</h2>
            <ChangeButton type="button" onClick={() => setInFormData('currentStep', 1)}>
              Change
            </ChangeButton>
          </div>
          <Price>{isYearly ? `$${selectedPlanPrice * 10}/yr` : `$${selectedPlanPrice}/mo`}</Price>
        </SelectedPlanContainer>
        {selectedAddons.length > 0 && (
          <>
            <Line />
            <div>
              {selectedAddons.map((selectedAddon) => (
                <div key={selectedAddon}>
                  <p>{selectedAddon}</p>
                  <p>
                    {isYearly
                      ? `+$${ADDONS[selectedAddon].price * 10}/yr`
                      : `+$${ADDONS[selectedAddon].price}/mo`}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </DetailedContainer>
      <TotalContainer>
        <TotalText>{`Total (per ${isYearly ? 'year' : 'month'})`}</TotalText>
        <TotalPrice>{`$${calculTotal()}/${frequency}`}</TotalPrice>
      </TotalContainer>
    </Wrapper>
  )
}

export default FinishingUp
