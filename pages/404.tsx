import type { NextPage } from "next";
import { Layout } from "@components/Layout";
import Link from "next/link";

const Custom404: NextPage = () => {
  return (
    <Layout title="Halaman tidak ditemukan">
      <div>
        <h1 className="pb-4 text-4xl font-bold">404 - Halaman tidak ditemukan.</h1>
        <p className="pb-10">Sepertinya kamu salah mengeja alamat. Mohon periksa kembali alamat halaman.</p>
      </div>
      <Link
        href="/"
        className="rounded bg-dark-gray p-4 text-white hover:bg-light-gray">
        Kembali ke beranda
      </Link>
    </Layout>
  );
};

export default Custom404;
