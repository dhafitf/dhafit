import * as React from 'react'
import Layout from "../../components/Layout"
import { getAllPosts } from "../../lib/project";
import P from './project.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import PostThumb from '../../modules/PostThumb';

interface Props {
  mdxSource: MDXRemoteSerializeResult
  tags: any
  title: string
  timestamp: string
  subtitle: string
  thumb: string
  permalink: string
  data: string
  content: string
}

export default function BlogPostPage({ tags, title, subtitle, timestamp, thumb, mdxSource  }: Props) {
  return (
    <Layout title="Blog | DhafitF">
      <article className="blog-post">
        <div className={P.thumb}>
          <div className={P.tags}>
          {tags.map((tag: {}, index: React.Key | null | undefined) => (
              <span key={index}>
                {tag}
              </span>
           ))}
           </div>
          <PostThumb src={thumb} alt={title} />
        </div>
        <section className={P.timestamp}>
          <span>{timestamp}</span>
        </section>
        <h1 className={P.title}>{title}</h1>
        <h3 className={P.subtitle}>{subtitle}</h3>
        <div className={P.content}>
        <MDXRemote {...mdxSource} />
        </div>
    </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params} = ctx;
  const allPost = getAllPosts()
  const { data, content }:any  = allPost.find((item) => item.permalink === params?.slug)
  const mdxSource = await serialize(content)
  return {
    props: {
      ...data,
      mdxSource,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.permalink
      },
    })),
    fallback: false,
  };
};
