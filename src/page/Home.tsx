import VisitorCounter from '@components/visitorCounter/VisitorCounter'
import styled from '@emotion/styled'
import Home from '@/components/home/Home'

const HomePage = () => {
  return (
    <Container id="Home">
      <Home />
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
  top: -70px;
`

export default HomePage
