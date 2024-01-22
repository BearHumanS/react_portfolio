import Flex from '@/components/common/Flex'
import Text from '@/components/common/Text'
import styled from '@emotion/styled'

const Footer = () => {
  return (
    <StyleFooter align="center">
      <Text typography="t7" bold>
        © 2024 KiHun Nam. All Rights Reserved.
      </Text>
    </StyleFooter>
  )
}

const StyleFooter = styled(Flex)`
  position: relative;
  height: 50px;
`

export default Footer
