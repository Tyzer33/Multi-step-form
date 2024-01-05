import styled, { css } from 'styled-components'
import { colors, mediaQueries } from '../styles/variables'
import { flex } from '../styles/mixins'
import { useFormContext } from '../utils/customHooks'
import { FORMSTEPSDESCRIPTION } from '../utils/data'

// TODO: Essayer de changer dynamiquement la balise utiliser en fonction d'un prop
const Container = styled.div`
  display: flex;
  gap: 1rem;

  @media ${mediaQueries.temp} {
    flex-direction: column;
    gap: 2rem;
  }
`

const Step = styled.div`
  display: flex;
  gap: 1rem;
`

const StepIndicator = styled.div<{ $active?: boolean }>`
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

const Text = styled.div`
  ${flex({ direction: 'column', justify: 'space-between' })}
`

const StepNumber = styled.p`
  font-size: 0.8125rem;
`

const StepName = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${colors.tertiaryClr};
  letter-spacing: 0.1em;
`

type Props = {
  alternative?: boolean
}

function FormSteps({ alternative = false }: Props) {
  const { currentStep } = useFormContext().formData

  return (
    <Container>
      {FORMSTEPSDESCRIPTION.map(({ heading, short }, index) =>
        alternative ? (
          <Step key={heading}>
            <StepIndicator $active={currentStep === index}>{index + 1}</StepIndicator>
            <Text>
              <StepNumber>STEP {index + 1}</StepNumber>
              <StepName>{short}</StepName>
            </Text>
          </Step>
        ) : (
          <StepIndicator key={heading} $active={currentStep === index}>
            {index + 1}
          </StepIndicator>
        ),
      )}
    </Container>
  )
}

export default FormSteps
