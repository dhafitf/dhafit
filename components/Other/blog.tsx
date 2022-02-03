import blogStyle from "~/styles/etc.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogMetaData } from "~/types/posts";

export default function BlogItem(props: BlogMetaData) {
  const { title, subtitle, permalink, timestamp } = props;
  return (
    <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.9 }} className={blogStyle.item}>
      <Link href="/blog/[slug]" as={`/blog/${permalink}`}>
        <a>
          <div className={blogStyle.timestamp}>{timestamp}</div>
          <h1 className={blogStyle.title}>{title}</h1>
          <p className={blogStyle.desc}>{subtitle}</p>
        </a>
      </Link>
    </motion.div>
  );
}
