import P from "./project.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  subtitle: string;
  tag1: string;
  tag2: string;
  tag3: string;
  permalink: string;
  src: string;
}

export default function FProject(props: ProjectProps) {
  const { title, subtitle, tag1, tag2, tag3, permalink, src } = props;
  return (
    <motion.div className={P.item} whileHover={{ y: -6 }}>
      <Link href={`/project/${permalink}`}>
        <a>
          <div className={P.top}>
            <Image
              src={src}
              width={750}
              height={421}
              layout="responsive"
              alt={title}
            />
            <div className={P.tags}>
              <ul>
                <li>{tag1}</li>
                <li>{tag2}</li>
                <li>{tag3}</li>
              </ul>
            </div>
          </div>
          <div className={P.bottom}>
            <h1 className={P.title}>{title}</h1>
            <p className={P.desc}>{subtitle}</p>
          </div>
        </a>
      </Link>
    </motion.div>
  );
}
