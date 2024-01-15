import styled from 'styled-components'
import { flex } from '../../../styles/mixins'
import { useFormContext } from '../../../utils/customHooks'
import InputText from './InputText'
import { mediaQueries } from '../../../styles/variables'

const Container = styled.fieldset`
  ${flex({ direction: 'column' })}
  gap: 1rem;

  @media ${mediaQueries.tabletPortraitUp} {
    gap: 1.5rem;
  }
`

function PersonalInfo() {
  const { formData, setInFormData } = useFormContext()
  const { name, email, phoneNumber } = formData

  return (
    <Container>
      <InputText
        type="text"
        label="Name"
        setValue={(value) => setInFormData('name', value)}
        value={name}
        placeholder="e.g. Stephen King"
        autofocus
      />
      <InputText
        type="email"
        label="Email Address"
        setValue={(value) => setInFormData('email', value)}
        value={email}
        placeholder="e.g. stephenking@lorem.com"
      />
      <InputText
        type="tel"
        label="Phone Number"
        setValue={(value) => setInFormData('phoneNumber', value)}
        value={phoneNumber}
        placeholder="e.g. +1 234 567 890"
      />
    </Container>
  )
}

export default PersonalInfo
