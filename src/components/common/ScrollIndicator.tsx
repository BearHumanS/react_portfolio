import React, { ReactNode } from 'react'

const ScrollIndicator = ({
  targetId,
  children,
}: {
  targetId: string
  children: ReactNode
}) => {
  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId)
    targetElement?.scrollIntoView({ behavior: 'smooth' })
  }
  return <div onClick={scrollToTarget}>{children}</div>
}

export default ScrollIndicator
