import * as React from 'react'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const MenuItem = ({
  children,
  onClick,
}: {
  children: ReactNode
  onClick?: () => void
}) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <span>{children}</span>
    </motion.li>
  )
}
