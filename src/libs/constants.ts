import { AiOutlineGithub, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"
import { FaXTwitter } from "react-icons/fa6"

export const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Blogs", path: "/blogs" },
  { label: "Projects", path: "/projects" },
  { label: "Dashboards", path: "/dashboards" },
]

export const socialItems = [
  {
    label: "Github",
    path: "https://github.com/dhafitf",
    nick: "dhafitf",
    icon: AiOutlineGithub,
  },
  {
    label: "Twitter",
    path: "https://twitter.com/dhafitf",
    nick: "@dhafitf",
    icon: FaXTwitter,
  },
  {
    label: "Instagram",
    path: "https://instagram.com/dhafitf",
    nick: "@dhafitf",
    icon: AiOutlineInstagram,
  },
  {
    label: "Youtube",
    path: "https://youtube.com/@dhafitf",
    nick: "@dhafitf",
    icon: AiOutlineYoutube,
  },
]
