import styled, { css } from 'styled-components'
import { flex } from '../styles/mixins'
import { colors, mediaQueries, transition } from '../styles/variables'
import { ADDONS } from '../utils/data'
import { useFormContext } from '../utils/customHooks'
import checkedIcon from '../assets/icon-checkmark.svg'

const Container = styled.form`
  ${flex({ direction: 'column' })}
  gap: .75rem;

  @media ${mediaQueries.temp} {
    gap: 1rem;
  }
`

const CheckboxContainer = styled.label<{ $selected: boolean }>`
  ${flex({ direction: 'row', align: 'center' })}
  border: 1px solid ${colors.border};
  padding: 0.875rem 1rem;
  gap: 0.875rem;
  border-radius: 0.5rem;
  cursor: pointer;
  user-select: none;
  ${transition}

  &:hover {
    border: 1px solid ${colors.secondaryInteractive};
  }

  ${({ $selected }) =>
    $selected &&
    css`
      border: 1px solid ${colors.secondaryInteractive};
      background: ${colors.innerElBg};
    `}

  @media ${mediaQueries.temp} {
    gap: 1.5rem;
    padding: 1.25rem 1.5rem;
  }

  @supports selector(:has(:focus-visible)) {
    &:has(:focus-visible) {
      border: 1px solid ${colors.secondaryInteractive};
      scale: 0.975;
    }
  }
`

const StyledCheckbox = styled.div<{ $selected: boolean }>`
  ${flex({ align: 'center', justify: 'center' })}
  height: 1.25rem;
  aspect-ratio: 1/1;
  border-radius: 0.25rem;
  border: 1px solid ${colors.border};

  ${({ $selected }) =>
    $selected &&
    css`
      background: ${colors.secondaryInteractive};
      border: none;

      &::after {
        content: url(${checkedIcon});
      }
    `}
`

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`

const InfosContainer = styled.div`
  ${flex({ direction: 'column' })}
  gap: .25rem;
  flex: 1;
`

const Name = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${colors.secondaryClr};

  @media ${mediaQueries.temp} {
    font-size: 1rem;
  }
`

const Description = styled.p`
  font-size: 0.75rem;

  @media ${mediaQueries.temp} {
    font-size: 0.9375rem;
  }
`

const Price = styled.p`
  font-size: 0.75rem;
  color: ${colors.secondaryInteractive};

  @media ${mediaQueries.temp} {
    font-size: 0.9375rem;
  }
`

function PickAddOns() {
  const { formData, toggleAddon } = useFormContext()
  const { selectedAddons, isYearly } = formData
  const ADDONSARR = Object.values(ADDONS)

  return (
    <Container>
      {ADDONSARR.map(({ name, description, price }, index) => (
        <CheckboxContainer htmlFor={name} key={name} $selected={selectedAddons.includes(name)}>
          <StyledCheckbox $selected={selectedAddons.includes(name)}>
            <Checkbox
              type="checkbox"
              name="plan"
              id={name}
              checked={selectedAddons.includes(name)}
              onChange={() => toggleAddon(name)}
              autoFocus={index === 0}
            />
          </StyledCheckbox>
          <InfosContainer>
            <Name>{name}</Name>
            <Description>{description}</Description>
          </InfosContainer>
          <Price>{isYearly ? `+$${price.yearly}/yr` : `+$${price.monthly}/mo`}</Price>
        </CheckboxContainer>
      ))}
    </Container>
  )
}

export default PickAddOns
