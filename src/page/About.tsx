import About from '@/components/about/About'
import { breakpoints } from '@/styles/breakPoint'
import styled from '@emotion/styled'

const AboutPage = () => {
  return (
    <AboutContainer id="About">
      <About />
    </AboutContainer>
  )
}

const AboutContainer = styled.section`
  position: relative;
  height: 110vh;
  width: 100%;
  overflow-x: hidden;

  @media (min-width: ${breakpoints.md}) {
  }
`

export default AboutPage
