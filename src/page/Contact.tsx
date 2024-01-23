import Contact from '@/components/contact/Contact'
import styled from '@emotion/styled'

const ContactPage = () => {
  return (
    <ContactContioner id="Contact">
      <Contact />
    </ContactContioner>
  )
}

const ContactContioner = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default ContactPage
