import Layout from "../../components/Layout"
import Image from 'next/image'
import L from './link.module.css'
import {
FaInstagram,
FaTwitter,
FaFacebookF,
FaBloggerB,
FaYoutube,
FaGithub
} from "react-icons/fa";

export default function profile() {
  return (
    <Layout title="Linktree | DhafitF">
      <div className={L.container}>
        <div className={L.top}>
          <div className="pp">
            <Image src="/profile.png" width={120} height={120} alt="Dhafit" />
          </div>
          <div className={L.nama}>Dhafit Farenza</div>
          <p>Translator & Frontend web developer</p>
        </div>
        <div className={L.project}>
          <div className={L.item}>
            <div className={L.jumlah}>3+</div>
            <div className={L.desc}>Running project</div>
          </div>
          <div className={L.item}>
            <div className={L.jumlah}>100+</div>
            <div className={L.desc}>Finished project</div>
          </div>
          <div className={L.item}>
            <div className={L.jumlah}>110+</div>
            <div className={L.desc}>Total project</div>
          </div>
        </div>
        <div className={L.list}>
          <div className={L.itemList}>
            <a href="https://twitter.com/DhafitF">
              <div className={L.link}>Twitter</div>
              <div className={L.icon}><FaTwitter /></div>
            </a>
          </div>
          <div className={L.itemList}>
            <a href="https://trakteer.id/dhafid">
              <div className={L.link}>Trakteer</div>
              <div className={L.icon}></div>
            </a>
          </div>
          <div className={L.itemList}>
            <a href="https://www.instagram.com/dhafitf">
              <div className={L.link}>Instagram</div>
              <div className={L.icon}><FaInstagram /></div>
            </a>
          </div>
          <div className={L.itemList}>
            <a href="https://www.nogisub.com/">
              <div className={L.link}>Fansub</div>
              <div className={L.icon}><FaBloggerB /></div>
            </a>
          </div>
          <div className={L.itemList}>
            <a href="https://www.facebook.com/dhafid.farenza/">
              <div className={L.link}>Facebook</div>
              <div className={L.icon}><FaFacebookF /></div>
            </a>
          </div>
          <div className={L.itemList}>
            <a href="https://github.com/DhafitFz">
              <div className={L.link}>Github</div>
              <div className={L.icon}><FaGithub /></div>
            </a>
          </div>
          <div className={L.itemList}>
            <a href="https://www.youtube.com/c/dhafitfarenza">
              <div className={L.link}>Youtube</div>
              <div className={L.icon}><FaYoutube /></div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
