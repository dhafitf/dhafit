import * as React from "react";
import { Layout, Section } from "@components/Layout";
import { BlogItemCard } from "@components/Posts";
import { getAllBlogs, getFeaturedBlogs } from "~/lib/getPosts";
import { GetStaticProps } from "next";
import { PostProps } from "~/types/posts";
import FeaturedBlogs from "@section/featuredBlogs";
import { useState, useEffect } from "react";

interface Props {
  posts: PostProps[];
  featBlogs: PostProps[];
}

export default function Blog({ posts, featBlogs }: Props) {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState<PostProps[]>([]);

  useEffect(() => {
    if (searchString === "") return setSearchResults(posts);
    const filteredPostsBySearch = posts.filter((blog) => {
      return blog.title.toLowerCase().includes(searchString.toLowerCase());
    });

    setSearchResults(filteredPostsBySearch);
  }, [posts, searchString]);

  const handleSearchCommand = (e: any) => {
    setSearchString(e.target.value);
  };

  return (
    <Layout title="Blog | DhafitF" metaDesc="Daftar blog yang diposting oleh Dhafit Farenza">
      <h1 className="pb-4 text-4xl font-bold">Blogs</h1>
      <p>Saya menggunakan blog ini untuk membagikan postingan atau sekedar berbagi tutorial dan tips tentang apa saja. Gunakan fitur pencarian di bawah untuk mencari.</p>
      <div className="pt-4 pb-10">
        <input
          type="text"
          className="w-full appearance-none rounded bg-dark-gray py-3 px-4 leading-tight text-white placeholder:text-[#fafafa61]  md:text-sm"
          placeholder="Cari postingan"
          onChange={handleSearchCommand}
        />
      </div>
      {searchString.length === 0 && <FeaturedBlogs blogs={featBlogs} />}
      <Section title="Semua Postingan" id="all-posts" className="w-full pb-10">
        {searchResults.length > 0 ? (
          <div className="flex flex-col gap-6">
            {searchResults.map((blog: PostProps, index: number) => {
              return <BlogItemCard key={index} title={blog.title} subtitle={blog.subtitle} permalink={blog.permalink} timestamp={blog.timestamp} />;
            })}
          </div>
        ) : (
          <span className="text-gray">Tidak ada postingan ditemukan.</span>
        )}
      </Section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const featBlogs = getFeaturedBlogs();

  const allPost = getAllBlogs();
  const posts = allPost.map(({ data, content, permalink }) => ({
    ...data,
    content,
    permalink,
  }));

  return {
    props: {
      posts: posts.sort((a, b) => (a.order > b.order ? -1 : 1)),
      featBlogs,
    },
  };
};
