import { FaInstagram, FaTwitter, FaFacebookF, FaBloggerB, FaYoutube, FaGithub } from "react-icons/fa";
import Image from "next/image";

export const linktreeList = [
  { href: "https://twitter.com/DhafitF", text: "Twitter", icon: <FaTwitter /> },
  {
    href: "https://trakteer.id/dhafid",
    text: "Trakteer",
    icon: <Image src="/assets/icon/lines-trakteer-icon.png" alt="Trakteer logo" width="100%" height="100%" />,
  },
  { href: "https://www.instagram.com/dhafitf", text: "Instagram", icon: <FaInstagram /> },
  { href: "https://www.nogisub.com/", text: "Fansub", icon: <FaBloggerB /> },
  { href: "https://www.facebook.com/dhafid.farenza", text: "Facebook", icon: <FaFacebookF /> },
  { href: "https://github.com/dhafitf", text: "Github", icon: <FaGithub /> },
  { href: "https://www.youtube.com/c/dhafitfarenza", text: "Youtube", icon: <FaYoutube /> },
];
