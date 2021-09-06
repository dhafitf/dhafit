import * as React from 'react'
import Layout from "../../components/Layout"
import M from './blog.module.css'
import Link from 'next/link'
import { getAllPosts } from "../../lib/data";
import { GetStaticProps } from 'next'

export default function Blog({ posts }:any) {
  return (
    <Layout title="Blog | DhafitF">
      <div className="container">
          <h2 className="pageTitle">Blog</h2>
          <div className="itemCont">
            {posts.map((blog: { permalink: React.Key | null | undefined; timestamp: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; subtitle: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
              return (
                <div className={M.itemCont} key={blog.permalink}>
                  <div className={M.timestamp}>
                    {blog.timestamp}
                  </div>
                  <div className={M.item}>
                    <Link href={`/blog/${blog.permalink}`}><a>
                    <h1 className={M.title}>{blog.title}</h1>
                    <p className={M.desc}>{blog.subtitle}</p>
                    </a></Link>
                  </div>
                </div>
              )
              })}
          </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const allPost = getAllPosts()
  return {
    props: {
      posts: allPost.map(({ data, content, permalink }) => ({
        ...data,
        content,
        permalink,
      }))
    }
  }
}
