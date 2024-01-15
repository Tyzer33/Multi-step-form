import styled, { css } from 'styled-components'
import { useFormContext } from '../../../utils/customHooks'
import { flex } from '../../../styles/mixins'
import { colors, mediaQueries, transition } from '../../../styles/variables'
import { Plan } from '../../../utils/types'

const Container = styled.label<{ $selected: boolean }>`
  ${flex({ direction: 'row', align: 'flex-start' })}
  border: 1px solid ${colors.border};
  padding: 1rem;
  padding-left: 1.125rem;
  gap: 0.875rem;
  border-radius: 0.5rem;
  user-select: none;
  cursor: pointer;
  ${transition}

  &:hover {
    border: 1px solid ${colors.secondaryInteractive};
  }

  ${({ $selected }) =>
    $selected &&
    css`
      border-color: ${colors.secondaryInteractive};
      background: ${colors.innerElBg};
    `}

  @media ${mediaQueries.tabletPortraitUp} {
    flex-direction: column;
    justify-content: space-between;
    height: 10rem;
    flex: 1;
    min-width: 7.25rem;
  }

  @supports selector(:has(:focus-visible)) {
    &:has(:focus-visible) {
      outline: 0.1875rem solid ${colors.secondaryInteractive};
      outline-offset: 0.125rem;
    }
  }
`

const RadioButton = styled.input`
  opacity: 0;
  pointer-events: none;
  position: absolute;
`

const Logo = styled.img`
  height: 2.5rem;
  aspect-ratio: 1;
`

const TextContainer = styled.div`
  ${flex({ direction: 'column' })}
  gap: .375rem;
`

const Name = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.secondaryClr};
`

const Price = styled.p`
  font-size: 0.875rem;
`

const Saving = styled.p`
  font-size: 0.75rem;
  color: ${colors.secondaryClr};
  margin-top: 0.125rem;
`

function PlanCard({ name, price, logo, autoFocus = false }: Props) {
  const { formData, setInFormData } = useFormContext()
  const { selectedPlan, isYearly } = formData

  return (
    <Container htmlFor={name} $selected={name === selectedPlan}>
      <RadioButton
        type="radio"
        name="plan"
        id={name}
        checked={name === selectedPlan}
        onChange={(e) => e.target.checked && setInFormData('selectedPlan', name)}
        autoFocus={autoFocus}
      />
      <Logo src={logo} alt={`${name}'s icon`} />
      <TextContainer>
        <Name>{name}</Name>
        <Price>{isYearly ? `$${price.yearly}/yr` : `$${price.monthly}/mo`}</Price>
        {isYearly && <Saving>2 months free</Saving>}
      </TextContainer>
    </Container>
  )
}

export default PlanCard

type Props = {
  name: Plan
  price: { monthly: number; yearly: number }
  logo: string
  autoFocus?: boolean
}
