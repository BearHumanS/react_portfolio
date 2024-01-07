import { breakpoints } from '@styles/breakPoint'
import VisitorCounter from '@components/visitorCounter/VisitorCounter'
import styled from '@emotion/styled'

const HomePage = () => {
  return (
    <Container id="Home">
      <div>HomePage</div>
      <VisitorCounter />
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;

  @media (min-width: ${breakpoints.sm}) {
    max-width: 640px;
  }
  @media (min-width: ${breakpoints.md}) {
    max-width: 768px;
  }
  @media (min-width: ${breakpoints.lg}) {
    max-width: 1024px;
  }
  @media (min-width: ${breakpoints.xl}) {
    max-width: 1280px;
  }
  @media (min-width: ${breakpoints['2xl']}) {
    max-width: 1536px;
  }
`

export default HomePage
