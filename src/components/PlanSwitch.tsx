import styled from 'styled-components'
import { expandClickArea, flex } from '../styles/mixins'
import { colors, transition } from '../styles/variables'
import { useFormContext } from '../utils/customHooks'
import Button from './Button'

const Container = styled.div`
  ${flex({ direction: 'row', justify: 'center', align: 'center' })}
  gap: 1.5rem;
  background: ${colors.innerElBg};
  border-radius: 0.625rem;
  height: 3rem;
`

const SwitchTextBtn = styled(Button)<{ $selected: boolean }>`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ $selected }) => ($selected ? colors.secondaryClr : colors.text)};
  ${expandClickArea('0.75em')}
  ${transition}


  &:hover, &:focus-visible {
    color: ${colors.primaryInteractive};
  }

  &:focus-visible {
    translate: 0 -0.25rem;
  }
`

const SwitchBtn = styled.label<{ $checked: boolean }>`
  height: 1.25rem;
  width: 2.375rem;
  background: ${colors.primaryInteractive};
  ${flex({ align: 'center' })}
  border-radius: 0.625rem;
  cursor: pointer;
  padding: 0.25rem;
  ${transition}

  &::after {
    content: '';
    height: 100%;
    aspect-ratio: 1/1;
    background: ${colors.tertiaryClr};
    border-radius: 50%;

    // TODO: Trouver une meilleure façon de faire l'animation
    margin-left: ${({ $checked }) => ($checked ? '100%' : '0')};
    translate: ${({ $checked }) => ($checked ? '-100%' : '0')} 0;
    ${transition}
  }

  @supports selector(:has(:focus-visible)) {
    &:has(:focus-visible) {
      outline: 0.125rem solid ${colors.primaryInteractive};
      outline-offset: 0.125rem;
    }
  }
`

const Checkbox = styled.input`
  opacity: 0;
  position: absolute;
  pointer-events: none;
`

function PlanSwitch() {
  const { formData, setInFormData } = useFormContext()
  const { isYearly } = formData

  return (
    <Container>
      <SwitchTextBtn onClick={() => setInFormData('isYearly', false)} $selected={!isYearly}>
        Monthly
      </SwitchTextBtn>
      <SwitchBtn htmlFor="switch" $checked={isYearly}>
        <Checkbox
          id="switch"
          type="checkbox"
          checked={isYearly}
          onChange={(e) => setInFormData('isYearly', e.target.checked)}
          aria-label="Switch between Monthly to yearly plan"
        />
      </SwitchBtn>
      <SwitchTextBtn onClick={() => setInFormData('isYearly', true)} $selected={isYearly}>
        Yearly
      </SwitchTextBtn>
    </Container>
  )
}

export default PlanSwitch
