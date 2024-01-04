import styled, { css } from 'styled-components'
import { colors } from '../styles/variables'
import { flex } from '../styles/mixins'
import { useFormContext } from '../utils/customHooks'
import { FORMSTEPSDESCRIPTION } from '../utils/data'

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

function FormSteps() {
  const { currentStep } = useFormContext().formData
  return (
    <Container>
      {FORMSTEPSDESCRIPTION.map(({ heading }, index) => (
        <Step key={heading} $active={currentStep === index}>
          {index + 1}
        </Step>
      ))}
    </Container>
  )
}

export default FormSteps
