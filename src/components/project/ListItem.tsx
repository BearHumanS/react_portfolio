import { projectDataProps } from '@/lib/project'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Flex from '../common/Flex'
import Text from '../common/Text'

interface ListItemProps {
  isSelected?: boolean
  data: projectDataProps
}

const ListItem = ({ data }: ListItemProps) => {
  const { id, title, period, img } = data

  return (
    <li css={item}>
      <motion.div layoutId={`item-motion-${id}`} layout>
        <Link to={`/${id}`}>
          <div css={content}>
            <motion.div
              css={title_motion}
              layoutId={`title-motion-${id}`}
              layout
            >
              <Flex direction="column">
                <Text color="white" typography="t2">
                  {title}
                </Text>
                <Text css={list_period} color="white">
                  {period}
                </Text>
              </Flex>
            </motion.div>

            <motion.div
              css={image_motion}
              aria-hidden="true"
              layoutId={`image-motion-${id}`}
              layout
            >
              <img src={img} alt="프로젝트 이미지" css={image} />
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </li>
  )
}

const item = css`
  overflow: hidden;
  position: relative;
  display: flex;
  height: 40vmin;
  justify-content: center;
  flex-direction: column;
  font-size: 3vmin;
  text-align: left;
  background-color: #fff;
  border-radius: 3vmin;

  & > div {
    width: 100%;
    height: 100%;
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: none;
  }

  &:nth-of-type(4n + 1),
  &:nth-of-type(4n + 4) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`

const content = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 5vmin;
`

const image_motion = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    background-color: rgba(0, 0, 0, 0.8);
  }
`

const image = css`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;
`

const title_motion = css`
  z-index: 1;
  position: relative;
`

const list_period = css`
  margin: 1.4vmin 0;
`

export default ListItem
