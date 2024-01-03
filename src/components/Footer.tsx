import styled from 'styled-components'
import NavigationButtons from './NavigationButtons'
import { colors } from '../styles/variables'

// TODO: Peut-être rendre le footer fixed

const Container = styled.footer`
  width: 100%;
  background: ${colors.elementBg};
  padding: 1rem;
  box-shadow: 0 0 1rem 0 hsla(0, 0%, 0%, 0.025);
`

function Footer() {
  return (
    <Container>
      <NavigationButtons />
    </Container>
  )
}

export default Footer
