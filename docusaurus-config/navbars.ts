import { NavbarItem } from '@docusaurus/theme-common';

export const navItems: NavbarItem[] = [
    {
        to: '/',
        label: 'Home', // 主页
        position: 'right',
        className: 'navicon home-icon',
        activeBaseRegex: '^/$',
    },
    {
        to: 'blog',
        label: 'Blog', // 博客
        position: 'right',
        className: 'navicon links-icon',
    },
    {
        type: 'doc',
        // docId: 'wiki/index',
        label: 'Note', // 笔记
        position: 'right',
        className: 'navicon doc-icon',
    },
    {
        to: '/project-demo',
        label: 'Project Showcase', //项目展示
        className: 'navicon links-icon',
    },
    {
        to: '/blog/about',
        label: 'About',//'关于', 
        position: 'right',
        className: 'navicon about-icon',
    },
];
