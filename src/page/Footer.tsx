import Flex from '@/components/common/Flex'
import Text from '@/components/common/Text'

import styled from '@emotion/styled'

const Footer = () => {
  return (
    <FooterContainer>
      <Flex align="center">
        <Text typography="t6" bold>
          © 2024 KiHun Nam. All Rights Reserved.
        </Text>
      </Flex>
    </FooterContainer>
  )
}

const FooterContainer = styled.section`
  position: relative;
  bottom: 40px;
`

export default Footer
