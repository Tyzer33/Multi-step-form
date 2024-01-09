import styled from 'styled-components'
import { colors, mediaQueries } from '../styles/variables'
import { useFormContext } from '../utils/customHooks'
import { FORMSTEPSDESCRIPTION } from '../utils/data'
import asideBackground from '../assets/bg-sidebar-desktop.svg'
import Step from './Step'

const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 2.125rem;

  @media ${mediaQueries.temp} {
    flex-direction: column;
    gap: 2rem;
    background: center / cover no-repeat ${colors.fallbackImgBg} url(${asideBackground});
    height: 35.5rem;
    width: 17.125rem;
    border-radius: 0.625rem;
    padding: 2.5rem 2rem;
  }
`

type Props = {
  type: 'header' | 'aside'
}

function FormSteps({ type }: Props) {
  const { currentStep } = useFormContext().formData

  return (
    <Container as={type}>
      {FORMSTEPSDESCRIPTION.map(({ heading, short }, index) => (
        <Step key={heading} type={type} short={short} index={index} currentStep={currentStep} />
      ))}
    </Container>
  )
}

export default FormSteps
