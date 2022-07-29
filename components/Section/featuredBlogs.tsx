import { Section } from "../Layout";
import MoreButton from "../Other/moreButton";
import Link from "next/link";
import { PostProps } from "~/types/posts";
import React from "react";
import getTimestamp from "~/lib/getTimestamp";

function FeaturedBlogItem({ title, subtitle, permalink, timestamp }: PostProps) {
  const getDate = getTimestamp(timestamp);

  return (
    <Link href="/blog/[slug]" as={`/blog/${permalink}`}>
      <a className="cursor-pointer rounded-md border border-[#979797] px-3 py-4 text-[#fafafa] transition-all hover:bg-light-gray">
        <span className="text-sm text-gray">
          {getDate.day}, {getDate.date}
        </span>
        <h3 className="truncate-3 py-2 font-semibold">{title}</h3>
        <p className="truncate-3 text-sm text-[#D0D0D0]">{subtitle}</p>
      </a>
    </Link>
  );
}

type Props = {
  blogs: PostProps[];
  withLoadmore?: boolean;
};

export default function FeaturedBlogs({ blogs, withLoadmore }: Props) {
  return (
    <Section id="featured-blogs" title="Blog Unggulan">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-4">
        {blogs.map((post) => {
          return <FeaturedBlogItem key={post.permalink} {...post} />;
        })}
      </div>
      {withLoadmore && <MoreButton className="pt-6" href="/blog" name="blog" />}
    </Section>
  );
}
