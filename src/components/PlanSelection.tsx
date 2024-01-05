import styled, { css } from 'styled-components'
import { PLANS } from '../utils/data'
import { flex } from '../styles/mixins'
import { useFormContext } from '../utils/customHooks'
import { colors, mediaQueries } from '../styles/variables'

const Container = styled.div`
  ${flex({ direction: 'column' })}
  gap: .75rem;

  @media ${mediaQueries.temp} {
    flex-direction: row;
    gap: 1.125rem;
  }
`

const RadioContainer = styled.label<{ $selected: boolean }>`
  ${flex({ direction: 'row', align: 'flex-start' })}
  border: 1px solid ${colors.border};
  padding: 1rem;
  padding-left: 1.125rem;
  gap: 0.875rem;
  border-radius: 0.5rem;
  cursor: pointer;
  user-select: none;

  &:hover,
  &:focus {
    border: 1px solid ${colors.secondaryInteractive};
  }

  ${({ $selected }) =>
    $selected &&
    css`
      border: 1px solid ${colors.secondaryInteractive};
      background: ${colors.innerElBg};
    `}

  @media ${mediaQueries.temp} {
    flex-direction: column;
    justify-content: space-between;
    height: 10rem;
    flex: 1;
  }
`

const RadioButton = styled.input`
  display: none;
`

const Logo = styled.img`
  height: 2.5rem;
  aspect-ratio: 1/1;
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

function PlanSelection() {
  const { formData, setInFormData } = useFormContext()
  const { selectedPlan, isYearly } = formData
  const PLANSARR = Object.values(PLANS)

  return (
    <Container>
      {PLANSARR.map(({ name, price, logo }) => (
        <RadioContainer htmlFor={name} key={name} $selected={name === selectedPlan}>
          <RadioButton
            type="radio"
            name="plan"
            id={name}
            checked={name === selectedPlan}
            onChange={(e) => e.target.checked && setInFormData('selectedPlan', name)}
          />
          <Logo src={logo} alt={`${name}'s logo`} />
          <TextContainer>
            <Name>{name}</Name>
            <Price>{isYearly ? `$${price * 10}/yr` : `$${price}/mo`}</Price>
            {isYearly && <Saving>2 months free</Saving>}
          </TextContainer>
        </RadioContainer>
      ))}
    </Container>
  )
}

export default PlanSelection
