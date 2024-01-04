import styled from 'styled-components'
import { colors } from '../styles/variables'
import { flex } from '../styles/mixins'
import { useFormContext } from '../utils/customHooks'

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
  const { formData, setName, setEmail, setPhoneNumber } = useFormContext()
  const { name, email, phoneNumber } = formData

  return (
    <Form>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="e.g. Stephen King"
        />
      </Label>
      <Label htmlFor="email">
        Email Address
        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="e.g. stephenking@lorem.com"
        />
      </Label>
      <Label htmlFor="phone">
        Phone Number
        <Input
          type="tel"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          placeholder="e.g. +1 234 567 890"
        />
      </Label>
    </Form>
  )
}

export default PersonalInfo
