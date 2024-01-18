import { prjectData } from '@/lib/project'
import Flex from '../common/Flex'
import ProjectDataRender from './ProjectDataRender'
import DivisionLine from '../common/DivisionLine'

const Project = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100%"
      width="100%"
    >
      {prjectData.map((data, index) => (
        <div key={data.period}>
          <ProjectDataRender key={data.period} data={data} />
          {index !== prjectData.length - 1 && <DivisionLine />}
        </div>
      ))}
    </Flex>
  )
}

export default Project
