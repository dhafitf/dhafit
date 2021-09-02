import Layout from "../../components/Layout"
import C from './contact.module.css'
import ig from '../../assets/img/ig.jpg'
import fb from '../../assets/img/fb.png'
import Image from 'next/image'
import Link from 'next/link'

export default function contact() {
  return (
    <Layout title="Kontak | DhafitF">
      <div className="container">
        <h2 className="pageTitle">Kontak</h2>
        <div className="itemCont">
          <div className="sosmedCont">
            <h3 className={C.title}>Social Media</h3>
            <div className={C.sosmed}>
              <div className={C.thumb}>
              <Image src={ig} alt="ig" width="44px" height="44px" layout="intrinsic" objectFit="cover" />
              </div>
              <div className={C.text}>
                <p><a href="https://www.instagram.com/dhafitf">Instagram</a></p>
                <p>@dhafitf</p>
              </div>
              <div className={C.btn}>
                <a href="https://www.instagram.com/dhafitf">Follow</a>
              </div>
            </div>
            <div className={C.sosmed}>
              <div className={C.thumb}>
                <img src="https://pbs.twimg.com/profile_images/1359925585850507266/36rVLV1e_400x400.jpg" alt="" />
              </div>
              <div className={C.text}>
                <p><a href="https://twitter.com/DhafitF">Twitter</a></p>
                <p>@DhafitF</p>
              </div>
              <div className={C.btn}>
                <a href="https://twitter.com/DhafitF">Follow</a>
              </div>
            </div>
            <div className={C.sosmed}>
              <div className={C.thumb}>
              <Image src={fb} alt="ig" width="44px" height="44px" layout="intrinsic" objectFit="cover" />
              </div>
              <div className={C.text}>
                <p><a href="https://www.instagram.com/dhafitf">Instagram</a></p>
                <p>@dhafitf</p>
              </div>
              <div className={C.btn}>
                <a href="https://www.instagram.com/dhafitf">Follow</a>
              </div>
            </div>
            <div className={C.more}><Link href="/profile"><a>Lihat semua link</a></Link></div>
            </div>
            <div className={C.emailCont}>
              <h3 className={C.title}>Email</h3>
              <div className="code"><p>dhafidfz@gmail.com</p></div>
            </div>
        </div>
      </div>
    </Layout>
  )
}
