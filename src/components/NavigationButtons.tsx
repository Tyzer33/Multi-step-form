import styled, { css } from 'styled-components'
import { flex } from '../styles/mixins'
import { colors, mediaQueries, transition } from '../styles/variables'
import { useFormContext } from '../utils/customHooks'
import Button from './Button'

const Container = styled.div<{ $isFooter: boolean }>`
  ${flex({ justify: 'space-between', align: 'center' })}
  font-weight: 500;
  font-size: 1rem;

  ${({ $isFooter }) =>
    $isFooter &&
    css`
      background: ${colors.elementBg};
      width: 100%;
      padding: 1rem;
      box-shadow: 0 0 1rem 0 hsla(0, 0%, 0%, 0.025);
      font-size: 0.875rem;
    `}
`

const Back = styled(Button)`
  ${transition}

  &:hover,
  &:focus-visible {
    color: ${colors.primaryInteractive};
  }
`

const Next = styled(Button)`
  background: ${colors.primaryInteractive};
  color: ${colors.tertiaryClr};
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  margin-left: auto; // Keep "Next Step" on the right when "Go Back" is not displayed
  ${transition}

  &:hover,
  &:focus-visible {
    box-shadow: inset 100vmax 100vmax hsl(0, 100%, 100%, 0.15);
  }

  &:focus-visible {
    outline: 0.125rem solid ${colors.primaryInteractive};
    outline-offset: 0.125rem;
  }

  @media ${mediaQueries.tabletPortraitUp} {
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
  }
`

const Confirm = styled(Next)`
  background: ${colors.secondaryInteractive};

  &:focus-visible {
    outline-color: ${colors.secondaryInteractive};
  }
`

type Props = {
  type?: 'footer' | 'div'
}

function NavigationButtons({ type = 'div' }: Props) {
  const { formData, setPrevStep, setInFormData } = useFormContext()
  const { currentStep } = formData

  return (
    <Container as={type} $isFooter={type === 'footer'}>
      {currentStep > 0 && <Back onClick={setPrevStep}>Go Back</Back>}
      {currentStep === 3 ? (
        <Confirm onClick={() => setInFormData('isCompleted', true)} autoFocus>
          Confirm
        </Confirm>
      ) : (
        <Next type="submit" form="form">
          Next Step
        </Next>
      )}
    </Container>
  )
}

export default NavigationButtons
