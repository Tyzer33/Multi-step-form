import styled from 'styled-components'
import { flex } from '../styles/mixins'
import { colors, mediaQueries } from '../styles/variables'

const Label = styled.label`
  ${flex({ direction: 'column' })}
  gap: .1875rem;

  /* Fonts */
  font-size: 0.75rem;
  font-weight: 400;
  color: ${colors.secondaryClr};

  @media ${mediaQueries.tabletPortraitUp} {
    gap: 0.5rem;
    font-size: 0.875rem;
  }
`

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${colors.border};
  border-radius: 0.25rem;

  /* Fonts */
  font-size: 0.9375rem;
  font-weight: 500;
  color: ${colors.secondaryClr};

  @media ${mediaQueries.tabletPortraitUp} {
    padding: 0.875rem 0.9375rem;
    font-size: 1rem;
    border-radius: 0.5rem;
  }

  &::placeholder {
    color: ${colors.placeholder};
  }

  &:focus {
    outline: none;
    border-color: ${colors.secondaryInteractive};
  }

  /* Error */
  &:not() {
    border-color: ${colors.error};
  }
`

function InputText({ type, label, setValue, value, placeholder, autofocus = false }: Props) {
  return (
    <Label htmlFor={type}>
      {label}
      <Input
        id={type}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        spellCheck="false"
        autoComplete={type === 'text' ? 'name' : type}
        autoFocus={autofocus}
        required
      />
    </Label>
  )
}

export default InputText

type Props = {
  type: 'text' | 'email' | 'tel'
  label: string
  setValue: (value: string) => void
  value: string
  placeholder: string
  autofocus?: boolean
}
