import { projectData, projectDataProps } from '@/lib/project'
import { css } from '@emotion/react'
import ListItem from './ListItem'

const List = ({ selectedId }: { selectedId: string }) => {
  return (
    <ul css={list}>
      {projectData.map((data: projectDataProps) => (
        <ListItem
          key={data.id}
          data={data}
          isSelected={data.id === selectedId}
        />
      ))}
    </ul>
  )
}

const list = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3vmin;
  row-gap: 3vmin;
`

export default List
