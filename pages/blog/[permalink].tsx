import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import Image from 'next/image'
import M from './blog.module.css'
import Blog from "."

interface myLoader {
  src: string;
  width: string;
  quality: string;
}

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

const myLoader = ({ src, width, quality }) => {
  return (
    `https://drive.google.com/uc?id=${src}`
  )
}

export default function IsiBlog(props: myLoader, BlogProps) {
  const router = useRouter();
  const { permalink, body} = router.query;
  const { data } = props;
  console.log(data);
  return (
    <Layout title="Judul blog">
    <div className="container">
    <Image
    className={M.image}
    loader={myLoader}
    src="1V75bRJ7iN41wi50L2Gq53Kj5HxYpk115"
    width={1920}
    height={1080}
    layout='responsive'
    alt="Yorushika" />
      <p>Isi blog {permalink} </p>
      <p>{data.title}</p>
    </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const {permalink} = context.query
  const res = await fetch(`http://localhost:3004/blog?permalink=${permalink}`);
  const dataBlog = await res.json();
  return {
    props: {
      data: dataBlog,
    },
  };
}
