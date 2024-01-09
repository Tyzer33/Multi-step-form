import styled, { css } from 'styled-components'
import { colors, mediaQueries } from '../styles/variables'
import { flex } from '../styles/mixins'
import { useFormContext } from '../utils/customHooks'
import { FORMSTEPSDESCRIPTION } from '../utils/data'
import asideBackground from '../assets/bg-sidebar-desktop.svg'

const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 2.125rem;

  @media ${mediaQueries.temp} {
    flex-direction: column;
    gap: 2rem;
    background: center / cover no-repeat ${colors.fallbackBackground} url(${asideBackground});
    height: 35.5rem;
    width: 17.125rem;
    border-radius: 0.625rem;
    padding: 2.5rem 2rem;
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
  type: 'header' | 'aside'
}

function FormSteps({ type }: Props) {
  const { currentStep } = useFormContext().formData
  const isAside = type === 'aside'

  return (
    <Container as={type}>
      {FORMSTEPSDESCRIPTION.map(({ heading, short }, index) =>
        isAside ? (
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
