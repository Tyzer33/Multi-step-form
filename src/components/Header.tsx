import styled from 'styled-components'
import FormSteps from './FormSteps'

const Container = styled.header`
  margin: 2rem 2.125rem;
`

function Header() {
  return (
    <Container>
      <FormSteps />
    </Container>
  )
}

export default Header
