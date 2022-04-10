import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectMetaData } from "~/types/posts";
import Image from "next/image";

export default function BlogItem({ permalink, thumb, tags, title, subtitle }: ProjectMetaData) {
  return (
    <motion.div key={permalink} className="group relative overflow-hidden rounded-md bg-cont" whileHover={{ y: -6 }} whileTap={{ scale: 0.9 }}>
      <Link href={`/project/${permalink}`}>
        <a className="overflow-hidden hover:text-white">
          <div className="relative pt-[56.25%]">
            <Image src={thumb} layout="fill" objectFit="cover" objectPosition="center" alt={title} />
            <div className="absolute left-3 bottom-3">
              <ul className="flex gap-1">
                {tags.map((tag: {}, index: number) => (
                  <li className="rounded-md bg-cont py-1 px-2 text-xs tracking-widest" key={index}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-3 text-center">
            <h3 className="pb-1 font-semibold group-hover:text-main">{title}</h3>
            <p className="text-sm">{subtitle}</p>
          </div>
        </a>
      </Link>
    </motion.div>
  );
}
