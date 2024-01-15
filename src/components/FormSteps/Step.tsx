import styled, { css } from 'styled-components'
import { flex } from '../../styles/mixins'
import { colors } from '../../styles/variables'

const Container = styled.div`
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

function Step({ type, short, index, currentStep }: Props) {
  if (type === 'aside') {
    return (
      <Container>
        <StepIndicator $active={currentStep === index}>{index + 1}</StepIndicator>
        <Text>
          <StepNumber>STEP {index + 1}</StepNumber>
          <StepName>{short}</StepName>
        </Text>
      </Container>
    )
  }
  return <StepIndicator $active={currentStep === index}>{index + 1}</StepIndicator>
}

export default Step

type Props = {
  type: 'header' | 'aside'
  short: string
  index: number
  currentStep: number
}
