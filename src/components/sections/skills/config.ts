import { DataSkill, Skill } from '@/types/skill';

const trimLen: number = -1;

const skills: Skill[] = [
  {
    name: 'Web Development',
    thumbnail: '/images/skill/web-development.jpg',
    description: `Web Development involves creating websites and web applications that are both visually appealing and highly functional. It encompasses a variety of technologies, frameworks, and best practices to ensure a seamless user experience and efficient performance.`
  },
  {
    name: 'UI/UX Design',
    thumbnail: '/images/skill/ui-ux-design.jpg',
    description: `UI/UX Design focuses on creating delightful user experiences through visually appealing and highly functional designs. This skill includes a variety of technologies, frameworks, and best practices to enhance user satisfaction and usability.`
  },
  {
    name: 'Database Management',
    thumbnail: '/images/skill/database-management.jpg',
    description: `Database Management involves efficiently storing and organizing data. This skill covers a range of technologies, frameworks, and best practices to ensure data integrity, security, and performance.`
  },
  {
    name: 'Mobile Development',
    thumbnail: '/images/skill/mobile-development.jpg',
    description: `Mobile Development entails crafting apps for smartphones and tablets that are both visually appealing and highly functional. It includes a variety of technologies, frameworks, and best practices to provide a seamless user experience on mobile devices.`
  }
];

const dataBrand: DataSkill[] = [
  {
      id: 1,
      image: '/images/skill/nextjs.svg',
      label: "NextJs"
  },
  {
      id: 2,
      image: '/images/skill/react.svg',
      label: "ReactJs"
  },
  {
      id: 3,
      image: '/images/skill/angular.svg',
      label: "Angular"
  },
  {
      id: 4,
      image: '/images/skill/nodejs.svg',
      label: "NodeJs"
  },
  {
      id: 5,
      image: '/images/skill/typescript.svg',
      label: "Typecript"
  },
  {
      id: 6,
      image: '/images/skill/javascript.svg',
      label: "Javascript"
  },

  {
      id: 7,
      image: '/images/skill/html.svg',
      label: "Html"
  },
  {
      id: 8,
      image: '/images/skill/css.svg',
      label: "Css"
  },
  {
      id: 9,
      image: '/images/skill/sass.svg',
      label: "Sass"
  },
  {
      id: 10,
      image: '/images/skill/antd.svg',
      label: "Ant Design"
  },
  {
      id: 11,
      image: '/images/skill/tailwind-css.svg',
      label: "Tailwind Css"
  },
  {
      id: 12,
      image: '/images/skill/redux.svg',
      label: "Redux"
  },
]

export { trimLen, skills, dataBrand };
