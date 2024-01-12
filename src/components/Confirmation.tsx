import styled from 'styled-components'
import thankYouIcon from '../assets/icon-thank-you.svg'
import { flex } from '../styles/mixins'
import { colors, mediaQueries } from '../styles/variables'

const Container = styled.div`
  ${flex({ direction: 'column', justify: 'center', align: 'center' })}
  text-align: center;
  margin-block: 2.875rem;
`

const Image = styled.img`
  height: 3.5rem;

  @media ${mediaQueries.tabletPortraitUp} {
    height: 5rem;
  }
`

const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.secondaryClr};
  margin-block: 1.5rem 0.625rem;

  @media ${mediaQueries.tabletPortraitUp} {
    font-size: 2.5rem;
    margin-block: 2rem 1rem;
  }
`

const BodyText = styled.p`
  line-height: 1.5625em;
`

function Confirmation() {
  return (
    <Container>
      <Image src={thankYouIcon} alt="Thank you icon" />
      <Heading>Thank you!</Heading>
      <BodyText>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you
        ever need support, please feel free to email us at support@loremgaming.com.
      </BodyText>
    </Container>
  )
}

export default Confirmation
