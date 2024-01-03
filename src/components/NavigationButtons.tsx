/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'
import { flex } from '../styles/mixins'
import { colors } from '../styles/variables'
import { useFormContext } from '../utils/customHooks'

const Container = styled.div`
  ${flex({ justify: 'space-between', align: 'center' })}
  font-weight: 700;
  font-size: 0.875rem;
`

const Next = styled.button`
  background: ${colors.primaryInteractive};
  color: ${colors.tertiaryClr};
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;

  margin-left: auto; // Keep "Next Step" on the right when "Go Back" is not displayed
`

const Confirm = styled(Next)`
  background: ${colors.secondaryInteractive};
`

function NavigationButtons() {
  const { currentStep, setNextStep, setPrevStep, confirm } = useFormContext()

  return (
    <Container>
      {currentStep > 0 && (
        <button type="button" onClick={setPrevStep}>
          Go Back
        </button>
      )}
      {currentStep === 3 ? (
        <Confirm type="button" onClick={confirm}>
          Confirm
        </Confirm>
      ) : (
        <Next type="button" onClick={setNextStep}>
          Next Step
        </Next>
      )}
    </Container>
  )
}

export default NavigationButtons
