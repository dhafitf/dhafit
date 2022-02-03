import Layout from "@components/Layout";
import Link from "next/link";

export default function project() {
  return (
    <Layout title="Halaman tidak ditemukan" metaDesc="Halaman tidak ditemukan">
      <div className="container">
        <h1 className="pageTitle">Halaman tidak ditemukan.</h1>
        <p>
          Halaman tidak ditemukan.{" "}
          <Link href="/profile">
            <a>Kembali ke beranda</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
}
