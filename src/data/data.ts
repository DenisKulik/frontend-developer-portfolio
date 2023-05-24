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

export type SkillType = {
    title: string;
    icon: IconType;
    color: string;
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