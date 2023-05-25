import { IconType } from 'react-icons';
import { FaReact } from 'react-icons/fa';
import {
    SiAxios,
    SiCssmodules, SiFigma, SiJest, SiMui, SiRedux, SiStyledcomponents, SiWebpack
} from 'react-icons/si';
import {
    TbBrandHtml5, TbBrandStorybook, TbBrandTypescript
} from 'react-icons/tb';
import { DiCss3Full, DiJavascript1, DiSass } from 'react-icons/di';
import { BsGit } from 'react-icons/all';
import todolist from '../assets/todolist.png';
import socialNetwork from '../assets/social-network.png';
import reactSneakers from '../assets/react-sneakers.png';
import counter from '../assets/counter.png';
import forkify from '../assets/forkify.png';
import mapty from '../assets/mapty.png';

export type SkillType = {
    title: string;
    icon: IconType;
    color: string;
}

export type ProjectType = {
    img: string
    title: string;
    url: string;
    technologies: string
}

export const skills: SkillType[] = [
    {
        title: 'React',
        icon: FaReact,
        color: '#149eca',
    },
    {
        title: 'Redux',
        icon: SiRedux,
        color: '#764abc',
    },
    {
        title: 'TypeScript',
        icon: TbBrandTypescript,
        color: '#36c',
    },
    {
        title: 'JavaScript',
        icon: DiJavascript1,
        color: '#ffcc33',
    },
    {
        title: 'HTML',
        icon: TbBrandHtml5,
        color: '#c63',
    },
    {
        title: 'CSS',
        icon: DiCss3Full,
        color: '#017dc8',
    },
    {
        title: 'SASS',
        icon: DiSass,
        color: '#cc6699',
    },
    {
        title: 'CSS Modules',
        icon: SiCssmodules,
        color: '#fff',
    },
    {
        title: 'Styled Components',
        icon: SiStyledcomponents,
        color: '#ffd35b',
    },
    {
        title: 'Material UI',
        icon: SiMui,
        color: '#0081cb',
    },
    {
        title: 'Storybook',
        icon: TbBrandStorybook,
        color: '#f1618c',
    },
    {
        title: 'Jest',
        icon: SiJest,
        color: '#c53d17',
    },
    {
        title: 'Axios',
        icon: SiAxios,
        color: '#5a29e4',
    },
    {
        title: 'Git',
        icon: BsGit,
        color: '#f44c28',
    },
    {
        title: 'Webpack',
        icon: SiWebpack,
        color: '#1c78c1',
    },
    {
        title: 'Figma',
        icon: SiFigma,
        color: '#a259ff',
    },
];

export const projects: ProjectType[] = [
    {
        img: todolist,
        title: 'Todolist',
        url: 'https://deniskulik.github.io/todolist',
        technologies: 'React, Redux, Typescript, Material UI, Styled components',
    },
    {
        img: socialNetwork,
        title: 'Social Network',
        url: 'https://deniskulik.github.io/samurai-way',
        technologies: 'React, Redux, Typescript, React Router, CSS modules',
    },
    {
        img: reactSneakers,
        title: 'React Sneakers',
        url: 'https://deniskulik.github.io/react-sneakers',
        technologies: 'React, React Skeleton, JavaScript,  CSS modules, axios',
    },
    {
        img: counter,
        title: 'Counter',
        url: 'https://deniskulik.github.io/counter',
        technologies: 'React, Redux, Typescript, CSS modules',
    },
    {
        img: forkify,
        title: 'Forkify',
        url: 'https://deniskulik.github.io/forkify',
        technologies: 'JavaScript, MVC, SCSS, HTML',
    },
    {
        img: mapty,
        title: 'Mapty',
        url: 'https://deniskulik.github.io/mapty',
        technologies: 'JavaScript, Leaflet.js, OOP, CSS, HTML',
    },
];