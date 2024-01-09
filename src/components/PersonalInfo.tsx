import styled from 'styled-components'
import { flex } from '../styles/mixins'
import { useFormContext } from '../utils/customHooks'
import InputText from './InputText'
import { mediaQueries } from '../styles/variables'

const Container = styled.form`
  ${flex({ direction: 'column' })}
  gap: 1rem;

  @media ${mediaQueries.temp} {
    gap: 1.5rem;
  }
`

function PersonalInfo() {
  const { formData, setName, setEmail, setPhoneNumber } = useFormContext()
  const { name, email, phoneNumber } = formData

  return (
    <Container>
      <InputText
        type="text"
        label="Name"
        setValue={setName}
        value={name}
        placeholder="e.g. Stephen King"
        autofocus
      />
      <InputText
        type="email"
        label="Email Address"
        setValue={setEmail}
        value={email}
        placeholder="e.g. stephenking@lorem.com"
      />
      <InputText
        type="tel"
        label="Phone Number"
        setValue={setPhoneNumber}
        value={phoneNumber}
        placeholder="e.g. +1 234 567 890"
      />
    </Container>
  )
}

export default PersonalInfo
