import styled from 'styled-components'
import { colors } from '../../../styles/variables'
import { flex } from '../../../styles/mixins'
import { ADDONS } from '../../../utils/data'
import { useFormContext } from '../../../utils/customHooks'
import { AddonsNames } from '../../../utils/types'

const Container = styled.div`
  ${flex({ justify: 'space-between', align: 'center' })}
`

const AddonName = styled.p`
  font-size: 0.875rem;
`

const AddonPrice = styled.p`
  font-size: 0.875rem;
  color: ${colors.secondaryClr};
`

function AddonPriceLine({ name, price }: Props) {
  const { isYearly } = useFormContext().formData
  const formattedPriceText = isYearly ? `+$${price.yearly}/yr` : `+$${price.monthly}/mo`

  return (
    <Container>
      <AddonName>{name}</AddonName>
      <AddonPrice>{formattedPriceText}</AddonPrice>
    </Container>
  )
}

export default AddonPriceLine

type Props = {
  name: AddonsNames
  price: (typeof ADDONS)[AddonsNames]['price']
}
