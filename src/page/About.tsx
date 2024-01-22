import About from '@/components/about/About'
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
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`

export default AboutPage
