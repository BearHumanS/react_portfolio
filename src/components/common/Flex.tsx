import styled from '@emotion/styled'
import { CSSProperties } from 'react'

interface FlexProps {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
  height?: CSSProperties['height']
  width?: CSSProperties['width']
  wrap?: CSSProperties['flexWrap']
}

const Flex = styled.div<FlexProps>(
  ({ align, justify, direction, height, width, wrap }) => ({
    display: 'flex',
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
    height,
    width,
    flexWrap: wrap,
  }),
)

export default Flex
