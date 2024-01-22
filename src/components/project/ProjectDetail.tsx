import { projectData } from '@/lib/project'
import { colors } from '@/styles/color'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Flex from '../common/Flex'
import Spacing from '../common/Spacing'
import Text from '../common/Text'
import IconGithub from './IconGithub'

const Project = ({ params }: { params: string }) => {
  const project = projectData.find((data) => data.id === params)

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>
  }

  const {
    id,
    title,
    stack,
    period,
    img,
    url,
    description,
    subject,
    projectType,
  } = project

  const { github, page } = url

  return (
    <motion.div
      css={overlay}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
    >
      <motion.div layoutId={`item-motion-${id}`} layout>
        <Link to="/" css={link}>
          back
        </Link>
        <motion.div css={image} layoutId={`image-motion-${id}`} layout>
          <a href={page} target="_blank" rel="noreferrer">
            <motion.img src={img} alt={id} whileHover={{ scale: 1.08 }} />
          </a>
        </motion.div>
        <div css={content}>
          <motion.div layoutId={`title-motion-${id}`}>
            <Flex direction="column" align="center" width="100%">
              <motion.div whileHover={{ scale: 1.08 }}>
                <Text typography="t2">
                  <a href={github} target="_blank" rel="noreferrer">
                    <IconGithub />
                    {title}
                  </a>
                </Text>
              </motion.div>
              <Spacing size={8} />
              <Text typography="t6" color="grey3">
                {period}
              </Text>
            </Flex>
          </motion.div>

          <Spacing size={8} />

          <Text css={textStyles}>{projectType}</Text>

          <Spacing size={8} />

          <Flex css={stackStyles} justify="center">
            {stack.map((item) => (
              <Text key={item} typography="t5" color="blue">
                {item}
              </Text>
            ))}
          </Flex>

          <Spacing size={24} />

          <Text css={textStyles}>{subject}</Text>

          <Spacing size={24} />

          <Flex direction="column" width="100%">
            {description.map((item, index) => (
              <Text key={index} typography="t6" css={descriptionItemStyles}>
                {item.content}
              </Text>
            ))}
          </Flex>
        </div>
      </motion.div>
    </motion.div>
  )
}

const overlay = css`
  z-index: 9999;
  position: fixed;
  padding: 10vmin;
  background: rgba(0, 0, 0, 0.8);
  will-change: opacity;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

const link = css`
  color: ${colors.white};
  text-align: right;
  display: block;
  margin-bottom: 1vmin;
`

const image = css`
  display: block;
  width: 100%;
  height: 50vmin;

  a {
    background: ${colors.white};
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 20px 20px 0 0;
    padding-top: 20px;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const content = css`
  background: ${colors.white};
  border-radius: 0 0 20px 20px;
  padding: 20px;
`

const stackStyles = css`
  gap: 12px;
`

const textStyles = css`
  display: block;
  text-align: center;
`

const descriptionItemStyles = css`
  &::before {
    content: '🎉 ';
  }
`

export default Project
