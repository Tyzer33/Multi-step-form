import styled from 'styled-components'
import Confirmation from './Confirmation'
import { colors, mediaQueries } from '../styles/variables'
import { useFormContext, useMediaQuery } from '../utils/customHooks'
import Forms from './Forms/Forms'
import { flex } from '../styles/mixins'
import FormSteps from './FormSteps/FormSteps'
import NavigationButtons from './NavigationButtons'

const Wrapper = styled.main`
  flex: 1;
  width: 100%;
  ${flex({ direction: 'column', align: 'center' })}
`

const Container = styled.div`
  --margin-inline: 1rem;
  background: ${colors.elementBg};
  border-radius: 0.625rem;
  box-shadow: 0 1rem 1.75rem -1rem hsla(0, 0%, 0%, 0.08);
  padding: 2rem 1.5rem;
  margin-bottom: 1.5rem;
  max-width: 30rem;
  width: calc(100% - var(--margin-inline) * 2);

  @media ${mediaQueries.tabletPortraitUp} {
    --margin-inline: 2rem;
    display: flex;
    padding: 1rem;
    padding-right: min(10%, 6.25rem);
    max-width: 58.75rem;
    gap: min(7%, 6.25rem);
    margin-block: 3rem;
  }
`

const MainForm = styled.div`
  ${flex({ direction: 'column', justify: 'center' })}
  flex: 1;
  margin-block: 2.5rem 1rem;
  min-width: 23.5rem;
`

function MainContent() {
  const { isCompleted } = useFormContext().formData
  const isTabletPortraitUp = useMediaQuery(mediaQueries.tabletPortraitUp)

  if (isTabletPortraitUp) {
    return (
      <Container>
        <FormSteps type="aside" />
        <MainForm>
          {!isCompleted ? <Forms /> : <Confirmation />}
          {!isCompleted && <NavigationButtons />}
        </MainForm>
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
