import * as React from "react";
import Layout from "../../components/Layout";
import P from "./project.module.css";
import Link from "next/link";
import { getAllProject } from "../../lib/data";
import { GetStaticProps } from "next";
import PostThumb from "../../modules/PostThumb";
import { motion } from "framer-motion";

export default function Project({ posts }: any) {
  return (
    <Layout
      title="Project | DhafitF"
      metaDesc="Daftar project yang telah dan sedang dikerjakan oleh Dhafit Farenza"
    >
      <div className="container">
        <h2 className="pageTitle">Project</h2>
        <div className="item_container" style={{ marginBottom: "2rem" }}>
          {posts.map(
            (
              post: {
                title: string;
                subtitle: string;
                permalink: string;
                tags: any;
                thumb: string;
              },
              index: React.Key
            ) => {
              return (
                <motion.div
                  key={index}
                  className="item"
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={`/project/${post.permalink}`}>
                    <a>
                      <div className="p-top">
                        <PostThumb src={post.thumb} alt={post.title} />
                        <div className="tags">
                          <ul>
                            {post.tags.map((tag: {}, index: React.Key) => (
                              <li key={index}>{tag}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="bottom">
                        <h1 className="p-title">{post.title}</h1>
                        <p className="p-desc">{post.subtitle}</p>
                      </div>
                    </a>
                  </Link>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const allPost = getAllProject();
  const posts: any = allPost.map(({ data, content, permalink }) => ({
    ...data,
    content,
    permalink,
  }));

  return {
    props: {
      posts: posts.sort((a: any, b: any) => (a.order > b.order ? 1 : -1)),
    },
  };
};
