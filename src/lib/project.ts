import POKEHUB from '@/assets/포케허브.png'
import MYCARD from '@/assets/마이카드.png'
import PORTFOLIO from '@/assets/포트폴리오.png'

type Description = {
  content: string
}

export interface projectDataProps {
  id: string
  title: string
  stack: string[]
  period: string
  projectType: string
  img: string
  imgList?: string[]
  url: {
    github: string
    page: string
    notion?: string
  }
  description: Description[]
  subject: string
  review?: Description[]
}

type projectDatas = projectDataProps[]

export const projectData: projectDatas = [
  {
    id: 'pokehub',
    title: '포케허브',
    stack: [
      'React',
      'TypeScript',
      'SCSS',
      'Firebase',
      'Zustand',
      'React-Query',
      'Framer-motion',
      'PokeAPI',
      'github-action',
    ],
    period: '2023.10.30 → 진행 중',
    projectType: '팀 프로젝트 / 프론트엔드',
    img: POKEHUB,
    url: {
      github: 'https://github.com/side-project-pokehub/my-pokemon',
      page: 'https://my-poke-hub.vercel.app/',
      notion: 'https://www.notion.so/e0116f25d5574a989954c03b6ab3c183',
    },
    description: [
      {
        content:
          '초기 설계 단계에서 단순한 도감형태였으나 기능을 확장하여 커뮤니티 기능을 할 수 있게 설계를 변경하였습니다.',
      },
      {
        content:
          '사용자가 원하는 포켓몬의 카드를 제작하고, 다운로드 받을 수 있습니다.',
      },
      {
        content:
          '커뮤니티 기능을 위하여 Firebase를 활용한 사용자 인증 및 상태관리를 하였습니다.',
      },
      {
        content: '데스크탑 뷰 및 모바일 뷰 반응형으로 작업했습니다.',
      },
      {
        content:
          'github-action을 사용해서 CI워크플로우는 린팅과 빌드 과정을 자동화하였고, CD워크플로우는 main브랜치에 머지 될 때 마다 자동으로 빌드 및 배포를 진행하고, 빌드된 결과물을 팀원들의 리포지토리로 push하여 배포 과정을 자동화 하였습니다.',
      },
      {
        content:
          'seo개선을 진행 중 입니다. (메타 태그 동적으로 적용, 사전 렌더링 적용, sitemap동적으로 생성 적용 예정)',
      },
      {
        content:
          'ver 1.01 배포 상태, 사용자들의 피드백 수용 및 추가 업데이트 진행 중',
      },
    ],

    subject:
      '서버 없이 할 수 있는 프로젝트를 찾다가 Poke API라는  RESTful API를 찾아서 간단한 포켓몬 도감 페이지를 구현하려 하였으나, 차별화를 두기 위해 포켓몬 커뮤니티를 구성하기로 설계 변경하여, Firebase 데이터베이스를 사용해서 사용자의 인증 및 상태관리하고, 포켓몬 도감 및 포켓몬 별 댓글 및 게시판 기능 등을 구현한 프로젝트입니다.',
  },
  {
    id: 'mycard',
    title: '마이카드',
    stack: [
      'React',
      'TypeScript',
      'Emotion',
      'Firebase',
      'Framer-motion',
      'React-Query',
      'Context API',
    ],
    period: '2023.12.28 → 2024.01.01',
    projectType: '개인 프로젝트 / 프론트엔드',
    img: MYCARD,
    url: {
      github: 'https://github.com/BearHumanS/my_card_project',
      page: 'https://my-card-sable.vercel.app/',
    },
    description: [
      {
        content: '사용자가 카드를 쉽게 발급할 수 있게 설계한 프로젝트입니다.',
      },
      {
        content: '처음으로 React-Query를 주도적으로 사용해봤습니다.',
      },
      {
        content:
          'UX를 개선하기 위해서 이용자의 페이지 이탈 후 복귀, 카드 신청 시 진행 사항 등을 고려하였습니다.',
      },
    ],
    subject:
      '이용자가 손 쉽게 카드를 신청하기 위한 프로젝트입니다. Firebase를 이용하여 mock데이터를 관리하고 사용자 인증 및 상태를 관리합니다.',
  },
  {
    id: 'portfolio',
    title: '포트폴리오',
    stack: ['React', 'TypeScript', 'Emotion', 'Framer-motion'],
    period: '2024.01.05 → 진행 중',
    projectType: '개인 프로젝트 / 프론트엔드',
    img: PORTFOLIO,
    url: {
      github: 'https://github.com/BearHumanS/react_portfolio',
      page: 'https://kihun-portfolio.vercel.app/',
    },
    description: [
      {
        content:
          '개발자로써 어필을 위하여 개인 포트폴리오 프로젝트 작업을 진행하였습니다.',
      },
      {
        content: '모바일을 고려하여 반응형 디자인을 구현했습니다.',
      },
      {
        content:
          'About의 카드는 포케허브 프로젝트의 카드를 가져와서 만들었습니다. (포켓몬 능력치 600 이상은 600족이라고 불리는 높은 능력치 값입니다.)',
      },
      {
        content:
          '재미 및 Framer-motion을 공부하기 위해 인터렉티브한 요소들을 추가하였습니다.',
      },
    ],

    subject:
      'Emotion 및 Framer-motion 기술을 숙련할 수 있는 좋은 경험이었습니다.',
  },
]
