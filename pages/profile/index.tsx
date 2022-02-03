import Layout from "@components/Layout";
import Image from "next/image";
import profileStyle from "~/styles/link.module.css";
import { FaInstagram, FaTwitter, FaFacebookF, FaBloggerB, FaYoutube, FaGithub } from "react-icons/fa";

export default function profile() {
  return (
    <Layout title="Profile | DhafitF" metaDesc="Linktree dari Dhafit Farenza">
      <div className={profileStyle.container}>
        <div className={profileStyle.top}>
          <div className="pp">
            <Image src="/profile.png" width={120} height={120} alt="Dhafit" />
          </div>
          <div className={profileStyle.nama}>Dhafit Farenza</div>
          <p>Translator & Frontend web developer</p>
        </div>
        <div className={profileStyle.project}>
          <div className={profileStyle.item}>
            <div className={profileStyle.jumlah}>3+</div>
            <div className={profileStyle.desc}>Running project</div>
          </div>
          <div className={profileStyle.item}>
            <div className={profileStyle.jumlah}>100+</div>
            <div className={profileStyle.desc}>Finished project</div>
          </div>
          <div className={profileStyle.item}>
            <div className={profileStyle.jumlah}>110+</div>
            <div className={profileStyle.desc}>Total project</div>
          </div>
        </div>
        <div className={profileStyle.list}>
          <div className={profileStyle.itemList}>
            <a href="https://twitter.com/DhafitF" target="_blank" rel="noopener noreferrer">
              <div className={profileStyle.link}>Twitter</div>
              <div className={profileStyle.icon}>
                <FaTwitter />
              </div>
            </a>
          </div>
          <div className={profileStyle.itemList}>
            <a href="https://trakteer.id/dhafid" target="_blank" rel="noopener noreferrer">
              <div className={profileStyle.link}>Trakteer</div>
              <div className={profileStyle.icon}>
                <img src="/assets/icon/lines-trakteer-icon.png" alt="" />
              </div>
            </a>
          </div>
          <div className={profileStyle.itemList}>
            <a href="https://www.instagram.com/dhafitf" target="_blank" rel="noopener noreferrer">
              <div className={profileStyle.link}>Instagram</div>
              <div className={profileStyle.icon}>
                <FaInstagram />
              </div>
            </a>
          </div>
          <div className={profileStyle.itemList}>
            <a href="https://www.nogisub.com/" target="_blank" rel="noopener noreferrer">
              <div className={profileStyle.link}>Fansub</div>
              <div className={profileStyle.icon}>
                <FaBloggerB />
              </div>
            </a>
          </div>
          <div className={profileStyle.itemList}>
            <a href="https://www.facebook.com/dhafid.farenza/" target="_blank" rel="noopener noreferrer">
              <div className={profileStyle.link}>Facebook</div>
              <div className={profileStyle.icon}>
                <FaFacebookF />
              </div>
            </a>
          </div>
          <div className={profileStyle.itemList}>
            <a href="https://github.com/dhafitf" target="_blank" rel="noopener noreferrer">
              <div className={profileStyle.link}>Github</div>
              <div className={profileStyle.icon}>
                <FaGithub />
              </div>
            </a>
          </div>
          <div className={profileStyle.itemList}>
            <a href="https://www.youtube.com/c/dhafitfarenza" target="_blank" rel="noopener noreferrer">
              <div className={profileStyle.link}>Youtube</div>
              <div className={profileStyle.icon}>
                <FaYoutube />
              </div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
