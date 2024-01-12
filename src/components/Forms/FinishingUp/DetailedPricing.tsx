import styled from 'styled-components'
import { flex } from '../../../styles/mixins'
import { colors, mediaQueries } from '../../../styles/variables'
import { useFormContext } from '../../../utils/customHooks'
import PlanPriceLine from './PlanPriceLine'
import AddonPriceLine from './AddonPriceLine'
import { ADDONS } from '../../../utils/data'

const Container = styled.div`
  ${flex({ direction: 'column' })}
  gap: 1rem;
  padding: 1rem;
  background: ${colors.innerElBg};
  border-radius: 0.5rem;

  @media ${mediaQueries.tabletPortraitUp} {
    padding: 1.5rem;
    padding-top: 1.25rem;
    gap: 1.25rem;
  }
`

const Line = styled.hr`
  border: none;
  height: 1px;
  background: ${colors.border};

  @media ${mediaQueries.tabletPortraitUp} {
    margin-top: 0.25rem;
  }
`

function DetailedPricing() {
  const { selectedAddons } = useFormContext().formData

  const detailedSelectedAddons = selectedAddons.map((selectedAddon) => ADDONS[selectedAddon])

  return (
    <Container>
      <PlanPriceLine />
      {selectedAddons.length > 0 && <Line />}
      {detailedSelectedAddons.map(({ name, price }) => (
        <AddonPriceLine key={name} name={name} price={price} />
      ))}
    </Container>
  )
}

export default DetailedPricing
