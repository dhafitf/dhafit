import M from "./etc.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogProps {
  title: string;
  subtitle: string;
  permalink: string;
  timestamp: string;
}

export default function BlogItem(props: BlogProps) {
  const { title, subtitle, permalink, timestamp } = props;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.9 }}
      className={M.item}
    >
      <Link href="/blog/[slug]" as={`/blog/${permalink}`}>
        <a>
          <div className={M.timestamp}>{timestamp}</div>
          <h1 className={M.title}>{title}</h1>
          <p className={M.desc}>{subtitle}</p>
        </a>
      </Link>
    </motion.div>
  );
}
