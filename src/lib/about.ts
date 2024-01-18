export interface aboutDataProps {
  title: string
  content: string
}

type aboutDatas = aboutDataProps[]

export const aboutData: aboutDatas = [
  {
    title: '타인이 작성한 코드를 읽는 것을 좋아합니다.',
    content:
      '주로 협업을 통해 타인이 작성한 코드를 읽음으로써 자연스럽게 피드백을 주고 받는 상황을 즐깁니다.  ',
  },
  {
    title: '개선하는걸 좋아합니다.',
    content:
      '완성된 프로젝트를 배포하고 사용해봄으로써 사용자 경험측면에서 불편한 것들을 개선하는 것을 좋아합니다.',
  },
  {
    title: '실행력이 뛰어납니다.',
    content:
      '즉흥적으로 생각난 것들을 행동으로 또는 코드로 옮기는 것을 좋아합니다.',
  },
]
