import { colors } from '@/styles/color'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const IconGithub = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const animationDuration = 4
  const variants = {
    initial: { pathLength: 0, strokeOpacity: 1, fillOpacity: 0 },
    animate: {
      pathLength: 1,
      strokeOpacity: 0,
      fillOpacity: 1,
      transition: {
        duration: animationDuration,
        ease: 'easeInOut',
        strokeOpacity: {
          delay: animationDuration,
        },
        fillOpacity: {
          delay: animationDuration,
        },
      },
    },
  }
  return (
    <svg viewBox="0 0 16 16" width="25" height="25" ref={ref}>
      <motion.path
        d="M8,0C3.6,0,0,3.6,0,8c0,3.526,2.315,6.534,5.498,7.591c0.377,0.055,0.52-0.179,0.52-0.385c0-0.19-0.007-0.693-0.011-1.361	c-2.225,0.483-2.695-1.072-2.695-1.072c-0.364-0.924-0.888-1.17-0.888-1.17c-0.726-0.496,0.055-0.486,0.055-0.486	c0.803,0.057,1.225,0.824,1.225,0.824c0.714,1.223,1.872,0.87,2.328,0.665c0.073-0.517,0.279-0.87,0.508-1.069	c-1.776-0.202-3.644-0.888-3.644-3.954c0-0.873,0.312-1.587,0.823-2.147C3.637,5.233,3.362,4.419,3.798,3.318	c0,0,0.672-0.215,2.2,0.82C6.636,3.961,7.32,3.872,8,3.869c0.679,0.003,1.364,0.092,2.003,0.269c1.527-1.035,2.198-0.82,2.198-0.82	c0.436,1.101,0.162,1.915,0.08,2.117c0.513,0.559,0.822,1.273,0.822,2.147c0,3.073-1.87,3.75-3.653,3.948	c0.287,0.247,0.543,0.735,0.543,1.482c0,1.07-0.01,1.932-0.01,2.195c0,0.208,0.141,0.443,0.521,0.385C13.686,14.532,16,11.526,16,8	C16,3.6,12.4,0,8,0z"
        stroke={colors.green3}
        strokeWidth="0.5"
        variants={variants}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
      />
    </svg>
  )
}

export default IconGithub
