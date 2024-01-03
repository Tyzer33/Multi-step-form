import styled from 'styled-components'
import Confirmation from './Confirmation'
import { colors } from '../styles/variables'
import { useFormContext } from '../utils/customHooks'
import Forms from './Forms'

const Wrapper = styled.main`
  flex: 1;
  width: 100%;
`

const Container = styled.div`
  background: ${colors.elementBg};
  border-radius: 0.625rem;
  box-shadow: 0 1rem 1.75rem -1rem hsla(0, 0%, 0%, 0.08);
  padding: 2rem 1.5rem;
  margin: 0 1rem 1.5rem;
`

function MainContent() {
  const { isCompleted } = useFormContext().formData

  return (
    <Wrapper>
      <Container>{!isCompleted ? <Forms /> : <Confirmation />}</Container>
    </Wrapper>
  )
}

export default MainContent
