import { aboutDataProps } from '@/lib/about'
import { breakpoints } from '@/styles/breakPoint'
import { typographyTable } from '@/styles/typography'
import { css } from '@emotion/react'
import Flex from '../common/Flex'
import Spacing from '../common/Spacing'
import Text from '../common/Text'

interface AboutDataRenderProps {
  data: aboutDataProps
}

const AboutDataRender = ({ data }: AboutDataRenderProps) => {
  const { title, content } = data

  return (
    <Flex direction="column">
      <Text color="blue" typography="t3" css={aboutDataTitle}>
        {title}
      </Text>
      <Spacing size={4} />
      <Text css={aboutDataContent}>{content}</Text>
    </Flex>
  )
}

const aboutDataTitle = css`
  @media (max-width: ${breakpoints.md}) {
    ${typographyTable.t5};
  }
`

const aboutDataContent = css`
  @media (max-width: ${breakpoints.md}) {
    ${typographyTable.t6}
  }
`

export default AboutDataRender
