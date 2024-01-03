import styled from 'styled-components'
import { useFormContext } from '../utils/customHooks'
import { ADDONS, PLANS } from '../utils/data'

const Line = styled.hr``

const TotalContainer = styled.div``

// TODO: Terminer le composant FinishingUp

function FinishingUp() {
  const { formData, setCurrentStep } = useFormContext()
  const { selectedPlan, isYearly, selectedAddons } = formData

  const selectedPlanPrice = PLANS.find((plan) => plan.name === selectedPlan)?.price
  const frequency = isYearly ? 'yr' : 'mo'

  return (
    <div>
      <div>
        <div>
          <div>
            <h2>{`${selectedPlan} (${isYearly ? 'Yearly' : 'Monthly'})`}</h2>
            <button type="button" onClick={() => setCurrentStep(1)}>
              Change
            </button>
          </div>
          <p>{`$${selectedPlanPrice}/${frequency}`}</p>
        </div>
        <Line />
        <div>
          {selectedAddons.map((selectedAddon) => {
            const addonPrice = ADDONS.find((addon) => addon.name === selectedAddon)?.price
            return (
              <div key={selectedAddon}>
                <p>{selectedAddon}</p>
                <p>{`+$${addonPrice}/${frequency}`}</p>
              </div>
            )
          })}
        </div>
      </div>
      <TotalContainer>
        <p>{`Total (per ${isYearly ? 'year' : 'month'})`}</p>
        <p>{`$${12}/${frequency}`}</p>
      </TotalContainer>
    </div>
  )
}

export default FinishingUp
