import Layout from "@components/Layout";
import aboutStyle from "~/styles/about.module.css";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { bahasa, fe } from "~/lib/skill";
import { MotionList, MotionHyperlink } from "~/components/Motions";

export default function about() {
  return (
    <Layout
      title="Tentang | DhafitF"
      metaDesc="Tentang Dhafit Farenza aka Devzfz. Mulai dari pengenalan dan daftar social media"
    >
      <div className="container">
        <div className="top">
          <h1 className="pageTitle">Tentang</h1>
        </div>
        <div className="desc">
          <p>
            Halo, sama saya Dhafit Farenza aka Devzfz. Saya seorang penerjemah, yang menerjemahkan bahasa Jepang atau
            Inggris ke bahasa Indonesia. Awal mula saya menjadi penerjemah adalah dari keinginan saya belajar bahasa
            Jepang. Dari keinginan tersebut, saya mencoba membuat sebuah fansub bernama{" "}
            <a href="https://www.nogisub.com/">Nogisub</a> dimana saya dapat belajar sambil membagikan hasil terjemahan
            saya.
          </p>
          <br />
          <p>Kali ini, saya sedang mencoba menjadi front end web developer. </p>
          <br />
          <p>
            Anda dapat mengunjungi halaman{" "}
            <Link href="/profile">
              <a>linktree</a>
            </Link>{" "}
            saya.
          </p>
        </div>
        <div className="separator"></div>
        <div className="skill">
          <div className={aboutStyle.skillCont}>
            <div className={aboutStyle.title}>Bahasa</div>
            <div className={aboutStyle.item}>
              <ul>
                {bahasa.map((item, index) => {
                  return <MotionList key={index} skill={item.skill} />;
                })}
              </ul>
            </div>
          </div>
          <div className={aboutStyle.skillCont}>
            <div className={aboutStyle.title}>Frontend web developer</div>
            <div className={aboutStyle.item}>
              <ul>
                {fe.map((item, index) => {
                  return <MotionList key={index} skill={item.skill} />;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="separator"></div>
        <div className={aboutStyle.kontak}>
          <p>
            Anda dapat menghubungi saya melalui email di <a href="mailto:dhafidfz@gmail.com">dhafidfz@gmail.com</a>,
            atau social media di bawah ini:
          </p>
          <ul>
            <li>
              <MotionHyperlink
                background="#4267B2"
                href="https://www.facebook.com/dhafid.farenza/"
                icon={<FaFacebookF />}
                text="Facebook"
              />
            </li>
            <li>
              <MotionHyperlink
                background="#E1306C"
                href="https://www.instagram.com/dhafitf"
                icon={<FaInstagram />}
                text="Instagram"
              />
            </li>
            <li>
              <MotionHyperlink
                background="#1DA1F2"
                href="https://twitter.com/DhafitF"
                icon={<FaTwitter />}
                text="Twitter"
              />
            </li>
            <li>
              <MotionHyperlink
                background="#333333"
                href="https://github.com/dhafitf"
                icon={<FaGithub />}
                text="Github"
              />
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
