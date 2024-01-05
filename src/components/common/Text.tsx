import { Colors, colors } from '@/styles/color'
import { Typography, typographyTable } from '@/styles/typography'
import { CSSProperties } from 'react'
import styled from '@emotion/styled'

interface TextProps {
  typography: Typography
  color?: Colors
  display?: CSSProperties['display']
  textAlign?: CSSProperties['textAlign']
  fontWeight?: CSSProperties['fontWeight']
  bold?: boolean
}

const Text = styled.span<TextProps>(
  ({ color = 'black', display, textAlign, fontWeight, bold }) => ({
    color: colors[color],
    display,
    textAlign,
    fontWeight: bold ? 'bold' : fontWeight,
  }),
  ({ typography = 't5' }) => typographyTable[typography],
)

export default Text
