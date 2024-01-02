import styled from 'styled-components'
import Confirmation from './Confirmation'
import FinishingUp from './FinishingUp'
import PersonalInfo from './PersonalInfo'
import PickAddOns from './PickAddOns'
import SelectPlan from './SelectPlan'

const Container = styled.main`
  flex: 1;
`

function MainContent() {
  return (
    <Container>
      <PersonalInfo />
      <SelectPlan />
      <PickAddOns />
      <FinishingUp />
      <Confirmation />
    </Container>
  )
}

export default MainContent
