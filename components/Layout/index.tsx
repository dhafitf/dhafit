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
      <title>{title}</title>
      <meta name="theme-color" content="#3A3D68" />
    </Head>
    <div id={S.content}>
      <Header />
      <main className={S.main}>{children}</main>
      <Footer />
    </div>
    </>
  )
}
