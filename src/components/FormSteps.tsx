import styled, { css } from 'styled-components'
import { colors } from '../styles/variables'
import { flex } from '../styles/mixins'
import { useFormContext } from '../utils/customHooks'

const Container = styled.div`
  display: flex;
  gap: 1rem;
`

const Step = styled.div<{ $active?: boolean }>`
  ${flex({ justify: 'center', align: 'center' })}
  color: ${colors.tertiaryClr};
  border: 1px solid ${colors.tertiaryClr};
  border-radius: 50%;
  height: 2.0625rem;
  aspect-ratio: 1;

  // Fonts
  font-size: 0.875rem;
  font-weight: 700;

  ${({ $active }) =>
    $active &&
    css`
      background-color: ${colors.activeBg};
      color: ${colors.secondaryClr};
      border: none;
    `}
`

// TODO: Mapper pour les steps
function FormSteps() {
  const { currentStep } = useFormContext()
  return (
    <Container>
      <Step $active={currentStep === 0}>1</Step>
      <Step $active={currentStep === 1}>2</Step>
      <Step $active={currentStep === 2}>3</Step>
      <Step $active={currentStep === 3}>4</Step>
    </Container>
  )
}

export default FormSteps
