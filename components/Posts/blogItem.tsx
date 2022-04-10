import Link from "next/link";
import { motion } from "framer-motion";
import { BlogMetaData } from "~/types/posts";

export default function BlogItem({ title, subtitle, permalink, timestamp }: BlogMetaData) {
  return (
    <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.9 }} className="rounded-xl bg-cont p-4 hover:bg-[#434549]">
      <Link href="/blog/[slug]" as={`/blog/${permalink}`}>
        <a className="text-center text-white">
          <div className="font-mono text-sm uppercase tracking-widest">{timestamp}</div>
          <h3 className="py-1 font-semibold">{title}</h3>
          <p className="text-sm">{subtitle}</p>
        </a>
      </Link>
    </motion.div>
  );
}
