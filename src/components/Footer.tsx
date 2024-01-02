import styled from 'styled-components'
import NavigationButtons from './NavigationButtons'
import { colors } from '../styles/variables'

const Container = styled.footer`
  width: 100%;
  background: ${colors.elementBg};
  padding: 1rem;
`

function Footer() {
  return (
    <Container>
      <NavigationButtons />
    </Container>
  )
}

export default Footer
