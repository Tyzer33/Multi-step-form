import styled from 'styled-components'
import { expandClickArea, flex } from '../styles/mixins'
import PlanSelection from './PlanSelection'
import { useFormContext } from '../utils/customHooks'
import { colors, mediaQueries } from '../styles/variables'

const Container = styled.form`
  ${flex({ direction: 'column' })}
  gap: 1.5rem;

  @media ${mediaQueries.temp} {
    gap: 2rem;
  }
`

const SwitchContainer = styled.div`
  ${flex({ direction: 'row', justify: 'center', align: 'center' })}
  gap: 1.5rem;
  background: ${colors.innerElBg};
  border-radius: 0.625rem;
  height: 3rem;
`

const SwitchBtn = styled.label<{ $checked: boolean }>`
  height: 1.25rem;
  width: 2.375rem;
  background: ${colors.primaryInteractive};
  ${flex({ align: 'center' })}
  justify-content: ${({ $checked }) => ($checked ? 'flex-end' : 'flex-start')};
  padding: 0.25rem;
  border-radius: 0.625rem;
  cursor: pointer;

  &::after {
    content: '';
    height: 100%;
    aspect-ratio: 1/1;
    background: ${colors.tertiaryClr};
    border-radius: 50%;
  }

  @supports selector(:has(:focus-visible)) {
    &:has(:focus-visible) {
      outline: 0.125rem solid ${colors.primaryInteractive};
      outline-offset: 0.125rem;
    }
  }
`

const SwitchTextBtn = styled.button<{ $selected: boolean }>`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ $selected }) => ($selected ? colors.secondaryClr : colors.text)};
  ${expandClickArea('0.75em')}

  &:hover, &:focus-visible {
    color: ${colors.primaryInteractive};
  }

  &:focus-visible {
    translate: 0 -0.25rem;
  }
`

const Checkbox = styled.input`
  opacity: 0;
  position: absolute;
  pointer-events: none;
`

function SelectPlan() {
  const { formData, setInFormData } = useFormContext()
  const { isYearly } = formData

  return (
    <Container>
      <PlanSelection />
      <SwitchContainer>
        <SwitchTextBtn
          type="button"
          onClick={() => setInFormData('isYearly', false)}
          $selected={!isYearly}
        >
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
        <SwitchTextBtn
          type="button"
          onClick={() => setInFormData('isYearly', true)}
          $selected={isYearly}
        >
          Yearly
        </SwitchTextBtn>
      </SwitchContainer>
    </Container>
  )
}

export default SelectPlan
