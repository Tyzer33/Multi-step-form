import styled from 'styled-components'
import { colors } from '../../../styles/variables'
import { flex } from '../../../styles/mixins'
import { ADDONS } from '../../../utils/data'
import { useFormContext } from '../../../utils/customHooks'
import { AddonsNames } from '../../../utils/types'

// TODO: font: 0.875rem dans body
const Container = styled.div`
  ${flex({ justify: 'space-between', align: 'center' })}
  font-size: 0.875rem;
`

const Price = styled.p`
  color: ${colors.secondaryClr};
`

function AddonPriceLine({ name, price }: Props) {
  const { isYearly } = useFormContext().formData
  const formattedPriceText = isYearly ? `+$${price.yearly}/yr` : `+$${price.monthly}/mo`

  return (
    <Container>
      <p>{name}</p>
      <Price>{formattedPriceText}</Price>
    </Container>
  )
}

export default AddonPriceLine

type Props = {
  name: AddonsNames
  price: (typeof ADDONS)[AddonsNames]['price']
}
