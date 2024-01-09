import { breakpoints } from '@/styles/breakPoint'
import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Cursor } from 'react-simple-typewriter'
import DivisionLine from '../common/DivisionLine'
import Flex from '../common/Flex'
import Spacing from '../common/Spacing'
import Text from '../common/Text'
import AnimatedCardComponent from './AnimatedCard'

const About = () => {
  return (
    <AboutFlex align="center" justify="center" height="100%" width="100%">
      <Flex>
        <AnimatedCardComponent />
      </Flex>
      <Spacing size={50} direction="horizontal" />
      <Flex direction="column">
        <motion.div css={AboutTitle}>
          <Text typography="t2" fontWeight={550}>
            안녕하세요. 늦깎이 개발자, 남기훈입니다.
            <Cursor />
          </Text>
        </motion.div>
        <DivisionLine />
      </Flex>
    </AboutFlex>
  )
}

const AboutFlex = styled(Flex)`
  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`

const AboutTitle = css`
  @media (max-width: ${breakpoints.md}) {
    margin-top: 20px;
  }
`

export default About
