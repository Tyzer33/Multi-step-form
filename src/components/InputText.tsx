import styled from 'styled-components'
import { flex } from '../styles/mixins'
import { colors } from '../styles/variables'

const Label = styled.label`
  ${flex({ direction: 'column' })}
  gap: .1875rem;

  /* Fonts */
  font-size: 0.75rem;
  font-weight: 500;
  color: ${colors.secondaryClr};
`

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${colors.border};
  border-radius: 0.25rem;

  /* Fonts */
  font-size: 0.9375rem;
  font-weight: 500;
  color: ${colors.secondaryClr};

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

type Props = {
  type: 'text' | 'email' | 'tel'
  label: string
  setValue: (value: string) => void
  value: string
  placeholder: string
  autofocus?: boolean
}

function InputText({ type, label, setValue, value, placeholder, autofocus = false }: Props) {
  return (
    <Label htmlFor={type}>
      {label}
      <Input
        type={type}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={placeholder}
        spellCheck="false"
        id={type}
        autoComplete={type === 'text' ? 'name' : type}
        required
        autoFocus={autofocus}
      />
    </Label>
  )
}

export default InputText
