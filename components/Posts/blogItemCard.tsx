import Link from "next/link";
import { BlogMetaData } from "~/types/posts";
import getTimestamp from "~/lib/getTimestamp";

export default function BlogItemCard({ title, subtitle, permalink, timestamp }: BlogMetaData) {
  const getDate = getTimestamp(timestamp);

  return (
    <Link href="/blog/[slug]" as={`/blog/${permalink}`}>
      <a className="rounded bg-dark-gray p-4 text-white transition-colors hover:bg-light-gray">
        <div className="inline-flex w-full items-center pb-1">
          <h3 className="w-full truncate py-1 text-lg font-bold">{title}</h3>
          <div className="inline-flex flex-none pl-1 font-mono text-sm text-gray">
            <span className="hidden pr-1 md:block">{getDate.day},</span>
            {getDate.date}
          </div>
        </div>
        <p className="truncate-2 text-sm text-[#D0D0D0]">{subtitle}</p>
      </a>
    </Link>
  );
}
