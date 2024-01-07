import { breakpoints } from '@/styles/breakPoint'
import styled from '@emotion/styled'
import About from './About'
import ContactPage from './Contact'
import Footer from './Footer'
import Header from './Header'
import HomePage from './Home'
import Project from './Project'

const MainPage = () => {
  return (
    <MainContainer>
      <Header />
      <HomePage />
      <About />
      <Project />
      <ContactPage />
      <Footer />
    </MainContainer>
  )
}

const MainContainer = styled.main`
  position: relative;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.md}) {
    width: 80%;
  }
`

export default MainPage
