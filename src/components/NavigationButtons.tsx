/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'
import { flex } from '../styles/mixins'
import { colors, mediaQueries } from '../styles/variables'
import { useFormContext } from '../utils/customHooks'

const Container = styled.div`
  ${flex({ justify: 'space-between', align: 'center' })}
  font-weight: 500;
  font-size: 0.875rem;

  @media ${mediaQueries.temp} {
    font-size: 1rem;
  }
`

const Back = styled.button`
  &:hover,
  &:focus {
    color: ${colors.primaryInteractive};
  }
`

const Next = styled.button`
  background: ${colors.primaryInteractive};
  color: ${colors.tertiaryClr};
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;

  margin-left: auto; // Keep "Next Step" on the right when "Go Back" is not displayed

  &:hover,
  &:focus {
    box-shadow: inset 100vmax 100vmax hsl(0, 100%, 100%, 0.15);
  }

  @media ${mediaQueries.temp} {
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
  }
`

const Confirm = styled(Next)`
  background: ${colors.secondaryInteractive};
`

function NavigationButtons() {
  const { formData, setNextStep, setPrevStep, setInFormData } = useFormContext()
  const { currentStep } = formData

  return (
    <Container>
      {currentStep > 0 && (
        <Back type="button" onClick={setPrevStep}>
          Go Back
        </Back>
      )}
      {currentStep === 3 ? (
        <Confirm type="button" onClick={() => setInFormData('isCompleted', true)}>
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
