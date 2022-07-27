import Link from "next/link";
import { BlogMetaData } from "~/types/posts";

export default function BlogItemCard({ title, subtitle, permalink, timestamp }: BlogMetaData) {
  return (
    <Link href="/blog/[slug]" as={`/blog/${permalink}`}>
      <a className="rounded bg-dark-gray p-4 text-white transition-colors hover:bg-light-gray">
        <div className="inline-flex w-full items-center pb-1">
          <h3 className="w-full truncate py-1 text-lg font-bold">{title}</h3>
          <div className="flex-none pl-4 font-mono text-sm text-gray">{timestamp}</div>
        </div>
        <p className="truncate-2 text-sm text-[#D0D0D0]">{subtitle}</p>
      </a>
    </Link>
  );
}
