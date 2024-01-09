import styled from '@emotion/styled'
import { CSSProperties } from 'react'

interface FlexProps {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
  height?: CSSProperties['height']
  width?: CSSProperties['width']
}

const Flex = styled.div<FlexProps>(
  ({ align, justify, direction, height, width }) => ({
    display: 'flex',
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
    height,
    width,
  }),
)

export default Flex
