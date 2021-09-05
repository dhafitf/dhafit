import BlogItem from "../../components/CTA/blog"
import Layout from "../../components/Layout"
import M from './blog.module.css'
import Link from 'next/link'

interface Post {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  body: string;
  permalink: string;
}

interface BlogProps {
  dataBlog: Post[]
}

export default function Blog(props: BlogProps) {
  const { dataBlog } = props;
  return (
    <Layout title="Blog | DhafitF">
      <div className="container">
          <h2 className="pageTitle">Blog</h2>
          <div className="itemCont">
            {dataBlog.map(blog => {
              return (
                <div className={M.itemCont} key={blog.id}>
                  <div className={M.timestamp}>
                    {blog.date}
                  </div>
                  <div className={M.item}>
                    <Link href="/blog/[permalink]" as={`/blog/${blog.permalink}`}><a>
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

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3004/blog');
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    },
  };
}
