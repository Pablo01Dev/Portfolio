/* ======= Icones Tecnologias =======*/
import { SiJavascript, SiTypescript, SiReact, SiAngular, SiBootstrap, SiStyledcomponents, SiNodedotjs, SiJquery } from 'react-icons/si';

/*======== Import das imagens =======*/
import imagem01 from '/public/poke-api.jpg'
import imagem02 from '/public/andarilo-studio.png'
import imagem05 from '/public/calculadora-react.jpg'


export const links = [
    {
        name: 'Home',
        path: 'home',
    },
    {
        name: 'Services',
        path: 'services',
    },
    {
        name: 'Skills',
        path: 'skills',
    },
    {
        name: 'Portfolio',
        path: 'portfolio',
    },
    {
        name: 'Resume',
        path: 'resume',
    },
    {
        name: 'Contact',
        path: 'contact',
    },
]

export const services = [
    {
        id: 1,
        name: 'Desenvolvimento Web',
        title: 'Front-End',
        description:'Desenvolvimento de sites profissionais, blogs, portfólios, landing pages e e-commerce.'
    },
    {
        id: 2,
        name: 'Designer',
        title: 'UI Design',
        description:'Desenho interfaces que sejam claras, objetivas e que possam ser intuitivas para o usuário. '
    },
]

export const skills = [
    {
        id: 1,
        name: 'JavaScript',
        image: <SiJavascript id='js' />
    },
    {
        id: 2,
        name: 'TypeScript',
        image: <SiTypescript id='ts' />
    },
    {
        id: 3,
        name: 'React',
        image: <SiReact id='react' />
    },
    {
        id: 4,
        name: 'Angular',
        image: <SiAngular id='angular' />
    },
    {
        id: 5,
        name: 'Bootstrap',
        image: <SiBootstrap id='bootstrap' />
    },
    {
        id: 6,
        name: 'styled-components',
        image: <SiStyledcomponents id='styled' />
    },
    {
        id: 7,
        name: 'jQuery',
        image: <SiJquery id='jquery' />
    },
    {
        id: 8,
        name: 'Node js',
        image: <SiNodedotjs id='node' />
    },
]

export const projects = [

    {
        id: 1,
        img: imagem01,
        category: 'JavaScript',
        title: 'Pokedex API',
        description:
            'O site utiliza HTML, CSS e JavaScript para criar uma interface dinâmica e responsiva. O site também usa conceitos de API, fetch e async/await consumindo dados da PokéAPI.',
        codigo: 'https://github.com/Pablo01Dev/Pokedex-API',
        demo: 'https://pokedex-api-psi.vercel.app/'
    },
    {
        id: 2,
        img: imagem02,
        category: 'React',
        title: 'Andarilo Studio',
        description:
            'Andarilo Studio é um projeto pessoal dedicado ao meu próprio negócio, projetado para oferecer uma interface minimalista e simplificada.',
        codigo: 'https://github.com/Pablo01Dev/andarilo',
        demo: 'https://www.andarilo.com.br'
    },
    {
        id: 3,
        img: imagem05,
        category: 'React',
        title: 'Calculadora com React',
        description:
            'Um site que usa React para criar uma calculadora simples e funcional. O site usa componentes, estados e hooks para gerenciar a lógica da calculadora.',
        codigo: 'https://github.com/Pablo01Dev/Calculadora-React',
        demo: 'https://calculadora-react-cyan-one.vercel.app/'
    },
]

export const cv = [
    {
        id: 1,
        title: 'Análise e Desenvolvimento de Sistemas ',
        subtitle: 'Bacharel -Universidade Estácio de Sá',
        date: '2023 - 2025',
        description:
        'Ingressei na faculdade em abril de 2023, atualmente estou cursando o 4º período, com o objetivo de se especializar ainda mais na área de TI em uma faculdade com foco em desenvolvimento full-stack, desde então tive experiêcia com Java, JavaScript, lógica de programação e algoritimos, analise e requistos de software e banco de dados.',
        category: 'educacao',
    },
    
    {
        id: 2,
        title: 'Assistente Administrativo',
        subtitle: 'Técnico - SENAI',
        date: '2020 - 2021',
        description:
        'Ingressei no curso em um incentivo da empresa Itaúba, onde iniciei o estudo em administração, que foi fundamental posteriormente em outras oportunidades.',
        category: 'educacao',
    },

    {
        id: 3,
        title: 'Designer',
        subtitle: 'Pinciara Imóveis',
        date: '2019 - 2024',
        description:
        'Fui responsável por toda parte visual e web da imobiliária, até que decidi migrar para desenvolvimento.',
        category: 'experiencia',
    },

    {
        id: 3,
        title: 'Jovem Aprendiz',
        subtitle: 'Itaúba Arquitetura e Construções',
        date: '2020 - 2021',
        description:
        'Ingressei no curso em um incentivo da empresa Itaúba, sendo o primeiro semestre estudando e o segundo trabalhando.',
        category: 'experiencia',
    },
    
    
]

