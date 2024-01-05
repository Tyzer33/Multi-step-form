import styled from 'styled-components'
import { flex } from '../styles/mixins'
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

// TODO: ajouter Animation
const SwitchButton = styled.label<{ $checked: boolean }>`
  height: 1.25rem;
  width: 2.375rem;
  background: ${colors.primaryInteractive};
  ${flex({ align: 'center' })}
  justify-content: ${({ $checked }) => ($checked ? 'flex-end' : 'flex-start')};
  padding: 0.25rem;
  border-radius: 1.25rem;
  cursor: pointer;

  &::after {
    content: '';
    height: 100%;
    aspect-ratio: 1/1;
    background: ${colors.tertiaryClr};
    border-radius: 50%;
  }
`

const SwitchText = styled.span<{ $selected: boolean }>`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ $selected }) => ($selected ? colors.secondaryClr : colors.text)};
`

const Checkbox = styled.input`
  display: none;
`

// TODO: Rendre SwitchText cliquable
function SelectPlan() {
  const { formData, setInFormData } = useFormContext()
  const { isYearly } = formData

  return (
    <Container>
      <PlanSelection />
      <SwitchContainer>
        <SwitchText $selected={!isYearly}>Monthly</SwitchText>
        <SwitchButton htmlFor="switch" $checked={isYearly}>
          <Checkbox
            id="switch"
            type="checkbox"
            checked={isYearly}
            onChange={(e) => setInFormData('isYearly', e.target.checked)}
            aria-label="Switch between Monthly to yearly plan"
          />
        </SwitchButton>
        <SwitchText $selected={isYearly}>Yearly</SwitchText>
      </SwitchContainer>
    </Container>
  )
}

export default SelectPlan
