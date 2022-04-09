import { Layout } from "@components/Layout";
import Link from "next/link";

export default function project() {
  return (
    <Layout title="Halaman tidak ditemukan" metaDesc="Halaman tidak ditemukan">
      <div className="absolute flex h-screen w-full flex-col items-center justify-center">
        <h1 className="text-3xl">Halaman tidak ditemukan.</h1>
        <Link href="/profile">
          <a className="text-main hover:underline">Kembali ke beranda</a>
        </Link>
      </div>
    </Layout>
  );
}
