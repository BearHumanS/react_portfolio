import { MouseEvent, useRef } from 'react'
import styled from '@emotion/styled'
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { breakpoints } from '@/styles/breakPoint'

const AnimatedCardComponent = () => {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-1, 1], [-30, 30])
  const rotateY = useTransform(x, [-1, 1], [-30, 30])

  const controls = useAnimation()

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      const offsetX = e.clientX - rect.left - rect.width / 2
      const offsetY = e.clientY - rect.top - rect.height / 2

      const xPercent = offsetX / (rect.width / 2)
      const yPercent = offsetY / (rect.height / 2)

      x.set(xPercent)
      y.set(yPercent)
    }
  }
  const handleMouseLeave = () => {
    controls.start({
      rotateX: 0,
      rotateY: 0,
    })
  }

  return (
    <AnimatedCardContainer
      ref={cardRef}
      initial={{ opacity: 0, x: '-50%' }}
      transition={{ delay: 0.5 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { type: 'spring', bounce: 0.4, duration: 3 },
      }}
      viewport={{ amount: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatedCard
        style={{
          rotateX,
          rotateY,
        }}
        initial={{ rotateX: 0, rotateY: 0 }}
        animate={controls}
      >
        <img src="/mycard.png" alt="카드" draggable="false" />
      </AnimatedCard>
    </AnimatedCardContainer>
  )
}

const AnimatedCardContainer = styled(motion.div)`
  position: relative;
  perspective: 1000px;
`

const AnimatedCard = styled(motion.div)`
  width: 428px;
  height: 591px;

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.xl}) {
    width: 321px;
    height: 443px;

    img {
      width: 321px;
      height: 443px;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    width: 214px;
    height: 296px;

    img {
      width: 214px;
      height: 296px;
    }
  }
`

export default AnimatedCardComponent
