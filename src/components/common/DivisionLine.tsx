import { colors } from '@/styles/color'
import styled from '@emotion/styled'

interface DivisionLineProps {
  width?: number
  height?: number
}

const DivisionLine = styled.div<DivisionLineProps>`
  ${({ width = '100%', height }) => ({ width, height })}
  border-bottom: 1px solid ${colors.grey2};
  margin-top: 5px;
`

export default DivisionLine
