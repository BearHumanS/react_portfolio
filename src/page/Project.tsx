import List from '@/components/project/List'
import Project from '@/components/project/ProjectTest'
import styled from '@emotion/styled'
import { AnimatePresence } from 'framer-motion'
import { useParams } from 'react-router-dom'

const ProjectPage = () => {
  const { id } = useParams()
  return (
    <>
      <ProjectContainer id="Project">
        <AnimatePresence>{id && <Project params={id} />}</AnimatePresence>
      </ProjectContainer>
      <List selectedId={id !== undefined ? id : ''} />
    </>
  )
}

const ProjectContainer = styled.section`
  position: relative;
  width: 100%;
`

export default ProjectPage
