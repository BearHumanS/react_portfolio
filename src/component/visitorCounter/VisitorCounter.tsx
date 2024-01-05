import { getCount } from '@/lib/api/counterAPI'
import { useEffect, useState } from 'react'
import { Cursor, Typewriter } from 'react-simple-typewriter'

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
    <div>
      <Typewriter
        words={['총 방문자수', `${count}명`]}
        delaySpeed={1000}
        typeSpeed={200}
      />
      <Cursor />
    </div>
  )
}

export default VisitorCounter
