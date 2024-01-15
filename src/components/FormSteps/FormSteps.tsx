import styled from 'styled-components'
import { colors, mediaQueries } from '../../styles/variables'
import { useFormContext } from '../../utils/customHooks'
import { FORM_STEPS_DESCRIPTION } from '../../utils/data'
import headerBackground from '../../assets/bg-sidebar-mobile.svg'
import asideBackground from '../../assets/bg-sidebar-desktop.svg'
import Step from './Step'

const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 2.125rem;

  @media ${mediaQueries.tabletPortraitUp} {
    flex-direction: column;
    gap: 2rem;
    background: center / cover no-repeat ${colors.fallbackImgBg} url(${asideBackground});
    height: 35.5rem;
    width: 17.125rem;
    border-radius: 0.625rem;
    padding: 2.5rem 2rem;
    min-width: 14rem;
  }
`

const BackgroundHeader = styled.div`
  position: absolute;
  inset: 0;
  height: 10.75rem;
  z-index: -1;
  background: center bottom / cover no-repeat ${colors.fallbackImgBg} url(${headerBackground});
`

function FormSteps({ type }: Props) {
  const { currentStep } = useFormContext().formData

  return (
    <Container as={type}>
      {type === 'header' && <BackgroundHeader />}
      {FORM_STEPS_DESCRIPTION.map(({ short }, index) => (
        <Step key={short} type={type} short={short} index={index} currentStep={currentStep} />
      ))}
    </Container>
  )
}

export default FormSteps

type Props = {
  type: 'header' | 'aside'
}
