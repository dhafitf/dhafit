import Footer from "@components/Footer";
import Header from "@components/Header";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Layout(props: any) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Dhafit Farenza",
    description: "Dhafit Farenza adalah penerjemah & full-stack developer yang berspesialisasi dalam membangun aplikasi web.",
    image: "https://dhafit.vercel.app/android-chrome-192x192.png",
    largeImageCard: false,
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={`https://dhafit.vercel.app${router.asPath}`} />
        <meta property="og:site_name" content="Dhafit Farenza" />
        {meta.largeImageCard && <meta name="twitter:card" content="summary_large_image" />}
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:site" content="@dhafitf" />
        <meta name="twitter:creator" content="@dhafitf" />
        <meta name="robots" content="follow, index" />
        <meta name="keywords" content="translator, full-stack, developer, web, application, javascript, typescript, blog, portfolio, nextjs" />
        <link rel="canonical" href={`https://dhafit.vercel.app${router.asPath}`} />
      </Head>
      <Header />
      <main className="main mx-5 md:mx-auto md:max-w-[728px]">{children}</main>
      <Footer />
    </>
  );
}
