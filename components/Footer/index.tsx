import F from './footer.module.css'
import Link from 'next/link'
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={F.footer}>
      <div className={F.display}>
        <div className={F.credit}>Dhafit Farenza</div>
        <div className={F.link}>
          <ul>
            <li><Link href="/profile"><a>Linktree</a></Link></li>
            <li><Link href="/contact"><a>Kontak</a></Link></li>
            <li><Link href="/about"><a>Tentang</a></Link></li>
          </ul>
        </div>
        <div className={F.social_media}>
          <ul>
            <li>
              <a href="https://www.facebook.com/dhafid.farenza/">
              <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/DhafitF">
              <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dhafitf">
              <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
