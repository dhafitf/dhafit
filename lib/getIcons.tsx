export function IndonesianFlag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="40">
      <path fill="#fff" d="M0 0H60V40H0z" />
      <path fill="red" d="M0 0H60V20H0z" />
    </svg>
  );
}

export function JapaneseFlag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="40">
      <rect fill="#fff" height="40" width="60" />
      <circle fill="#bc002d" cx="30" cy="20" r="6" />
    </svg>
  );
}

export function EnglishFlag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="50" height="25">
      <clipPath id="s">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id="t">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath="url(#s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiMongodb,
  SiMarkdown,
  SiExpress,
  SiGoogletranslate,
} from "react-icons/si";

const ICON_TYPES = new Map(
  Object.entries({
    html5: <SiHtml5 />,
    css3: <SiCss3 />,
    javascript: <SiJavascript />,
    typescript: <SiTypescript />,
    nodejs: <SiNodedotjs />,
    react: <SiReact />,
    nextjs: <SiNextdotjs />,
    markdown: <SiMarkdown />,
    figma: <SiFigma />,
    tailwindcss: <SiTailwindcss />,
    mongodb: <SiMongodb />,
    express: <SiExpress />,
    translation: <SiGoogletranslate />,
    indonesian: <IndonesianFlag />,
    japanese: <JapaneseFlag />,
    english: <EnglishFlag />,
    terjemahan: <SiGoogletranslate />,
    indonesia: <IndonesianFlag />,
    jepang: <JapaneseFlag />,
    inggris: <EnglishFlag />,
  })
);

export default function Icon({ type }: { type: string }) {
  return <>{ICON_TYPES.get(type.toLowerCase())}</>;
}
