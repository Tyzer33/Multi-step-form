import { useFormContext } from '../utils/customHooks'
import { ADDONS, PLANS } from '../utils/data'

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
        <hr />
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
      <div>
        <p>{`Total (per ${isYearly ? 'year' : 'month'})`}</p>
        <p> </p>
      </div>
    </div>
  )
}

export default FinishingUp
