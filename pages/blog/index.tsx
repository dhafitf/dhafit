import * as React from "react";
import Layout from "../../components/Layout";
import BlogItem from "../../components/Etc/blog";
import { getAllPosts } from "../../lib/data";
import { GetStaticProps } from "next";

export default function Blog({ posts }: any) {
  return (
    <Layout
      title="Blog | DhafitF"
      metaDesc="Daftar blog yang diposting oleh Dhafit Farenza"
    >
      <div className="container">
        <h2 className="pageTitle">Blog</h2>

        <div className="blog_container" style={{ marginBottom: "2rem" }}>
          {posts.map(
            (
              blog: {
                title: string;
                subtitle: string;
                permalink: string;
                timestamp: string;
              },
              index: React.Key
            ) => {
              return (
                <BlogItem
                  key={index}
                  title={blog.title}
                  subtitle={blog.subtitle}
                  permalink={blog.permalink}
                  timestamp={blog.timestamp}
                />
              );
            }
          )}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const allPost = getAllPosts();
  return {
    props: {
      posts: allPost.map(({ data, content, permalink }) => ({
        ...data,
        content,
        permalink,
      })),
    },
  };
};
