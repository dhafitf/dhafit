import { AiFillHtml5, AiOutlineGithub, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi'
import { FaNode, FaXTwitter } from 'react-icons/fa6'
import {
  SiBootstrap,
  SiExpress,
  SiFigma,
  SiMarkdown,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiUpwork,
  SiVuedotjs,
} from 'react-icons/si'

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Projects', path: '/projects' },
  { label: 'Translyrics', path: '/translyrics' },
  { label: 'Activity', path: '/activity' },
  { label: 'Misc', path: '/misc' },
]

export const socialItems = [
  {
    label: 'Github',
    path: 'https://github.com/dhafitf',
    nick: 'dhafitf',
    icon: AiOutlineGithub,
  },
  {
    label: 'Twitter',
    path: 'https://twitter.com/dhafitf',
    nick: 'dhafitf',
    icon: FaXTwitter,
  },
  {
    label: 'Instagram',
    path: 'https://instagram.com/dhafitf',
    nick: 'dhafitf',
    icon: AiOutlineInstagram,
  },
  {
    label: 'Youtube',
    path: 'https://youtube.com/@dhafitf',
    nick: 'dhafitf',
    icon: AiOutlineYoutube,
  },
  {
    label: 'Upwork',
    path: 'https://www.upwork.com/freelancers/~0189a202e31eaf135a',
    nick: 'Dhafit F',
    icon: SiUpwork,
  },
]

export const techItems = [
  {
    label: 'HTML5',
    icon: AiFillHtml5,
  },
  {
    label: 'CSS3',
    icon: BiLogoCss3,
  },
  {
    label: 'Javascript',
    icon: BiLogoJavascript,
  },
  {
    label: 'Typescript',
    icon: BiLogoTypescript,
  },
  {
    label: 'Node.js',
    icon: FaNode,
  },
  {
    label: 'React',
    icon: BiLogoReact,
  },
  {
    label: 'Next.js',
    icon: SiNextdotjs,
  },
  {
    label: 'Vue.js',
    icon: SiVuedotjs,
  },
  {
    label: 'TailwindCSS',
    icon: BiLogoTailwindCss,
  },
  {
    label: 'Bootstrap',
    icon: SiBootstrap,
  },
  {
    label: 'Figma',
    icon: SiFigma,
  },
  {
    label: 'Markdown',
    icon: SiMarkdown,
  },
  {
    label: 'MongoDB',
    icon: SiMongodb,
  },
  {
    label: 'Prisma',
    icon: SiPrisma,
  },
  {
    label: 'Express',
    icon: SiExpress,
  },
]
