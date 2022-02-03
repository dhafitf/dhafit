import Layout from "@components/Layout";
import A from "~/styles/about.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { bahasa, fe } from "~/lib/skill";

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
          <div className={A.skillCont}>
            <div className={A.title}>Bahasa</div>
            <div className={A.item}>
              <ul>
                {bahasa.map((item, index) => {
                  return (
                    <motion.li
                      drag
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      dragElastic={1}
                      key={index}
                    >
                      {item.skill}
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={A.skillCont}>
            <div className={A.title}>Frontend web developer</div>
            <div className={A.item}>
              <ul>
                {fe.map((item, index) => {
                  return (
                    <motion.li
                      drag
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      dragElastic={1}
                      key={index}
                    >
                      {item.skill}
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="separator"></div>
        <div className={A.kontak}>
          <p>
            Anda dapat menghubungi saya melalui email di <a href="mailto:dhafidfz@gmail.com">dhafidfz@gmail.com</a>,
            atau social media di bawah ini:
          </p>
          <ul>
            <li>
              <motion.a
                style={{ background: "#4267B2" }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.facebook.com/dhafid.farenza/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaFacebookF />
                Facebook
              </motion.a>
            </li>
            <li>
              <motion.a
                style={{ background: "#E1306C" }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/dhafitf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaInstagram />
                Instagram
              </motion.a>
            </li>
            <li>
              <motion.a
                style={{ background: "#1DA1F2" }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.9 }}
                href="https://twitter.com/DhafitF"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaTwitter />
                Twitter
              </motion.a>
            </li>
            <li>
              <motion.a
                style={{ background: "#333333" }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/dhafitf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub />
                Github
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
