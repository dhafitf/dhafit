import * as React from 'react'
import Layout from "../../components/Layout"
import P from './project.module.css'
import Link from 'next/link'
import { getAllPosts } from "../../lib/project";
import { GetStaticProps } from 'next'
import PostThumb from '../../modules/PostThumb';

export default function Project({ posts }:any) {
  return (
    <Layout title="Project | DhafitF">
      <div className="container">
          <h2 className="pageTitle">Project</h2>
          <div className={P.itemContainter}>
            {posts.map((item: { permalink: React.Key | null | undefined; thumb: string; tags: {}[]; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; subtitle: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
              return (
                <div className={P.itemCont} key={item.permalink}>
                  <Link href={`/project/${item.permalink}`}><a>
                    <div className={P.cont}>
                      <div className={P.thumb}>
                      <PostThumb src={item.thumb} />
                      <div className={P.tags}>
                      {item.tags.map((tag: {}, index: React.Key | null | undefined) => (
                        <span key={index}>
                          {tag}
                        </span>
                      ))}
                      </div>
                      </div>
                      <h1 className={P.title}>{item.title}</h1>
                      <p className={P.desc}>{item.subtitle}</p>
                    </div>
                  </a></Link>
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
