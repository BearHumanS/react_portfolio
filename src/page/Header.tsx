import Flex from '@components/common/Flex'
import { MenuButton } from '@common/navbar/MenuButton'
import Text from '@components/common/Text'
import { breakpoints } from '@/styles/breakPoint'
import { colors } from '@/styles/color'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useEffect, useState, useRef } from 'react'
import { Cursor, Typewriter } from 'react-simple-typewriter'
import Nav from '@components/common/navbar/Nav'
import { motion } from 'framer-motion'
import ScrollIndicator from '@components/common/ScrollIndicator'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [menuBtn, setMenuBtn] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)

  const containerRef = useRef(null)

  const handleSmallScreenNav = () => {
    setMenuBtn(!menuBtn)
  }

  const handleAnimationComplete = () => {
    setAnimationComplete(!animationComplete)
  }

  const checkScroll = () => {
    const offset = window.scrollY
    if (offset > 0) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScroll)
    return () => {
      window.removeEventListener('scroll', checkScroll)
    }
  }, [])

  return (
    <StyleHeader isSticky={isSticky}>
      <Flex justify="space-between" css={navStyles}>
        <a href="/">
          <Text typography="t1" bold>
            <Typewriter
              words={['Nam Ki Hun', '남 기 훈']}
              delaySpeed={1000}
              typeSpeed={200}
            />
            <Cursor />
          </Text>
        </a>

        <Flex css={menutStyles}>
          <ScrollIndicator targetId="Home">
            <Text typography="t4">
              <Typewriter
                words={['홈', 'Home']}
                delaySpeed={1000}
                typeSpeed={200}
              />
            </Text>
          </ScrollIndicator>

          <ScrollIndicator targetId="About">
            <Text typography="t4">
              <Typewriter
                words={['소개', 'About']}
                delaySpeed={1000}
                typeSpeed={200}
              />
            </Text>
          </ScrollIndicator>

          <ScrollIndicator targetId="Project">
            <Text typography="t4">
              <Typewriter
                words={['프로젝트', 'Project']}
                delaySpeed={1000}
                typeSpeed={200}
              />
            </Text>
          </ScrollIndicator>

          <ScrollIndicator targetId="Contact">
            <Text typography="t4">
              <Typewriter
                words={['연락처', 'Contact']}
                delaySpeed={1000}
                typeSpeed={200}
              />
            </Text>
          </ScrollIndicator>
        </Flex>
        <StylesHamburgerMenu>
          <MenuButton isOpen={menuBtn} onClick={handleSmallScreenNav} />
        </StylesHamburgerMenu>
        <StyleMenuNavigation
          menuBtn={menuBtn}
          animationComplete={animationComplete}
        >
          <motion.nav
            initial={false}
            animate={menuBtn ? 'open' : 'closed'}
            onAnimationComplete={handleAnimationComplete}
            ref={containerRef}
          >
            <Nav onClick={handleSmallScreenNav} />
          </motion.nav>
        </StyleMenuNavigation>
      </Flex>
    </StyleHeader>
  )
}

const StyleHeader = styled.header(({ isSticky }: { isSticky: boolean }) => ({
  width: '100%',
  height: 70,
  backdropFilter: 'blur(10px)',
  zIndex: 50,
  position: 'sticky',
  top: 0,
  transition: 'easeInOut 0.3s',
  borderBottom: isSticky ? `1px solid ${colors.grey2}` : 'none',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  [`@media (min-width: ${breakpoints.sm})`]: {
    maxWidth: '640px',
  },
  [`@media (min-width: ${breakpoints.md})`]: {
    maxWidth: '768px',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    maxWidth: '1024px',
  },
  [`@media (min-width: ${breakpoints.xl})`]: {
    maxWidth: '1280px',
  },
  [`@media (min-width: ${breakpoints['2xl']})`]: {
    maxWidth: '1536px',
  },
}))

const navStyles = css`
  width: 100%;
`

const menutStyles = css`
  gap: 14px;
  display: none;

  & span {
    cursor: pointer;
  }

  @media (min-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`

const StylesHamburgerMenu = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`

const StyleMenuNavigation = styled.div(
  ({
    menuBtn,
    animationComplete,
  }: {
    menuBtn: boolean
    animationComplete: boolean
  }) => ({
    position: 'absolute',
    top: '100px',
    right: 0,
    bottom: 0,
    left: menuBtn || animationComplete ? '0' : '-150%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    height: '100vh',
    backgroundColor: 'slategray',
    color: 'white',
    textAlign: 'center',
    transition: 'ease-in 0.3s',
    paddingTop: '150px',

    [`@media (min-width: ${breakpoints.md})`]: {
      display: 'none',
    },
  }),
)

export default Header
