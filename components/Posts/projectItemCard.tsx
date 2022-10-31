import Link from "next/link";
import { ProjectCardProps } from "~/types/posts";
import Image from "next/image";
import Icon from "~/lib/getIcons";

export default function ProjectItemCard({ permalink, thumb, tags, title, subtitle }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-md bg-dark-gray transition-colors hover:bg-light-gray">
      <Link href={`/project/${permalink}`} className="overflow-hidden text-white">
        <div className="relative">
          <Image src={thumb} width={854} height={480} alt={title} className="object-cover object-center" />
          <div className="absolute left-3 bottom-3">
            <ul className="flex gap-1">
              {tags.map((tag, index) => {
                return (
                  <li
                    className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border-[.2px] border-[#646464] bg-dark-gray tracking-widest"
                    key={index}
                  >
                    <span className="text-sm">
                      <Icon type={tag} />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="border-t-[.5px] border-zinc-400 p-3 text-center">
          <h3 className="pb-1 font-semibold transition-colors group-hover:text-cyan">{title}</h3>
          <p className="text-sm text-[#D0D0D0]">{subtitle}</p>
        </div>
      </Link>
    </div>
  );
}
