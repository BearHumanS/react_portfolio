import { getCount } from '@/lib/api/counterAPI'
import { useEffect, useState } from 'react'
import { Cursor, Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'
import Text from '../common/Text'
import Flex from '../common/Flex'

const VisitorCounter = () => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCount()

      if (!data) return
      setCount(data.count)
    }

    fetchData()
  }, [])

  return (
    <Flex align="center">
      {isVisible && (
        <motion.h1
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 2 }}
          onAnimationComplete={() => setIsVisible(false)}
        >
          <Text typography="t1">H</Text>
        </motion.h1>
      )}
      <motion.div
        initial={{ display: 'none', opacity: 0 }}
        animate={{ display: 'inline', opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        css={textStyles}
      >
        <Typewriter
          words={['방문해주셔서 감사합니다', `${count}번 째 방문자님`]}
          delaySpeed={1000}
          typeSpeed={200}
        />

        <Cursor />
      </motion.div>
      <motion.h1
        initial={{ rotateX: 180 }}
        animate={{ rotateX: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold md:text-9xl"
      >
        <Text typography="t1">!</Text>
      </motion.h1>
    </Flex>
  )
}

const textStyles = css`
  font-size: 32px;
  line-height: 1.35;
`

export default VisitorCounter
