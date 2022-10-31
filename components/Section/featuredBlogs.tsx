import { Section } from "../Layout";
import MoreButton from "../Other/moreButton";
import Link from "next/link";
import { PostProps } from "~/types/posts";
import React from "react";
import filteredLocalePosts from "~lib/filteredLocalePosts";
import useTranslation from "~/lib/useTranslation";

function FeaturedBlogItem({ title, subtitle, permalink, timestamp }: PostProps) {
  return (
    <Link
      href="/blog/[slug]"
      as={`/blog/${permalink}`}
      className="cursor-pointer rounded-md border border-[#979797] px-3 py-4 text-[#fafafa] transition-all hover:bg-light-gray"
    >
      <span className="text-sm text-gray">{timestamp}</span>
      <h3 className="truncate-3 py-2 font-semibold">{title}</h3>
      <p className="truncate-3 text-sm text-[#D0D0D0]">{subtitle}</p>
    </Link>
  );
}

type Props = {
  blogs: PostProps[];
  withLoadmore?: boolean;
};

export default function FeaturedBlogs({ blogs, withLoadmore }: Props) {
  const { locale } = useTranslation();
  const currentPosts = filteredLocalePosts(blogs, locale);

  return (
    <Section id="featured-blogs" title={locale["featured.blog"]}>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-4">
        {currentPosts.map((post) => {
          return <FeaturedBlogItem key={post.permalink} {...post} />;
        })}
      </div>
      {withLoadmore && <MoreButton className="pt-6" href="/blog" name="blog" />}
    </Section>
  );
}
