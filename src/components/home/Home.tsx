import { breakpoints } from '@/styles/breakPoint'
import { colors } from '@/styles/color'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import Flex from '../common/Flex'
import Spacing from '../common/Spacing'
import Text from '../common/Text'

const Home = () => {
  const initialDelay = 1000
  const delayIncrement = 100

  const firstLineTexts = '안녕하세요.'.split('')
  const secondLineTexts = '프론트엔드개발자'.split('')
  const thirdLineTexts = '남기훈입니다.'.split('')
  const firstLineSubtitle = 'Hi'.split('')
  const secondLineSubtitle = 'Front-end Developer'.split('')
  const thirdLineSubtitle = 'Nam Ki Hun'.split('')

  const renderTextLine = (
    koreanTexts: string[],
    englishTexts: string[],
    startIndex: number,
  ) => {
    const maxLength = Math.max(koreanTexts.length, englishTexts.length)
    const elements = []

    for (let i = 0; i < maxLength; i++) {
      const koreanText = koreanTexts[i] || ''
      const englishText = englishTexts[i] || ''

      elements.push(
        <AnimatedDiv
          key={startIndex + i}
          whileHover={{
            scale: 1.05,
            rotateX: 360,
            rotateY: 360,
            cursor: 'pointer',
          }}
          transition={{ duration: 0.7 }}
        >
          <HomeText
            delaySpeed={initialDelay + (startIndex + i) * delayIncrement}
          >
            {[koreanText, englishText]}
          </HomeText>
        </AnimatedDiv>,
      )
    }

    return <Flex justify="center">{elements}</Flex>
  }

  return (
    <Flex direction="column" justify="center" height="100%">
      <Spacing size={20} />
      <Flex direction="column" justify="center">
        <Text typography="t3" bold>
          {renderTextLine(firstLineSubtitle, firstLineTexts, 0)}
          {renderTextLine(
            secondLineSubtitle,
            secondLineTexts,
            firstLineTexts.length,
          )}
          {renderTextLine(
            thirdLineSubtitle,
            thirdLineTexts,
            firstLineTexts.length + secondLineTexts.length,
          )}
        </Text>
      </Flex>
      <Spacing size={50} />
    </Flex>
  )
}

const HomeText = ({
  children,
  delaySpeed,
}: {
  children: string[]
  delaySpeed: number
}) => {
  return (
    <AnimatedText typography="t0">
      <Typewriter words={children} delaySpeed={delaySpeed} typeSpeed={200} />
    </AnimatedText>
  )
}

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const AnimatedText = styled(Text)`
  display: inline-block;
  background: linear-gradient(
    60deg,
    ${colors.yellow},
    ${colors.pink1},
    ${colors.pink2},
    ${colors.puple},
    ${colors.puple2},
    ${colors.green2},
    ${colors.green3},
    ${colors.green4}
  );
  background-size: 200% 200%;
  animation: ${gradientAnimation} 2s ease alternate infinite;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (max-width: ${breakpoints.md}) {
    font-size: 24px;
  }
`

const AnimatedDiv = styled(motion.div)``

export default Home
