import styled from 'styled-components'
import { flex } from '../../../styles/mixins'
import { mediaQueries } from '../../../styles/variables'
import { ADDONS } from '../../../utils/data'
import Addon from './Addon'

const Container = styled.form`
  ${flex({ direction: 'column' })}
  gap: .75rem;

  @media ${mediaQueries.tabletPortraitUp} {
    gap: 1rem;
  }
`

function PickAddOns() {
  const ADDONSARR = Object.values(ADDONS)

  return (
    <Container>
      {ADDONSARR.map(({ name, description, price }, index) => (
        <Addon
          key={name}
          name={name}
          description={description}
          price={price}
          autoFocus={index === 0}
        />
      ))}
    </Container>
  )
}

export default PickAddOns
