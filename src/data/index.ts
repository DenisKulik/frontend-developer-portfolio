import { IconType } from 'react-icons'
import { FaReact } from 'react-icons/fa'
import { RiVuejsLine } from 'react-icons/ri'
import {
    SiFigma,
    SiJest,
    SiMui,
    SiRedux,
    SiStyledcomponents,
    SiVuetify,
    SiWebpack,
} from 'react-icons/si'
import {
    TbBrandHtml5,
    TbBrandStorybook,
    TbBrandTypescript,
    TbBrandNuxt,
    TbBrandVite,
} from 'react-icons/tb'
import { DiCss3Full, DiJavascript1, DiSass } from 'react-icons/di'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { BsGit } from 'react-icons/bs'
import todolist from '../assets/todolist.png'
import socialNetwork from '../assets/social-network.png'
import reactSneakers from '../assets/react-sneakers.jpg'
import gameLanding from '../assets/game-landing.png'
import flashcards from '../assets/flashcards.png'
import mapty from '../assets/mapty.jpg'
import { ISourceOptions } from 'tsparticles-engine'

export const skills: SkillType[] = [
    {
        title: 'JavaScript',
        icon: DiJavascript1,
        color: '#ffcc33',
    },
    {
        title: 'TypeScript',
        icon: TbBrandTypescript,
        color: '#36c',
    },
    {
        title: 'Vue',
        icon: RiVuejsLine,
        color: '#41B883',
    },
    {
        title: 'Nuxt',
        icon: TbBrandNuxt,
        color: '#00DC82',
    },
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
        title: 'Html',
        icon: TbBrandHtml5,
        color: '#c63',
    },
    {
        title: 'Css',
        icon: DiCss3Full,
        color: '#017dc8',
    },
    {
        title: 'Sass',
        icon: DiSass,
        color: '#cc6699',
    },
    {
        title: 'Styled Components',
        icon: SiStyledcomponents,
        color: '#ffd35b',
    },
    {
        title: 'Vuetify',
        icon: SiVuetify,
        color: '#7CC7FF',
    },
    {
        title: 'Tailwind',
        icon: BiLogoTailwindCss,
        color: '#38BDF8',
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
        title: 'Git',
        icon: BsGit,
        color: '#f44c28',
    },
    {
        title: 'Vite',
        icon: TbBrandVite,
        color: '#8F6EFE',
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
]

export const projects: ProjectType[] = [
    {
        img: flashcards,
        title: 'Flashcards',
        url: 'https://flashcards-learning.vercel.app/',
        technologies: 'Typescript, React, RTK Query, Radix UI, Storybook',
    },
    {
        img: todolist,
        title: 'Todolist',
        url: 'https://deniskulik.github.io/todolist',
        technologies: 'Typescript, React, Redux-toolkit, Axios, Jest, Material UI, Storybook',
    },
    {
        img: socialNetwork,
        title: 'Social Network',
        url: 'https://deniskulik.github.io/samurai-way',
        technologies: 'Typescript, React, Redux, React Router, Jest, CSS modules',
    },
    {
        img: gameLanding,
        title: 'Game Landing',
        url: 'https://deniskulik.github.io/game-landing',
        technologies: 'Typescript, React, Styled-components',
    },
    {
        img: reactSneakers,
        title: 'React Sneakers',
        url: 'https://deniskulik.github.io/react-sneakers',
        technologies: 'JavaScript, React, CSS modules, axios',
    },
    {
        img: mapty,
        title: 'Mapty',
        url: 'https://deniskulik.github.io/mapty',
        technologies: 'JavaScript, Leaflet.js, CSS, HTML',
    },
]

export const particlesOptions: ISourceOptions = {
    fullScreen: false,
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
            },
        },
        color: {
            value: 'rgb(223, 157, 200)',
        },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: {
                min: 0.1,
                max: 0.2,
            },
            animation: {
                enable: true,
                speed: 2,
                sync: false,
            },
        },
        size: {
            value: {
                min: 1,
                max: 9,
            },
            animation: {
                enable: true,
                speed: 10,
                sync: false,
            },
        },
        links: {
            enable: true,
            distance: 150,
            color: 'rgb(170, 54, 124)',
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: 'slow',
                parallax: {
                    enable: true,
                    smooth: 10,
                    force: 50,
                },
            },
            onClick: {
                enable: true,
                mode: 'push',
            },
        },
        modes: {
            grab: {
                distance: 400,
                links: {
                    opacity: 0.8,
                },
            },
            push: {
                quantity: 4,
            },
        },
    },
    background: {
        color: 'rgb(18, 18, 18)',
    },
}

// types
export type SkillType = {
    title: string
    icon: IconType
    color: string
}

export type ProjectType = {
    img: string
    title: string
    url: string
    technologies: string
}
