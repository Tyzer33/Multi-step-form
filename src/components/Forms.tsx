import styled from 'styled-components'
import { useFormContext } from '../utils/customHooks'
import { colors } from '../styles/variables'
import { flex } from '../styles/mixins'
import PersonalInfo from './PersonalInfo'
import SelectPlan from './SelectPlan'
import PickAddOns from './PickAddOns'
import FinishingUp from './FinishingUp'
import { FORMSTEPSDESCRIPTION } from '../utils/data'

const Container = styled.div`
  ${flex({ direction: 'column' })}
  gap: 1.375rem;
`

const TextContainer = styled.div`
  ${flex({ direction: 'column' })}
  gap: .625rem;
`

const Description = styled.div`
  line-height: 1.5625em;
`

const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.secondaryClr};
`

function Forms() {
  const { currentStep } = useFormContext().formData
  const { heading, description } = FORMSTEPSDESCRIPTION[currentStep]

  return (
    <Container>
      <TextContainer>
        <Heading>{heading}</Heading>
        <Description>{description}</Description>
      </TextContainer>
      {currentStep === 0 && <PersonalInfo />}
      {currentStep === 1 && <SelectPlan />}
      {currentStep === 2 && <PickAddOns />}
      {currentStep === 3 && <FinishingUp />}
    </Container>
  )
}

export default Forms
