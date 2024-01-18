import { projectDataProps } from '@/lib/project'
import { colors } from '@/styles/color'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Flex from '../common/Flex'
import Spacing from '../common/Spacing'
import Text from '../common/Text'
import IconGithub from './IconGithub'

interface ProjectDataRenderProps {
  data: projectDataProps
}

const ProjectDataRender = ({ data }: ProjectDataRenderProps) => {
  const { title, stack, period, projectType, img, url, description, subject } =
    data

  const { github, page } = url

  return (
    <Flex css={projectStyles} justify="center" align="center">
      <ProjectLink href={page} target="_blank" rel="noreferrer">
        <StyledImg src={img} alt="프로젝트 이미지" />
      </ProjectLink>

      <Flex direction="column" wrap="wrap" align="center" width="100%">
        <Text typography="t2" css={titleStyles}>
          <a href={github} target="_blank" rel="noreferrer">
            <IconGithub />
            {title}
          </a>
        </Text>

        <Spacing size={4} />

        <Text typography="t6" color="grey3">
          {period}
        </Text>

        <Spacing size={8} />

        <Text>{projectType}</Text>

        <Spacing size={8} />

        <Flex css={stackStyles}>
          {stack.map((item) => (
            <Text key={item} typography="t5" color="blue">
              {item}
            </Text>
          ))}
        </Flex>

        <Spacing size={24} />

        <Text>{subject}</Text>

        <Spacing size={24} />

        <Flex direction="column" css={descriptionBoxStyles} width="100%">
          {description.map((item, index) => (
            <Text key={index} typography="t6" css={descriptionItemStyles}>
              {item.content}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

const ProjectLink = styled(motion.a)`
  width: 700px;
  height: 400px;
`

const StyledImg = styled.img`
  width: 700px;
  height: 400px;
  object-fit: contain;
`

const projectStyles = css`
  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }

  height: 100vh;
  gap: 30px;
`

const titleStyles = css`
  &:hover {
    border-bottom: 1px solid ${colors.black};
  }
`

const stackStyles = css`
  gap: 12px;
`

const descriptionBoxStyles = css`
  gap: 8px;
`

const descriptionItemStyles = css`
  &::before {
    content: '🎉 ';
  }
`

export default ProjectDataRender
