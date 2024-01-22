import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'
import { ITEMS } from '@/lib/constants'
import { css } from '@emotion/react'
import ScrollIndicator from '../ScrollIndicator'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.07, staggerDirection: -1 },
  },
}

const Nav = ({ onClick }: { onClick: () => void }) => (
  <motion.ul variants={variants} css={ulStyles}>
    {ITEMS.map((item) => (
      <ScrollIndicator targetId={item} key={item}>
        <MenuItem onClick={onClick}>{item}</MenuItem>
      </ScrollIndicator>
    ))}
  </motion.ul>
)

const ulStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

export default Nav
