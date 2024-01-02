import Confirmation from './Confirmation'
import FinishingUp from './FinishingUp'
import PersonalInfo from './PersonalInfo'
import PickAddOns from './PickAddOns'
import SelectPlan from './SelectPlan'

function MainContent() {
  return (
    <main>
      <PersonalInfo />
      <SelectPlan />
      <PickAddOns />
      <FinishingUp />
      <Confirmation />
    </main>
  )
}

export default MainContent
