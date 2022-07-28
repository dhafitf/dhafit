import Footer from "@components/Footer";
import Header from "@components/Header";
import Head from "next/head";
import { LayoutProps } from "~/types/components";
import { useRouter } from "next/router";

interface Props extends LayoutProps {
  ogImage?: string;
}

export default function Layout({ children, title, metaDesc, ogImage }: Props) {
  const site = "https://dhafit.xyz";
  const router = useRouter();
  const { slug } = router.query;
  const realSlug = slug ? slug : "";
  const canonicalURL = `${site}/${realSlug}`;
  const ogImageUrl = ogImage ? ogImage : `/android-chrome-192x192.png`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDesc} />
        <meta content="article" property="og:type" />
        <meta property="og:image" content={`${site}${ogImageUrl}`} />
        <meta property="og:site_name" content="Dhafit Farenza" />
        <meta property="og:url" content={site} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDesc} />
        <link rel="canonical" href={canonicalURL} />
      </Head>
      <Header />
      <main className="main mx-5 md:mx-auto md:max-w-3xl">{children}</main>
      <Footer />
    </>
  );
}
