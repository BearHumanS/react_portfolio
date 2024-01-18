import Project from '@/components/project/Project'
import styled from '@emotion/styled'

const ProjectPage = () => {
  return (
    <ProjectContainer id="Project">
      <Project />
    </ProjectContainer>
  )
}

const ProjectContainer = styled.section`
  position: relative;
  width: 100%;
`

export default ProjectPage
