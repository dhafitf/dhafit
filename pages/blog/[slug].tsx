import { Layout } from "@components/Layout";
import { getAllBlogs, getBlogBySlug } from "~/lib/getPosts";
import { GetStaticProps, GetStaticPaths } from "next";
import { BlogFooter, NotTranslatedWarning } from "@components/Other";
import { PostThumb } from "@components/Posts";
import { PostProps } from "~/types/posts";
import markdownToHtml from "~/lib/markdownToHtml";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useTranslation from "~/lib/useTranslation";

export default function BlogPostPage({ tags, title, subtitle, timestamp, thumb, content, isNotTranslated }: PostProps) {
  const BaseUrl = "https://dhafit.vercel.app";
  const ogImageUrl = thumb ? BaseUrl + thumb : `${BaseUrl}/android-chrome-192x192.png`;

  const { locale } = useTranslation();

  const router = useRouter();
  const path = router.asPath.split("/")[2];
  const githubFileLink = `https://github.com/dhafitf/dhafit/edit/master/posts/blog/${path}.md`;

  useEffect(() => {
    let newPath = path.split("-");
    if (locale.lang === "en" && path.startsWith("id-")) {
      newPath.shift();
      router.push(newPath.join("-"));
    } else if (locale.lang === "id" && !path.startsWith("id-")) {
      newPath.unshift("id");
      router.push(newPath.join("-"));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  return (
    <Layout title={title} image={ogImageUrl} description={subtitle} type="article" largeImageCard={Boolean(thumb)}>
      <article className="pb-10">
        {thumb && (
          <div className="relative overflow-hidden">
            <PostThumb src={thumb} alt={title} />
          </div>
        )}
        <div className="pt-4 font-mono text-sm tracking-widest">{timestamp}</div>
        <h1 className="py-3 text-3xl font-bold">{title}</h1>
        <div className="flex gap-2">
          {tags.map((tag: {}, index: number) => (
            <span className="rounded-md bg-dark-gray p-2 text-xs" key={index}>
              {tag}
            </span>
          ))}
        </div>
        <div className="mb-8 mt-4 w-full border-[1px] border-[#3d3d3d]"></div>
        {isNotTranslated && <NotTranslatedWarning />}
        <section id="article" className="prose prose-invert" dangerouslySetInnerHTML={{ __html: content }} />
      </article>
      <BlogFooter githubFileLink={githubFileLink} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx as any;
  const { data, content } = getBlogBySlug(params?.slug);
  const htmlContent = await markdownToHtml(content);

  return {
    props: {
      ...data,
      content: htmlContent,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllBlogs().map((post) => ({
      params: {
        slug: post.permalink,
      },
    })),
    fallback: false,
  };
};
