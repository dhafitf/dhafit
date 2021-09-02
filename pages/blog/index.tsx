import BlogItem from "../../components/CTA/blog"
import Layout from "../../components/Layout"

export default function blog() {
  return (
    <Layout title="Blog | DhafitF">
      <div className="container">
          <h2 className="pageTitle">Blog</h2>
          <div className="itemCont">
            <BlogItem />
            <BlogItem />
            <BlogItem />
          </div>
      </div>
    </Layout>
  )
}
