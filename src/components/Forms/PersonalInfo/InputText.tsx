import styled, { css } from 'styled-components'
import { useState } from 'react'
import { flex } from '../../../styles/mixins'
import { colors, mediaQueries } from '../../../styles/variables'

const Container = styled.label`
  ${flex({ direction: 'column' })}
  gap: .1875rem;

  @media ${mediaQueries.tabletPortraitUp} {
    gap: 0.5rem;
  }
`

const TextContainer = styled.div`
  ${flex({ justify: 'space-between' })}
  font-size: 0.75rem;
  font-weight: 400;

  @media ${mediaQueries.tabletPortraitUp} {
    font-size: 0.875rem;
  }
`

const Label = styled.label`
  color: ${colors.secondaryClr};
`

const ErrorMessage = styled.p`
  color: ${colors.error};
  font-weight: 600;
`

const Input = styled.input<{ $isError: boolean }>`
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

  ${({ $isError }) =>
    $isError &&
    css`
      border-color: ${colors.error};

      &:focus {
        border-color: ${colors.error};
      }
    `}
`

function InputText({ type, label, setValue, value, placeholder, autofocus = false }: Props) {
  const [error, setError] = useState('')

  function setErrorMessage(errors: ValidityState) {
    if (errors.valid) {
      setError('')
    } else if (errors.valueMissing) {
      setError('This field is required')
    } else {
      setError('This field is invalid')
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { target } = e
    setValue(target.value)
    if (error !== '') {
      setErrorMessage(target.validity)
    }
  }

  function handleError(e: React.FormEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement
    e.preventDefault()
    setErrorMessage(target.validity)
  }

  return (
    <Container>
      <TextContainer>
        <Label htmlFor={type}>{label}</Label>
        {error !== '' && <ErrorMessage>{error}</ErrorMessage>}
      </TextContainer>
      <Input
        id={type}
        type={type}
        value={value}
        placeholder={placeholder}
        spellCheck="false"
        autoComplete={type === 'text' ? 'name' : type}
        autoFocus={autofocus}
        onChange={(e) => handleChange(e)}
        onInvalid={(e) => handleError(e)}
        onBlur={(e) => handleError(e)}
        $isError={error !== ''}
        required
        pattern={type === 'tel' ? '^[0-9]{10}$' : undefined}
      />
    </Container>
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
