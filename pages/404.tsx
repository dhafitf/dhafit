import { Layout } from "@components/Layout";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function project() {
  return (
    <>
      <NextSeo
        title="Halaman tidak ditemukan"
        openGraph={{
          title: "Halaman tidak ditemukan",
        }}
      />
      <Layout>
        <div>
          <h1 className="pb-4 text-4xl font-bold">404 - Halaman tidak ditemukan.</h1>
          <p className="pb-10">Sepertinya kamu salah mengeja alamat. Mohon periksa kembali alamat halaman.</p>
        </div>
        <Link href="/">
          <a className="rounded bg-dark-gray p-4 text-white hover:bg-light-gray">Kembali ke beranda</a>
        </Link>
      </Layout>
    </>
  );
}
