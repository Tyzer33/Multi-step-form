import styled from 'styled-components'
import { colors } from '../styles/variables'
import { flex } from '../styles/mixins'

const Form = styled.form`
  ${flex({ direction: 'column' })}
  gap: 1rem;
`

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
`

function PersonalInfo() {
  return (
    <Form>
      <Label htmlFor="name">
        Name
        <Input type="text" id="name" placeholder="e.g. Stephen King" />
      </Label>
      <Label htmlFor="email">
        Email Address
        <Input type="email" id="email" placeholder="e.g. stephenking@lorem.com" />
      </Label>
      <Label htmlFor="phone">
        Phone Number
        <Input type="tel" id="phone" placeholder="e.g. +1 234 567 890" />
      </Label>
    </Form>
  )
}

export default PersonalInfo
