import { breakpoints } from '@/styles/breakPoint'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Cursor } from 'react-simple-typewriter'
import DivisionLine from '../common/DivisionLine'
import Flex from '../common/Flex'
import Spacing from '../common/Spacing'
import Text from '../common/Text'
import AnimatedCardComponent from './AnimatedCard'
import { aboutData } from '@/lib/about'
import AboutDataRender from './AboutDataRender'
import { typographyTable } from '@/styles/typography'

const About = () => {
  return (
    <AboutFlex align="center" justify="center" height="100%" width="100%">
      <Flex>
        <AnimatedCardComponent />
      </Flex>
      <Spacing size={50} direction="horizontal" />
      <Flex direction="column">
        <motion.div>
          <Spacing size={20} />
          <Text typography="t2" fontWeight={550} css={AboutTitle}>
            안녕하세요. 늦깎이 개발자, 남기훈입니다.
            <Cursor />
          </Text>
        </motion.div>
        <DivisionLine />
        <motion.div>
          {aboutData.map((data) => (
            <div key={data.title}>
              <Spacing size={30} />
              <AboutDataRender data={data} />
              <DivisionLine />
            </div>
          ))}
        </motion.div>
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
    ${typographyTable.t4}
  }
`

export default About
