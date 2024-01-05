import styled from 'styled-components'
import Confirmation from './Confirmation'
import { colors, mediaQueries } from '../styles/variables'
import { useFormContext, useMediaQuery } from '../utils/customHooks'
import Forms from './Forms'
import { flex } from '../styles/mixins'
import FormSteps from './FormSteps'
import NavigationButtons from './NavigationButtons'
import asideBackground from '../assets/bg-sidebar-desktop.svg'

const Wrapper = styled.main`
  flex: 1;
  width: 100%;
  ${flex({ direction: 'column', align: 'center' })}
`

const Container = styled.div`
  background: ${colors.elementBg};
  border-radius: 0.625rem;
  box-shadow: 0 1rem 1.75rem -1rem hsla(0, 0%, 0%, 0.08);
  padding: 2rem 1.5rem;
  margin: 0 1rem 1.5rem;
  max-width: 30rem;
  width: 100%;

  @media ${mediaQueries.temp} {
    display: flex;
    padding: 1rem;
    padding-right: 6.25rem;
    max-width: 58.75rem;
    gap: 6.25rem;

    margin: 2rem; //temp
  }
`

const Sidebar = styled.aside`
  background: center / cover no-repeat ${colors.fallbackBackground} url(${asideBackground});
  height: 35.5rem;
  width: 17.125rem;
  border-radius: 0.625rem;
  padding: 2.5rem 2rem;
`

// TODO: Trouver un nom plus explicite
const Temp = styled.div`
  ${flex({ direction: 'column', justify: 'center' })}
  flex: 1;
  margin-block: 2.5rem 1rem;
`

function MainContent() {
  const { isCompleted } = useFormContext().formData
  const isTemp = useMediaQuery(mediaQueries.temp) // temp

  if (isTemp) {
    return (
      <Container>
        <Sidebar>
          <FormSteps alternative />
        </Sidebar>
        <Temp>
          {!isCompleted ? <Forms /> : <Confirmation />}
          {!isCompleted && <NavigationButtons />}
        </Temp>
      </Container>
    )
  }

  return (
    <Wrapper>
      <Container>{!isCompleted ? <Forms /> : <Confirmation />}</Container>
    </Wrapper>
  )
}

export default MainContent
