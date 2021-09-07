import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import S from './layout.module.css'
import Head from 'next/head'

interface LayoutProps {
  children: ReactNode;
  title: string
}

export default function Layout(props: LayoutProps) {
  const {children, title} = props;
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content="Penerjemah dan Frontend web developer" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <meta name="theme-color" content="#3A3D68" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta content='article' property='og:type'/>
      <meta content='Dhafit Farenza' name='author'/>
      <meta content='Dhafit Farenza' property='article:author'/>
      <meta content='@DhafitF' name='twitter:site'/>
      <link rel="me" href="https://twitter.com/DhafitF"></link>
      <link rel="me" href="https://www.instagram.com/dhafitf"></link>
      <link rel="me" href="https://github.com/dhafitf"></link>
      <link rel="me" href="https://www.facebook.com/dhafid.farenza/"></link>
      <link rel="me" href="https://www.youtube.com/c/dhafitfarenza"></link>
      <link rel="me" href="https://trakteer.id/dhafid"></link>
    </Head>
    <div id={S.content}>
      <Header />
      <main className={S.main}>{children}</main>
      <Footer />
    </div>
    </>
  )
}
