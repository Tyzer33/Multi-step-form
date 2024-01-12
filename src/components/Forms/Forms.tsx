import styled from 'styled-components'
import { useFormContext } from '../../utils/customHooks'
import { colors, mediaQueries } from '../../styles/variables'
import { flex } from '../../styles/mixins'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import GlobalPlanSelection from './GlobalPlanSelection/GlobalPlanSelection'
import PickAddOns from './PickAddons/PickAddOns'
import FinishingUp from './FinishingUp/FinishingUp'
import { FORMSTEPSDESCRIPTION } from '../../utils/data'

const Container = styled.div`
  ${flex({ direction: 'column' })}
  gap: 1.375rem;
  flex: 1;

  @media ${mediaQueries.tabletPortraitUp} {
    gap: 2.25rem;
  }
`

const TextContainer = styled.div`
  ${flex({ direction: 'column' })}
  gap: .625rem;
`

const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.secondaryClr};

  @media ${mediaQueries.tabletPortraitUp} {
    font-size: 2rem;
  }
`

const Description = styled.div`
  line-height: 1.5625em;
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
      {currentStep === 1 && <GlobalPlanSelection />}
      {currentStep === 2 && <PickAddOns />}
      {currentStep === 3 && <FinishingUp />}
    </Container>
  )
}

export default Forms
