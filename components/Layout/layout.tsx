import Footer from "@components/Footer";
import Header from "@components/Header";
import { LayoutProps } from "~/types/components";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="main mx-5 md:mx-auto md:max-w-[728px]">{children}</main>
      <Footer />
    </>
  );
}
