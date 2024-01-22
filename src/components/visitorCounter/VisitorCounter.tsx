import { getCount } from '@/lib/api/counterAPI'
import { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { css } from '@emotion/react'
import Text from '../common/Text'
import Flex from '../common/Flex'

const VisitorCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCount()

      if (!data) return
      setCount(data.count)
    }

    fetchData()
  }, [])

  return (
    <Flex align="center" justify="center" css={flexStyles}>
      <Text typography="t5">
        <Typewriter
          words={['', `방문자 수:   ${count}`]}
          delaySpeed={1000}
          typeSpeed={200}
        />
      </Text>
    </Flex>
  )
}

const flexStyles = css`
  position: absolute;
  bottom: 80px;
`

export default VisitorCounter
