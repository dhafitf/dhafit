import * as React from 'react'
import Layout from "../../components/Layout"
import { blogPosts } from "../../lib/data";
import { GetStaticProps, GetStaticPaths  } from 'next'

export default function BlogPostPage({ title, subtitle, date }) {
  return (
    <Layout title="Blog | DhafitF">
      <div className="container">
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{subtitle}</p>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log('hi', ctx);
  const { params} = ctx;
  return {
    props: blogPosts.find((blog) => blog.permalink === params.slug),
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: blogPosts.map((blog) => ({
      params: {
        slug: blog.permalink
      },
    })),
    fallback: false,
  };
};
