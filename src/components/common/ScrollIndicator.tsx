import React, { ReactNode } from 'react'

const ScrollIndicator = ({
  targetId,
  children,
  setActiveTab,
}: {
  targetId: string
  children: ReactNode
  setActiveTab: (value: string) => void
}) => {
  const scrollToTarget = () => {
    setActiveTab(targetId)
    const targetElement = document.getElementById(targetId)
    targetElement?.scrollIntoView({ behavior: 'smooth' })
  }
  return <div onClick={scrollToTarget}>{children}</div>
}

export default ScrollIndicator
